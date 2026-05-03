import { ReactNode, useState, useEffect } from 'react';
import { useLocation } from '@remix-run/react';
import { Toaster } from 'sonner';
import { NavigationContainer } from '~/components/custom/ButtonNavigate';

interface LayoutCustomProps {
  children: ReactNode;
}

export default function LayoutCustom({ children }: LayoutCustomProps) {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isProjectDetail = location.pathname.startsWith('/project/') && location.pathname !== '/project';
  const isBlogDetail = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
  const hideDock = isProjectDetail || isBlogDetail;

  return (
    <>
      <div className="w-100 max-w-[780px] mx-auto min-h-screen relative">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

        <main className='!z-50 !relative'>
          {children}
        </main>

        {mounted && <Toaster />}
      </div>

      {/* Dock rendered outside all relative containers so fixed positioning works on all devices */}
      {mounted && !hideDock && <NavigationContainer />}
    </>
  );
}