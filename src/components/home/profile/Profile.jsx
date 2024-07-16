
import { User } from "../../custom_components/User";
import { Gmail } from "../../custom_components/logos/Gmail";
import { Instagram } from "../../custom_components/logos/Instagram";
import { TwitterX } from "../../custom_components/logos/TwitterX";
// import { books } from "./home/books/Books/books";

import vickie_mckinney from "../../../assets/vickie_mckinney.jpg";

import b1 from "../../../assets/books/book1.jpeg";
import b2 from "../../../assets/books/book2.jpg";
import b3 from "../../../assets/books/book3.jpg";
import b4 from "../../../assets/books/book4.jpeg";
import b5 from "../../../assets/books/book5.jpeg";
import b6 from "../../../assets/books/book6.jpeg";

import u1 from "../../../assets/megan_hanson.jpg";
import u2 from "../../../assets/willard_arnold.jpg";
import u3 from "../../../assets/leta_carpenter.jpg";
import u4 from "../../../assets/owen_frazier.jpg";
import u5 from "../../../assets/vickie_mckinney.jpg";
import u6 from "../../../assets/julio_shaw.jpg";

import { FiEdit } from "react-icons/fi";
import { BsGenderFemale } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { PiCake } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Info } from './Info';
import { ContactInfo } from './ContactInfo';
import { MyBook } from "./MyBook";



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




export const Profile = () => {
    return (
        <div className="min-h-fit flex max-[555px]:flex-col gap-10 max-[555px]:gap-3 mx-3.5 pt-1 text-slate-800 dark:text-slate-100 font-semibold dark:font-medium">
            <div id="profile">
                <h2 className="flex items-center gap-5 text-[2.25rem] max-[1000px]:text-[2.035rem] max-[825px]:text-[2.125rem] max-[690px]:text-[2.04rem] max-[555px]:text-[2.25rem] py-1">
                    <IoArrowBackOutline className="text-[1.8rem] -ml-0.5 hover:scale-x-[1.15] hover:-translate-x-1 duration-200 ease-linear cursor-pointer" />
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
                                    infoText={6}
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
                                <p className="flex items-center gap-1.5">
                                    <BsTelephone className="text-[1.15rem]" /> 03371439697
                                </p>
                                <ContactInfo
                                    contactInfoIcon={<Gmail />}
                                    href={"https://gmail.com"}
                                    contactInfoText={"Vickie_Mckinney341@gmail.com"}
                                />
                                <ContactInfo
                                    contactInfoIcon={<Instagram />}
                                    href={"https://instagram.com"}
                                    contactInfoText={"vickie_mckinney"}
                                />
                                <ContactInfo
                                    contactInfoIcon={<TwitterX />}
                                    href={"https://:x.com"}
                                    contactInfoText={"vickie_mck"}
                                />
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
                        books.map(book => (
                            <MyBook
                                key={book.id}
                                bookImg={book.bookImg}
                                bookName={book.bookName}
                                author={book.author}
                                ratings={book.ratings}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};


