import { useLocation } from '@remix-run/react';
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Leaf, Archive, Send } from 'lucide-react'
import { Link } from 'react-router-dom';

type ButtonNavigateProps = {
    path: string;
    label: string;
    icon?: React.ReactNode;
}

function ButtonNavigate({ path, label, icon }: ButtonNavigateProps) {
    const location = useLocation();
    const checkCurrentLocation = location.pathname === path;

    return (
        <Link to={path} className="relative">
            <motion.div
                layout
                className={`flex items-center gap-2 py-2 px-4 rounded-full relative`}
                initial={{
                    backgroundColor: 'transparent',
                    scale: 1,
                    opacity: 0.7
                }}
                animate={{
                    backgroundColor: checkCurrentLocation ? 'rgba(243, 244, 246, 0.5)' : 'transparent',
                    scale: checkCurrentLocation ? 1.05 : 1,
                    opacity: checkCurrentLocation ? 1 : 0.7
                }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    duration: 0.3
                }}
            >
                {!icon && <Home />}
                {icon && icon}

                {checkCurrentLocation && (
                    <AnimatePresence>
                        <motion.span
                            key="label"
                            initial={{
                                opacity: 0,
                                x: -10
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            exit={{
                                opacity: 0,
                                x: 10
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className="overflow-hidden whitespace-nowrap ml-2 text-sm"
                        >
                            {label}
                        </motion.span>
                    </AnimatePresence>
                )}
            </motion.div>
        </Link>
    )
}

function NavigationContainer() {
    return (
        <motion.div
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
            className='flex justify-around items-center fixed gap-2 px-3 bottom-10 left-1/2 transform -translate-x-1/2 shadow py-2 z-50 rounded-full bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
        >
            <ButtonNavigate label='Home' path='/' icon={<Home />} />
            <ButtonNavigate label='About' path='/about' icon={<Leaf />} />
            <ButtonNavigate label='Project' path='/project' icon={<Archive />} />
            {/* <ButtonNavigate label='Blog' path='/blog' icon={<PencilLine />} /> */}
            <ButtonNavigate label='Contact' path='/contact' icon={<Send />} />
        </motion.div>
    )
}

export { ButtonNavigate, NavigationContainer };