// FlyoutMenu.js
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import userImg from "../../assets/megan_hanson.jpg";


export const FlyoutMenu = ({ onListBookClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleOptionClick = () => setIsOpen(false);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const menuVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    return (
        <div className="relative inline-block text-left -mb-1" ref={menuRef}>
            <div>
                <button
                    type="button"
                    className="max-w-12 border border-slate-900/30 dark:border-slate-50/30 rounded-full p-[0.025rem]"
                    onClick={toggleMenu}
                >
                    <img className="max-w-full rounded-full" src={userImg} alt="user-image" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        transition={{ duration: 0.2 }}
                        className="origin-top-right absolute right-0 w-56 rounded-lg shadow-lg bg-slate-50 dark:bg-slate-950 ring-1 ring-slate-900/20 dark:ring-slate-50/20 text-slate-800 dark:text-slate-100 font-semibold dark:font-medium"
                    >
                        <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a
                                href="#profile"
                                className="block px-5 py-3 rounded-ss-md rounded-se-md hover:bg-slate-200/55 dark:hover:bg-slate-800/55 duration-300 ease-linear"
                                role="menuitem"
                                onClick={handleOptionClick}
                            >
                                Profile
                            </a>
                            <a
                                href="#my-books"
                                className="block px-5 py-3 hover:bg-slate-200/55 dark:hover:bg-slate-800/55 duration-300 ease-linear"
                                role="menuitem"
                                onClick={handleOptionClick}
                            >
                                My Books
                            </a>
                            <a
                                className="block px-5 py-3 hover:bg-slate-200/55 dark:hover:bg-slate-800/55 duration-300 ease-linear cursor-pointer"
                                role="menuitem"
                                onClick={() => {
                                    onListBookClick();
                                    handleOptionClick();
                                }}
                            >
                                List Book
                            </a>
                            <a
                                href="#logout"
                                className="block px-5 py-3 rounded-es-md rounded-ee-md hover:bg-slate-200/55 dark:hover:bg-slate-800/55 duration-300 ease-linear"
                                role="menuitem"
                                onClick={handleOptionClick}
                            >
                                Logout
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};













