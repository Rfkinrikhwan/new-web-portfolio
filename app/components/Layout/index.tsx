import { ReactNode } from 'react';

export default function LayoutCustom({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen sm:px-96">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

            {/* <div className="absolute inset-0 h-full w-full bg-[linear-gradient(45deg,#80808018_2px,transparent_2px),linear-gradient(135deg,#80808018_2px,transparent_2px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}

            {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#80808018_2px,transparent_2px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,#000_50%,transparent_100%)]"></div> */}

            {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#80808010_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)]"></div> */}

            {/* <div className="absolute inset-0 h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_20px,#80808018_20px,#80808018_30px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}

            {children}

            {/* Bottom Navigation */}
            <div >

            </div>
        </div>
    );
}

