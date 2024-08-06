import { useNavigate, Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import useBookStore from "../../stores/books/BookStore";

import { User } from "../custom_components/User";
import { Info } from './Info';
import { ContactInfo } from './ContactInfo';
import { MyBook } from "./MyBook";
import { Gmail } from "../custom_components/logos/Gmail";
import { Facebook } from "../custom_components/logos/Facebook";
// import { books } from "./home/books/Books/books";

import vickie_mckinney from "../../assets/vickie_mckinney.jpg";

// import { FiEdit } from "react-icons/fi";
import { BsGenderFemale } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { PiCake } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineSquaresPlus } from "react-icons/hi2";



export const Profile = () => {
    const { myBooks } = useBookStore((state) => ({
        myBooks: state.myBooks,
    }));

    const goBack = useNavigate();



    return (
        <div className="min-h-fit flex max-[555px]:flex-col gap-10 max-[555px]:gap-3 mx-3.5 pt-[4.6rem] text-slate-800 dark:text-slate-100 font-semibold dark:font-medium">
            <div id="profile">
                <h2 className="flex items-center gap-5 text-[2.25rem] max-[1000px]:text-[2.035rem] max-[825px]:text-[2.125rem] max-[690px]:text-[2.04rem] max-[555px]:text-[2.25rem] pt-1 pb-2.5">
                    <IoArrowBackOutline
                        className="text-[1.8rem] -ml-0.5 hover:scale-x-[1.15] hover:-translate-x-1 duration-200 ease-linear cursor-pointer"
                        onClick={() => goBack("/app")}
                    />
                    Profile
                </h2>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="profile-content max-w-[22rem] max-[555px]:max-w-full border border-slate-900/20 dark:border-slate-50/20 rounded-xl px-4 py-5 mt-1.5 mb-4 relative"
                    >
                        {/* <FiEdit className="absolute top-3 right-3 text-xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 duration-200 ease-linear cursor-pointer" /> */}
                        <User
                            styles={"flex flex-col items-center gap-3"}
                            userImg={vickie_mckinney}
                            userName={"Vickie Mckinney"}
                            addImgStyles={"max-w-[5.5rem]"}
                            addUsernameStyles={"text-[1.35rem] max-[1000px]:text-[1.28rem] max-[960px]:text-[1.235rem] max-[825px]:text-[1.265rem] max-[690px]:text-[1.275rem] max-[555px]:text-[1.35rem]"}
                        />
                        <div className="my-3.5 p-[0.05rem] bg-slate-500/25 max-w-full rounded-full"></div>
                        <div className="user-info text-[1.13rem] space-y-5 px-1 max-w-full">
                            <div className="info space-y-1.5">
                                <p className="relative before:absolute before:top-[0.2rem] before:-left-[0.41rem] dark:before:-left-[0.47rem] before:w-1 before:h-5 before:bg-slate-800 dark:before:bg-slate-100 before:rounded-full"
                                >Information</p>
                                <div className="text-[0.93rem] space-y-2">
                                    <Info
                                        infoIcon={<BsGenderFemale className="text-[1.3rem]" />}
                                        infoText={"Female"}
                                    />
                                    <Info
                                        infoIcon={<PiCake className="text-[1.3rem]" />}
                                        infoText={"April 13, 1992"}
                                    />
                                    <Info
                                        infoIcon={<GiBlackBook className="text-[1.3rem]" />}
                                        infoText={myBooks.length}
                                    />
                                    <Info
                                        infoIcon={<SlLocationPin className="text-[1.3rem]" />}
                                        infoText={"Hong Kong, China"}
                                    />
                                </div>
                            </div>
                            <div className="contact-info space-y-1.5">
                                <p className="relative before:absolute before:top-[0.2rem] before:-left-[0.41rem] dark:before:-left-[0.47rem] before:w-1 before:h-5 before:bg-slate-800 dark:before:bg-slate-100 before:rounded-full"
                                >Contact Info</p>
                                <div className="text-[0.93rem] space-y-1.5">
                                    <p className="flex items-center gap-[0.55rem]">
                                        <BsTelephone className="text-[1.15rem] ml-[0.08rem]" /> 03371439697
                                    </p>
                                    <ContactInfo
                                        contactInfoIcon={<Gmail />}
                                        href={"https://gmail.com"}
                                        contactInfoText={"Vickie_Mckinney341@gmail.com"}
                                    />
                                    <ContactInfo
                                        contactInfoIcon={<Facebook />}
                                        href={"https://facebook.com"}
                                        contactInfoText={"Vickie_Mckinney@yahoo.com"}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div id="my-books">
                <h2 className="flex justify-between items-center min-[556px]:max-[650px]:flex-col min-[556px]:max-[650px]:items-start text-[2.25rem] max-[1000px]:text-[2.035rem] max-[825px]:text-[2.125rem] max-[690px]:text-[2.04rem] max-[555px]:text-[2.25rem] pt-1 pb-2.5">
                    My Books
                    <Link to={"/app/list_book"}>
                        <HiOutlineSquaresPlus className="min-[556px]:max-[650px]:mt-2 text-[2.1rem] text-sky-400/80 dark:text-sky-400 hover:text-sky-300/75 dark:hover:text-sky-300 duration-200 ease-linear cursor-pointer" />
                    </Link>
                </h2>
                <div className="books mt-1.5 mb-5 grid grid-cols-5 max-[1150px]:grid-cols-4 max-[960px]:grid-cols-3 max-[825px]:grid-cols-2 max-[706px]:grid-cols-1 max-[555px]:grid-cols-3 max-[465px]:grid-cols-2 gap-4 max-[555px]:gap-3 max-[465px]:gap-3.5 min-[1425px]:grid-cols-6 min-[1600px]:grid-cols-7">
                    <AnimatePresence>
                        {
                            myBooks.length < 1
                                ?
                                <p className="col-span-2 text-slate-400 font-medium ">You have not listed any books</p>
                                :
                                myBooks.map(myBook => (
                                    <MyBook
                                        key={myBook.id}
                                        bookId={myBook.id}
                                        bookName={myBook.bookName}
                                        bookImg={myBook.bookImg}
                                        author={myBook.author}
                                        bookRating={myBook.bookRating}
                                    />
                                ))
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};


