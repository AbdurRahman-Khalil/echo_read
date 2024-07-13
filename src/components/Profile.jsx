import { motion } from 'framer-motion';

import { User } from "./custom_components/User";
import { Gmail } from "./custom_components/logos/Gmail";
import { Instagram } from "./custom_components/logos/Instagram";
import { TwitterX } from "./custom_components/logos/TwitterX";
// import { books } from "./home/books/Books/books";

import vickie_mckinney from "../assets/vickie_mckinney.jpg";
import star from "../assets/ratings/star.png";

import b1 from "../assets/books/book1.jpeg";
import b2 from "../assets/books/book2.jpg";
import b3 from "../assets/books/book3.jpg";
import b4 from "../assets/books/book4.jpeg";
import b5 from "../assets/books/book5.jpeg";
import b6 from "../assets/books/book6.jpeg";

import u1 from "../assets/megan_hanson.jpg";
import u2 from "../assets/willard_arnold.jpg";
import u3 from "../assets/leta_carpenter.jpg";
import u4 from "../assets/owen_frazier.jpg";
import u5 from "../assets/vickie_mckinney.jpg";
import u6 from "../assets/julio_shaw.jpg";

import { FiEdit } from "react-icons/fi";
import { BsGenderFemale } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { PiCake } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { CgTrash } from "react-icons/cg";
import { IoArrowBackOutline } from "react-icons/io5";


const books = [
    {
        id: 1,
        bookImg: b1,
        bookName: "Lethal White",
        author: "Robert Galbraith",
        ratings: 4.6,
        userImg: u1,
        userName: "Megan Hanson"
    },
    {
        id: 2,
        bookImg: b2,
        bookName: "The Cuckoo Calling",
        author: "Robert Galbraith",
        ratings: 3.6,
        userImg: u2,
        userName: "Willard Arnold"
    },
    {
        id: 3,
        bookImg: b3,
        bookName: "The Casual Vacancy",
        author: "J.K. Rowling",
        ratings: 2.8,
        userImg: u3,
        userName: "Leta Carpenter"
    },
    {
        id: 4,
        bookImg: b4,
        bookName: "Wuthering Heights",
        author: "Thrushcross Grange",
        ratings: 5,
        userImg: u4,
        userName: "Owen Frazier"
    },
    {
        id: 5,
        bookImg: b5,
        bookName: "Soldier Island",
        author: "Thrushcross Grange",
        ratings: 2.5,
        userImg: u5,
        userName: "Vickie Mckinney"
    },
    {
        id: 6,
        bookImg: b6,
        bookName: "The Tales of Beedle The Bard",
        author: "J.K. Rowling",
        ratings: 4.5,
        userImg: u6,
        userName: "Julio Shaw"
    },
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

const itemAnimations = {
    type: "spring",
    stiffness: 200,
    damping: 20
}


export const Profile = () => {
    return (
        <div className="min-h-fit flex max-[555px]:flex-col gap-10 max-[555px]:gap-3 mx-3.5 pt-1 text-slate-800 dark:text-slate-100 font-semibold dark:font-medium">
            <div id="profile">
                <h2 className="flex items-center gap-5 text-[2.25rem] max-[1000px]:text-[2.035rem] max-[825px]:text-[2.125rem] max-[690px]:text-[2.04rem] max-[555px]:text-[2.25rem] py-1">
                    <IoArrowBackOutline className="text-[1.8rem] -ml-0.5 cursor-pointer" />
                    Profile
                </h2>

                <div className="profile-content max-w-[22rem] max-[555px]:max-w-full border border-slate-900/20 dark:border-slate-50/20 rounded-xl px-4 py-5 mt-1.5 mb-4 relative">
                    <FiEdit className="absolute top-3 right-3 text-xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 duration-200 ease-linear cursor-pointer" />
                    <User
                        styles={"flex flex-col items-center gap-3"}
                        userImg={vickie_mckinney}
                        userName={"Vickie Mckinney"}
                        addImgStyles={"max-w-[5.5rem]"}
                        addUsernameStyles={"text-[1.35rem] max-[1000px]:text-[1.28rem] max-[960px]:text-[1.235rem] max-[825px]:text-[1.265rem] max-[690px]:text-[1.275rem] max-[555px]:text-[1.35rem]"}
                    />
                    <div className="my-3.5 bg-slate-500/25 max-w-full p-[0.05rem]"></div>
                    <div className="user-info text-[1.13rem] space-y-5 px-1 max-w-full">
                        <div className="info space-y-1.5">
                            <p className="relative before:absolute before:top-[0.2rem] before:-left-[0.41rem] dark:before:-left-[0.47rem] before:w-1 before:h-5 before:bg-slate-800 dark:before:bg-slate-100 before:rounded-full"
                            >Information</p>
                            <div className="text-[0.95rem] space-y-2 font-medium dark:font-normal">
                                <div className="flex gap-2"><BsGenderFemale className="text-[1.3rem]" /><p className="font-semibold dark:font-medium text-[0.915rem]">Female</p></div>
                                <div className="flex gap-2"><PiCake className="text-[1.3rem]" /><p className="font-semibold dark:font-medium text-[0.915rem]">April 13, 1992</p></div>
                                <div className="flex gap-2"><GiBlackBook className="text-[1.3rem]" /><p className="font-semibold dark:font-medium text-[0.915rem]">06</p></div>
                                <div className="flex gap-2"><SlLocationPin className="text-[1.3rem]" /><p className="font-semibold dark:font-medium text-[0.915rem]">Hong Kong, China</p></div>
                            </div>
                        </div>
                        <div className="contact-info space-y-1.5">
                            <p className="relative before:absolute before:top-[0.2rem] before:-left-[0.41rem] dark:before:-left-[0.47rem] before:w-1 before:h-5 before:bg-slate-800 dark:before:bg-slate-100 before:rounded-full"
                            >Contact Info</p>
                            <div className="text-[0.93rem] space-y-1.5 font-semibold dark:font-medium">
                                <p className="flex items-center gap-1.5">
                                    <BsTelephone className="text-[1.15rem]" /> 03371439697
                                </p>
                                <p className="flex items-center gap-1.5">
                                    <Gmail />
                                    <a href="https://gmail.com" target="_blank" className="hover:text-sky-500 hover:dark:text-sky-300 duration-200 ease-linear">
                                        Vickie_Mckinney341@gmail.com
                                    </a>
                                </p>
                                <p className="flex items-center gap-1.5">
                                    <Instagram />
                                    <a href="https://instagram.com" target="_blank" className="hover:text-sky-500 hover:dark:text-sky-300 duration-200 ease-linear">
                                        vickie_mckinney
                                    </a>
                                </p>
                                <p className="flex items-center gap-1.5">
                                    <TwitterX />
                                    <a href="https://:x.com" target="_blank" className="hover:text-sky-500 hover:dark:text-sky-300 duration-200 ease-linear">
                                        vickie_mck
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="my-books">
                <h2 className="text-[2.25rem] max-[1000px]:text-[2.035rem] max-[825px]:text-[2.125rem] max-[690px]:text-[2.04rem] max-[555px]:text-[2.25rem] py-1">
                    My Books
                </h2>
                <div className="books mt-1.5 mb-4 grid grid-cols-5 max-[1150px]:grid-cols-4 max-[960px]:grid-cols-3 max-[825px]:grid-cols-2 max-[660px]:grid-cols-1 max-[555px]:grid-cols-3 max-[465px]:grid-cols-2 gap-4 max-[555px]:gap-3 max-[465px]:gap-3.5 min-[1425px]:grid-cols-6 min-[1600px]:grid-cols-7">
                    {
                        books.map(book => {
                            return (
                                <div key={book.id} className="book relative text-slate-100 rounded-xl border border-slate-900/15 dark:border-slate-50/15 cursor-pointer">
                                    <CgTrash className="absolute top-0 right-0 text-[2.35rem] bg-slate-50/10 backdrop-blur-3xl rounded-se-xl rounded-es-xl px-2 py-1 z-20 cursor-pointer hover:text-red-300 duration-200 ease-linear" />
                                    <img className="max-w-full min-h-full object-cover rounded-xl" src={book.bookImg} alt={book.bookName + "'s image"} />
                                    <motion.div
                                        className="book-text absolute top-0 left-0 flex flex-col gap-2 justify-center items-center w-full min-h-full bg-slate-950/20 dark:bg-slate-950/25 backdrop-blur-xl rounded-xl px-2.5"
                                        initial="hidden"
                                        whileHover="visible"
                                        variants={containerVariants}
                                    >
                                        <motion.h2
                                            className="text-[1.4rem] text-center font-bold leading-7"
                                            variants={itemVariants}
                                            transition={itemAnimations}
                                        >
                                            {book.bookName}
                                        </motion.h2>

                                        <motion.p
                                            className="text-center text-[1.035rem] font-medium leading-5"
                                            variants={itemVariants}
                                            transition={itemAnimations}
                                        >
                                            {book.author}
                                        </motion.p>
                                        <motion.div
                                            className="ratings flex items-center gap-0.5 mt-2"
                                            variants={itemVariants}
                                            transition={itemAnimations}
                                        >
                                            <p className="text-lg mt-1.5 font-semibold">{book.ratings}</p>
                                            <img
                                                className="min-h-full object-cover max-w-[1.8rem]"
                                                src={star}
                                                alt="start image"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};


