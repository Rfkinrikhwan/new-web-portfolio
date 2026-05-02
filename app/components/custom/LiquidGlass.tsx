import { useRef, useEffect, type ReactNode } from 'react';
import { getDisplacementFilter } from '~/lib/liquidGlass';

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  depth?: number;
  strength?: number;
  chromaticAberration?: number;
  blur?: number;
  color?: 'black' | 'white' | 'transparent';
  button?: boolean;
}

const supportsBackdropFilterUrl = (() => {
  if (typeof document === 'undefined') return false;
  const testEl = document.createElement('div');
  testEl.style.cssText = 'backdrop-filter: url(#test)';
  return (
    testEl.style.backdropFilter === 'url(#test)' ||
    testEl.style.backdropFilter === 'url("#test")'
  );
})();

function getGlassColorClass(color?: 'black' | 'white' | 'transparent') {
  switch (color) {
    case 'black':
      return 'glass-black';
    case 'white':
      return 'glass-white';
    default:
      return 'glass-transparent';
  }
}

export default function LiquidGlass({
  children,
  className = '',
  contentClassName = '',
  depth = 10,
  strength = 100,
  chromaticAberration = 0,
  blur = 0,
  color,
  button = false,
  style,
  ...props
}: LiquidGlassProps) {
  const glassRef = useRef<HTMLDivElement>(null);
  const filterLayerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glass = glassRef.current;
    const filterLayer = filterLayerRef.current;
    const content = contentRef.current;
    if (!glass || !filterLayer || !content) return;

    let animationFrameId: number;
    function redraw() {
      if (!content || !filterLayer || !glass) return;

      const rect = content.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);
      const radius = parseFloat(getComputedStyle(glass).borderRadius) || 0;

      const saturate = button ? 1.2 : 1.8;
      const brightness = button ? 1.15 : 1.05;

      filterLayer.style.height = `${height}px`;
      filterLayer.style.width = `${width}px`;

      if (strength === 0) {
        filterLayer.style.backdropFilter = `blur(${blur}px) brightness(${brightness}) saturate(${saturate})`;
        return;
      }

      if (supportsBackdropFilterUrl) {
        filterLayer.style.backdropFilter = `blur(${blur / 2}px) url('${getDisplacementFilter({
          height,
          width,
          radius,
          depth,
          strength,
          chromaticAberration,
        })}') blur(${blur}px) brightness(${brightness}) saturate(${saturate})`;
      } else {
        // Fallback for iOS/WebKit/Safari which doesn't support url() in backdrop-filter
        const fallbackBlur = blur > 0 ? blur : 12;
        const fallbackFilter = `blur(${fallbackBlur}px) brightness(${brightness * 1.1}) saturate(${saturate * 1.2})`;
        
        filterLayer.style.backdropFilter = fallbackFilter;
        // @ts-ignore
        filterLayer.style.webkitBackdropFilter = fallbackFilter;
        
        // Add a subtle noise texture to simulate material depth since we can't do refraction
        filterLayer.style.backgroundImage = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
        filterLayer.style.backgroundRepeat = 'repeat';
        filterLayer.style.opacity = '0.03';
      }
    }

    redraw();

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(redraw);
    });
    resizeObserver.observe(glass);

    return () => {
      resizeObserver.disconnect();
    };
  }, [depth, strength, chromaticAberration, blur, button, color]);

  const wrapperClasses = [
    className,
    'liquid-glass',
    'w-max',
    button ? 'liquid-glass-button cursor-pointer' : '',
    'relative overflow-hidden',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={glassRef} className={wrapperClasses}>
      {/* Specular highlight overlay — glossy shine */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none liquid-glass-specular"
        aria-hidden="true"
      />
      {/* Light overlay — very subtle, lets refraction show through */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(255, 255, 255, 0.03)' }}
        aria-hidden="true"
      />
      {/* Content */}
      <div
        ref={contentRef}
        className={`lg-content relative z-[3] flex w-full items-center justify-center text-center ${contentClassName}`}
      >
        {children}
      </div>
      {/* Filter layer */}
      <div className="absolute inset-0 z-[2]">
        <div
          ref={filterLayerRef}
          className={`glass-box m-0 ${getGlassColorClass(color)} ${className}`}
        />
      </div>
    </div>
  );
}
