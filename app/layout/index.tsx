import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { NavigationContainer } from '~/components/custom/ButtonNavigate';

interface LayoutCustomProps {
  children: ReactNode;
}

export default function LayoutCustom({ children }: LayoutCustomProps) {
  return (
    <div className="min-h-screen sm:px-96 relative">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      
      {children}
      
      <Toaster />
      <NavigationContainer />
    </div>
  );
}