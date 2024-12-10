import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@remix-run/react';
import { NavigationContainer } from '../custom/ButtonNavigate';

export default function LayoutCustom({ children }: { children: ReactNode }) {
    const location = useLocation();

    return (
        <motion.div className="min-h-screen sm:px-96 relative">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 120,
                        damping: 15
                    }}
                    className="w-full"
                >
                    {children}
                </motion.div>
            </AnimatePresence>

            <NavigationContainer />
        </motion.div>
    );
}