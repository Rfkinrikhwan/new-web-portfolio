// Indonesian & additional profanity word list
// This augments the default English list from `bad-words`
export const indonesianBadWords = [
  'anjing', 'anjir', 'anying', 'anjrit', 'anjrot', 'bangsat', 'babi', 'bajingan',
  'kampret', 'keparat', 'kontol', 'memek', 'ngentot', 'jancok', 'jancuk',
  'cok', 'asu', 'goblok', 'tolol', 'idiot', 'brengsek', 'bejat',
  'tai', 'taik', 'sial', 'sialan', 'celeng', 'monyet', 'kunyuk',
  'sundel', 'sundal', 'pelacur', 'lonte', 'lacur', 'bokep', 'porno',
  'cabul', 'kurang ajar', 'bedebah', 'setan', 'iblis', 'dajjal',
  'mampus', 'matane', 'matamu', 'ndasmu', 'raimu', 'modiar',
  'peler', 'pepek', 'itil', 'ngewe', 'lendir', 'open bo', 'vcs',
  'banci', 'bencong', 'bencong', 'autis', 'cacat', 'cacat mental',
  'jablay', 'perek', 'bisyar', 'kimcil', 'gadun', 'sugar baby',
];

/**
 * Checks whether a string contains profanity.
 * Returns true if the text is clean, false if it contains bad words.
 */
export function isCleanText(text: string): boolean {
  const lower = text.toLowerCase();
  for (const word of indonesianBadWords) {
    // Use word boundary-ish matching
    if (lower.includes(word)) return false;
  }
  return true;
}

/**
 * Censors bad words by replacing them with asterisks.
 */
export function censorText(text: string): string {
  let result = text;
  for (const word of indonesianBadWords) {
    const regex = new RegExp(word, 'gi');
    result = result.replace(regex, '*'.repeat(word.length));
  }
  return result;
}
