import { useLocation, useNavigate, Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useVelocity, useTransform, animate, useDragControls } from 'framer-motion';
import { Home, Leaf, Archive, PencilLine, Send, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../theme-provider';
import LiquidGlass from './LiquidGlass';
import { getDisplacementMap, getSpecularMap } from '~/lib/liquidGlass';

export type Theme = 'dark' | 'light' | 'system';

interface NavItem {
    path: string;
    label: string;
    icon: React.ReactNode;
    type: 'link' | 'theme';
}

const ThemeIcon = ({ theme, size }: { theme: Theme, size: number }) => {
    switch (theme) {
        case 'light':
            return <Sun size={size} strokeWidth={2} />;
        case 'dark':
            return <Moon size={size} strokeWidth={2} />;
        case 'system':
            return <Monitor size={size} strokeWidth={2} />;
    }
};

export default function NavigationContainer() {
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const dragControls = useDragControls();
    const [isDragging, setIsDragging] = useState(false);
    const [dimensions, setDimensions] = useState({ itemWidth: 80, wrapperHeight: 80, pillHeight: 66, iconSize: 26, fontSize: '9px' });

    useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth < 400) {
                setDimensions({ itemWidth: 58, wrapperHeight: 64, pillHeight: 52, iconSize: 18, fontSize: '10px' });
            } else if (window.innerWidth < 640) {
                setDimensions({ itemWidth: 64, wrapperHeight: 70, pillHeight: 56, iconSize: 20, fontSize: '11px' });
            } else {
                setDimensions({ itemWidth: 84, wrapperHeight: 80, pillHeight: 66, iconSize: 24, fontSize: '12px' });
            }
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const { itemWidth, wrapperHeight, pillHeight, iconSize, fontSize } = dimensions;

    useEffect(() => {
        if (isDragging) {
            const handlePointerUp = () => setIsDragging(false);
            window.addEventListener('pointerup', handlePointerUp);
            window.addEventListener('pointercancel', handlePointerUp);
            return () => {
                window.removeEventListener('pointerup', handlePointerUp);
                window.removeEventListener('pointercancel', handlePointerUp);
            };
        }
    }, [isDragging]);

    const navItems: NavItem[] = [
        { path: '/', label: 'Home', icon: <Home size={iconSize} strokeWidth={2} />, type: 'link' },
        { path: '/about', label: 'About', icon: <Leaf size={iconSize} strokeWidth={2} />, type: 'link' },
        { path: '/project', label: 'Project', icon: <Archive size={iconSize} strokeWidth={2} />, type: 'link' },
        { path: '/blog', label: 'Blog', icon: <PencilLine size={iconSize} strokeWidth={2} />, type: 'link' },
        { path: '/contact', label: 'Contact', icon: <Send size={iconSize} strokeWidth={2} />, type: 'link' },
        {
            path: '#theme',
            label: theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System',
            icon: <ThemeIcon theme={theme as Theme} size={iconSize} />,
            type: 'theme'
        },
    ];

    const getActiveIndex = () => {
        return navItems.findIndex(item => (item.type !== 'theme' && item.path === location.pathname));
    };

    const activeIndex = getActiveIndex() !== -1 ? getActiveIndex() : 0;

    const dragX = useMotionValue(activeIndex * itemWidth);
    const dragVelocity = useVelocity(dragX);
    const scaleX = useTransform(dragVelocity, [-1200, 0, 1200], [1.3, 1, 1.3]);
    const scaleY = useTransform(dragVelocity, [-1200, 0, 1200], [0.85, 1, 0.85]);

    useEffect(() => {
        animate(dragX, activeIndex * itemWidth, {
            type: "spring",
            stiffness: 400,
            damping: 24,
            restDelta: 0.001
        });
    }, [activeIndex, dragX, itemWidth]);

    const handleClick = (item: NavItem) => {
        if (item.type === 'theme') {
            const nextTheme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
            setTheme(nextTheme);
        } else {
            navigate(item.path);
        }
    };

    return (
        <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none px-4">
            <div className="dock-wrapper pointer-events-auto relative" style={{ height: wrapperHeight }}>
                {/* 01. PRECISION LENS styled dock track background */}
                <div
                    className={`flex relative h-full px-[8px] items-center rounded-[40px] ${resolvedTheme === 'dark' ? 'dock-track ' : 'dock-track-white'}`}
                    onPointerDown={(e) => {
                        setIsDragging(true);
                        dragControls.start(e);
                    }}
                    style={{ touchAction: 'none', cursor: isDragging ? 'grabbing' : 'grab' }}
                >

                    {/* The Background Precision Lens */}
                    <div
                        className="lens-glass-inner"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 40,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            pointerEvents: 'none',
                            background: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'url(#lensLiquidGlassFilter)',
                            WebkitBackdropFilter: 'url(#lensLiquidGlassFilter)'
                        }}
                    ></div>

                    <svg style={{ width: 0, height: 0, position: 'absolute' }}>
                        <defs>
                            <filter
                                id="lensLiquidGlassFilter"
                                colorInterpolationFilters="sRGB">
                                <feGaussianBlur
                                    id="lensFilterBlur"
                                    in="SourceGraphic"
                                    stdDeviation="0.5"
                                    result="blurred" />
                                <feImage
                                    id="lensDisplacementImage"
                                    href={getDisplacementMap({ height: 80, width: navItems.length * itemWidth + 50, radius: 40, depth: 12 })}
                                    x="0"
                                    y="0"
                                    width={navItems.length * itemWidth + 50}
                                    height="80"
                                    result="displacement_map"
                                    preserveAspectRatio="none" />
                                <feDisplacementMap
                                    id="lensDisplacementMap"
                                    in="blurred"
                                    in2="displacement_map"
                                    scale="50"
                                    xChannelSelector="R"
                                    yChannelSelector="G"
                                    result="displaced" />
                                <feColorMatrix
                                    in="displaced"
                                    type="saturate"
                                    values="1.3"
                                    result="displaced_saturated" />
                                <feImage
                                    id="lensSpecularImage"
                                    x="0"
                                    y="0"
                                    width={navItems.length * itemWidth + 50}
                                    height="100"
                                    result="specular_layer"
                                    preserveAspectRatio="none" />
                                <feComponentTransfer
                                    in="specular_layer"
                                    result="specular_faded">
                                    <feFuncA id="lensSpecularAlpha" type="linear" slope="1" />
                                </feComponentTransfer>
                                <feBlend
                                    in="specular_faded"
                                    in2="displaced_saturated"
                                    mode="screen" />
                            </filter>
                        </defs>
                    </svg>

                    {/* The Drag Pill */}
                    <motion.div
                        className="absolute z-[2] left-[8px]"
                        style={{
                            x: dragX,
                            scaleX,
                            scaleY,
                            width: itemWidth,
                            height: pillHeight,
                        }}
                        drag="x"
                        dragControls={dragControls}
                        dragListener={false}
                        dragConstraints={{ left: 0, right: (navItems.length - 1) * itemWidth }}
                        dragElastic={0.05}
                        onDragEnd={(e, info) => {
                            setIsDragging(false);
                            const currentX = dragX.get();
                            let nextIndex = Math.round(currentX / itemWidth);

                            if (nextIndex < 0) nextIndex = 0;
                            if (nextIndex > navItems.length - 1) nextIndex = navItems.length - 1;

                            handleClick(navItems[nextIndex]);
                        }}
                    >
                        <motion.div
                            animate={{ scale: isDragging ? 1.3 : 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 24 }}
                            className="w-full h-full"
                        >
                            <LiquidGlass
                                className="rounded-[35px] pointer-events-none"
                                depth={8}
                                strength={0}
                                chromaticAberration={0}
                                blur={10}
                            >
                                <div className={`${resolvedTheme === 'dark' ? 'dock-bubble-inner' : 'dock-bubble-inner-white'} pointer-events-none`} style={{ width: itemWidth, height: pillHeight }} />
                            </LiquidGlass>
                        </motion.div>
                    </motion.div>

                    {/* Navigation Items Overlaying the pill */}
                    {navItems.map((item, index) => {
                        const isActive = item.type !== 'theme' && activeIndex === index;

                        const content = (
                            <>
                                <span
                                    className={`transition-all ${isActive ? 'scale-[1.15]' : ''}`}
                                    style={{ transitionDuration: '400ms', transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}
                                >
                                    {item.icon}
                                </span>
                                <span
                                    className={`tracking-[0.05em] transition-transform ${isActive ? 'translate-y-[2px]' : ''}`}
                                    style={{ transitionDuration: '400ms', transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)', fontSize }}
                                >
                                    {item.label}
                                </span>
                            </>
                        );

                        // ✅ key dipisah dari commonProps, tidak di-spread ke JSX
                        const commonProps = {
                            style: { width: itemWidth },
                            className: `dock-item bg-transparent border-0 flex flex-col items-center justify-center gap-1 z-10 relative cursor-pointer outline-none transition-colors duration-300 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'} ${isActive ? 'active' : ''}`,
                            'aria-label': item.label,
                            'aria-current': isActive ? ('page' as const) : undefined,
                        };

                        if (item.type === 'theme') {
                            return (
                                <button
                                    key={item.path}
                                    {...commonProps}
                                    onClick={() => handleClick(item)}
                                >
                                    {content}
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                {...commonProps}
                            >
                                {content}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

export { NavigationContainer };