import React, { useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '~/lib/supabase';
import { isCleanText } from '~/lib/profanityFilter';
import { Send, User, MessageCircle, Users, CornerDownRight, X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '~/components/theme-provider';
import LiquidGlass from './LiquidGlass';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  username: string;
  content: string;
  created_at: string;
  reply_to_id: string | null;
  reply_to?: { username: string; content: string } | null;
}

interface Reaction {
  id: string;
  message_id: string;
  emoji: string;
  username: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const EMOJI_OPTIONS = ['👍', '❤️', '😂', '🔥', '😮', '👏'];

/** Deterministically assign a color class to a username */
function getUsernameColor(name: string): string {
  const colors = [
    'text-rose-400', 'text-orange-400', 'text-amber-400', 'text-emerald-400',
    'text-teal-400', 'text-sky-400', 'text-violet-400', 'text-pink-400',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function GroupChat() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';

  // State
  const [messages, setMessages] = useState<Message[]>([]);
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [onlineCount, setOnlineCount] = useState(1);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null);
  const [replyTo, setReplyTo] = useState<Message | null>(null);
  const [showEmojiPickerFor, setShowEmojiPickerFor] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const presenceChannelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  const displayName = username.trim() || 'Anonymous';

  // ── Fetch initial data ────────────────────────────────────────────────────

  useEffect(() => {
    async function fetchData() {
      const [{ data: msgs }, { data: reacts }] = await Promise.all([
        supabase
          .from('chat_messages')
          .select('*, reply_to:reply_to_id(username, content)')
          .order('created_at', { ascending: true })
          .limit(50),
        supabase.from('message_reactions').select('*'),
      ]);

      if (msgs) setMessages(msgs as Message[]);
      if (reacts) setReactions(reacts as Reaction[]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // ── Realtime: messages & reactions ───────────────────────────────────────

  useEffect(() => {
    const channel = supabase
      .channel('chat-changes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages' }, async (payload) => {
        // Fetch with reply join
        const { data } = await supabase
          .from('chat_messages')
          .select('*, reply_to:reply_to_id(username, content)')
          .eq('id', payload.new.id)
          .single();
        if (data) setMessages((prev) => [...prev, data as Message]);
      })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'message_reactions' }, (payload) => {
        setReactions((prev) => [...prev, payload.new as Reaction]);
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'message_reactions' }, (payload) => {
        setReactions((prev) => prev.filter((r) => r.id !== payload.old.id));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  // ── Presence: online count + typing ──────────────────────────────────────

  useEffect(() => {
    const channel = supabase.channel('live-chat-presence', {
      config: { presence: { key: Math.random().toString(36).slice(2) } },
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        setOnlineCount(Object.keys(state).length || 1);
      })
      .on('broadcast', { event: 'typing' }, ({ payload }) => {
        const typer: string = payload.username;
        setTypingUsers((prev) => prev.includes(typer) ? prev : [...prev, typer]);
        setTimeout(() => {
          setTypingUsers((prev) => prev.filter((u) => u !== typer));
        }, 2500);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') await channel.track({ online_at: new Date().toISOString() });
      });

    presenceChannelRef.current = channel;
    return () => { supabase.removeChannel(channel); };
  }, []);

  // ── Auto-scroll ───────────────────────────────────────────────────────────

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typingUsers]);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const broadcastTyping = useCallback(() => {
    presenceChannelRef.current?.send({ type: 'broadcast', event: 'typing', payload: { username: displayName } });
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
  }, [displayName]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Profanity check for message and username
    if (!isCleanText(newMessage.trim()) || !isCleanText(username.trim())) {
      setInputError('⚠️ Pesan mengandung kata-kata tidak pantas. Tolong gunakan bahasa yang sopan!');
      setTimeout(() => setInputError(null), 4000);
      return;
    }

    setInputError(null);
    const { error } = await supabase.from('chat_messages').insert([{
      username: displayName,
      content: newMessage.trim(),
      reply_to_id: replyTo?.id ?? null,
    }]);

    if (!error) {
      setNewMessage('');
      setReplyTo(null);
    }
  };

  const handleReaction = async (messageId: string, emoji: string) => {
    setShowEmojiPickerFor(null);
    const existing = reactions.find((r) => r.message_id === messageId && r.emoji === emoji && r.username === displayName);

    if (existing) {
      await supabase.from('message_reactions').delete().eq('id', existing.id);
    } else {
      await supabase.from('message_reactions').insert([{ message_id: messageId, emoji, username: displayName }]);
    }
  };

  // ── Helpers for render ────────────────────────────────────────────────────

  const getReactionsForMessage = (messageId: string) => {
    const grouped: Record<string, { count: number; reacted: boolean }> = {};
    reactions
      .filter((r) => r.message_id === messageId)
      .forEach((r) => {
        if (!grouped[r.emoji]) grouped[r.emoji] = { count: 0, reacted: false };
        grouped[r.emoji].count++;
        if (r.username === displayName) grouped[r.emoji].reacted = true;
      });
    return grouped;
  };

  const typingText = typingUsers
    .filter((u) => u !== displayName)
    .slice(0, 2)
    .join(', ');

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2 mt-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full glass-badge">
            <MessageCircle className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
          </div>
          <h2 className="text-xl font-bold">Live Chat</h2>
        </div>
        {/* Online counter */}
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${dark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600'}`}>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <Users className="w-3 h-3" />
          <span>{onlineCount} online</span>
        </div>
      </div>

      <LiquidGlass className="rounded-3xl !w-full overflow-hidden" depth={6} strength={0} blur={12} contentClassName="!block">
        <div className={`absolute inset-0 pointer-events-none rounded-3xl border ${dark ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />

        <div className="relative z-10 flex flex-col h-[520px]">

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 scroll-smooth custom-scrollbar">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-zinc-500">
                <div className="w-6 h-6 border-2 border-zinc-500/20 border-t-zinc-500 rounded-full animate-spin" />
                <span className="text-sm">Loading messages...</span>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-zinc-500 italic text-sm">
                No messages yet. Be the first to say something! 👋
              </div>
            ) : (
              <AnimatePresence initial={false}>
                {messages.map((msg) => {
                  const msgReactions = getReactionsForMessage(msg.id);
                  const hasReactions = Object.keys(msgReactions).length > 0;
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-start gap-1 w-full group"
                      onMouseEnter={() => setHoveredMessageId(msg.id)}
                      onMouseLeave={() => { setHoveredMessageId(null); setShowEmojiPickerFor(null); }}
                    >
                      {/* Username + time */}
                      <div className="flex items-center gap-2 px-1">
                        <span className={`font-bold text-xs ${getUsernameColor(msg.username)}`}>{msg.username}</span>
                        <span className="text-[9px] text-zinc-500 uppercase tracking-wider opacity-60">
                          {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      {/* Reply preview */}
                      {msg.reply_to && (
                        <div className={`flex items-start gap-1.5 ml-1 px-3 py-1.5 rounded-xl border-l-2 text-xs max-w-[80%] ${dark ? 'border-white/20 bg-white/5 text-zinc-400' : 'border-black/20 bg-black/5 text-zinc-500'}`}>
                          <CornerDownRight className="w-3 h-3 mt-0.5 shrink-0 opacity-60" />
                          <span className="truncate"><strong>{msg.reply_to.username}:</strong> {msg.reply_to.content}</span>
                        </div>
                      )}

                      {/* Bubble + actions */}
                      <div className="relative flex items-end gap-2 w-full">
                        <div className={`relative py-3 px-4 rounded-2xl rounded-tl-none text-sm border ${dark ? 'bg-white/5 border-white/10 text-zinc-200' : 'bg-black/5 border-black/5 text-zinc-800'} max-w-[90%] sm:max-w-[75%] break-words leading-relaxed`}>
                          {msg.content}
                        </div>

                        {/* Hover actions */}
                        <AnimatePresence>
                          {hoveredMessageId === msg.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.85 }}
                              className="flex items-center gap-1 mb-1"
                            >
                              {/* Reply button */}
                              <button
                                onClick={() => setReplyTo(msg)}
                                className={`p-1.5 rounded-lg text-xs transition-all ${dark ? 'hover:bg-white/10 text-zinc-400' : 'hover:bg-black/5 text-zinc-500'}`}
                                title="Reply"
                              >
                                <CornerDownRight className="w-3.5 h-3.5" />
                              </button>
                              {/* Emoji button */}
                              <div className="relative">
                                <button
                                  onClick={() => setShowEmojiPickerFor(showEmojiPickerFor === msg.id ? null : msg.id)}
                                  className={`p-1.5 rounded-lg text-xs transition-all ${dark ? 'hover:bg-white/10 text-zinc-400' : 'hover:bg-black/5 text-zinc-500'}`}
                                  title="React"
                                >
                                  😊
                                </button>
                                <AnimatePresence>
                                  {showEmojiPickerFor === msg.id && (
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.85, y: 4 }}
                                      animate={{ opacity: 1, scale: 1, y: 0 }}
                                      exit={{ opacity: 0, scale: 0.85, y: 4 }}
                                      className={`absolute bottom-full left-0 mb-1 flex gap-1 p-1.5 rounded-2xl border shadow-xl z-50 ${dark ? 'bg-zinc-900 border-white/10' : 'bg-white border-black/5'}`}
                                    >
                                      {EMOJI_OPTIONS.map((emoji) => (
                                        <button
                                          key={emoji}
                                          onClick={() => handleReaction(msg.id, emoji)}
                                          className="text-base hover:scale-125 transition-transform p-0.5"
                                        >
                                          {emoji}
                                        </button>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Reactions */}
                      {hasReactions && (
                        <div className="flex flex-wrap gap-1 pl-1 mt-0.5">
                          {Object.entries(msgReactions).map(([emoji, { count, reacted }]) => (
                            <button
                              key={emoji}
                              onClick={() => handleReaction(msg.id, emoji)}
                              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border transition-all ${reacted
                                ? dark ? 'bg-white/15 border-white/20 text-white' : 'bg-black/10 border-black/15 text-black'
                                : dark ? 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10' : 'bg-black/5 border-black/5 text-zinc-600 hover:bg-black/10'
                              }`}
                            >
                              {emoji} <span>{count}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            )}

            {/* Typing indicator */}
            <AnimatePresence>
              {typingText && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="flex items-center gap-2 text-xs text-zinc-500"
                >
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                  <span><strong>{typingText}</strong> is typing...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input area */}
          <div className={`p-4 sm:p-5 border-t ${dark ? 'border-white/10 bg-white/[0.02]' : 'border-black/5 bg-black/[0.02]'}`}>

            {/* Reply banner */}
            <AnimatePresence>
              {replyTo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`flex items-center justify-between gap-2 px-3 py-2 mb-3 rounded-xl border-l-2 text-xs ${dark ? 'border-white/20 bg-white/5 text-zinc-400' : 'border-black/20 bg-black/5 text-zinc-500'}`}
                >
                  <span className="truncate"><strong>Replying to {replyTo.username}:</strong> {replyTo.content}</span>
                  <button onClick={() => setReplyTo(null)} className="shrink-0 opacity-60 hover:opacity-100">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSendMessage} className="flex flex-col gap-3">
              {/* Name input */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${dark ? 'bg-white/5 border-white/10 focus-within:border-white/20' : 'bg-black/5 border-black/5 focus-within:border-black/10'}`}>
                <User className="w-4 h-4 text-zinc-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Name (optional)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-zinc-500 text-zinc-800 dark:text-zinc-200"
                />
              </div>

              {/* Message input + send */}
              <div className="flex gap-2.5 w-full">
                <div className="flex-1 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => { setNewMessage(e.target.value); setInputError(null); broadcastTyping(); }}
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(e as any); } }}
                    className={`w-full px-5 py-3.5 rounded-2xl border outline-none transition-all ${
                      inputError
                        ? 'border-red-400/50 bg-red-500/5 text-red-500 placeholder:text-red-400/50'
                        : dark
                          ? 'bg-white/5 border-white/10 focus:border-white/20 text-white placeholder:text-zinc-500'
                          : 'bg-black/5 border-black/5 focus:border-black/10 text-black placeholder:text-zinc-400'
                    }`}
                  />
                  {/* Error message */}
                  <AnimatePresence>
                    {inputError && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="flex items-center gap-1.5 text-xs text-red-500 px-1"
                      >
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                        {inputError}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="px-5 h-[54px] shrink-0 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:scale-[1.03] active:scale-95 disabled:opacity-30 disabled:scale-100 transition-all shadow-xl shadow-black/10 flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </LiquidGlass>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(128,128,128,0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(128,128,128,0.4); }
      `}} />
    </div>
  );
}
