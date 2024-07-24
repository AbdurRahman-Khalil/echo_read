import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { ThemeBtn } from './ThemeBtn';

import userImg from "../../assets/megan_hanson.jpg";

import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { PiBooks } from "react-icons/pi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";



export const FlyoutMenu = ({ setOpenProfile, onOpenProfileClick, onListBookClick }) => {
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
                    className="max-w-12 border border-slate-900/30 dark:border-slate-50/30 rounded-full p-[0.02rem]"
                    onClick={toggleMenu}
                >
                    <img className="max-w-full rounded-full" src={userImg} alt="user-image" />
                </button>
            </div>

                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={menuVariants}
                        transition={{ duration: 0.2 }}
                        className="origin-top-right absolute right-0 w-56 rounded-lg shadow-lg bg-slate-50 dark:bg-slate-950 ring-1 ring-slate-900/20 dark:ring-slate-50/20 text-slate-800 dark:text-slate-100 font-medium dark:font-normal overflow-hidden"
                    >
                        <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu" className='relative'>
                            <ThemeBtn
                                addStyles={"text-[1.35rem] dark:text-[1.4rem] absolute top-0 right-0 z-20 pt-4 pb-3.5 rounded-se-lg"}
                                hideSeek={"hidden max-[390px]:block"}
                            />
                            <a
                                href="#home"
                                className="pb-3.5 pt-4 rounded-ss-md rounded-se-md flyout-menu-item"
                                role="menuitem"
                                onClick={() => {
                                    setOpenProfile(false);
                                    handleOptionClick();
                                }}
                            >
                                <HiOutlineHome className='text-[1.4rem]' />
                                Home
                            </a>
                            <a
                                href="#profile"
                                className="py-3.5 flyout-menu-item"
                                role="menuitem"
                                onClick={() => {
                                    handleOptionClick();
                                    onOpenProfileClick();
                                }}
                            >
                                <CgProfile className='text-[1.4rem]' />
                                Profile
                            </a>
                            <a
                                href="#my-books"
                                className="py-3.5 flyout-menu-item"
                                role="menuitem"
                                onClick={() => {
                                    handleOptionClick();
                                    onOpenProfileClick();
                                }}
                            >
                                <PiBooks className='text-[1.4rem]' />
                                My Books
                            </a>
                            <a
                                className="py-3.5 cursor-pointer flyout-menu-item"
                                role="menuitem"
                                onClick={() => {
                                    onListBookClick();
                                    handleOptionClick();
                                }}
                            >
                                <HiOutlineViewGridAdd className='text-[1.4rem]' />
                                List Book
                            </a>
                            <a
                                className="min-[785px]:hidden py-3.5 cursor-pointer flyout-menu-item"
                                role="menuitem"
                                onClick={handleOptionClick}
                            >
                                <LuMessagesSquare className='text-[1.4rem]' />
                                Chats
                            </a>
                            <a
                                className="pt-3.5 pb-4 rounded-es-md rounded-ee-md cursor-pointer flyout-menu-item"
                                role="menuitem"
                                onClick={handleOptionClick}
                            >
                                <TbLogout2 className='text-[1.4rem]' />
                                Logout
                            </a>
                        </div>
                    </motion.div>
                )}
        </div>
    );
};













