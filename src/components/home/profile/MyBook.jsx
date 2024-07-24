import { motion } from 'framer-motion';

import useBookStore from "../../../stores/books/BookStore";

import { Ratings } from "../../custom_components/Ratings";

import { CgTrash } from "react-icons/cg";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";




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


export const MyBook = ({ book }) => {
    const { deleteBook } = useBookStore((state) => ({
        deleteBook: state.deleteBook,
    }));

    return (
        <motion.div 
            key={book.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            className="book relative text-slate-100 rounded-xl border border-slate-900/15 dark:border-slate-50/15 cursor-pointer"
        >
            <CgTrash
                className="absolute top-0 right-0 text-[2.35rem] bg-slate-50/10 backdrop-blur-3xl rounded-se-xl rounded-es-xl px-2 py-1 z-20 cursor-pointer hover:text-red-300 duration-200 ease-linear"
                onClick={() => deleteBook(book.id)}
            />
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
                    className="mt-2"
                    variants={itemVariants}
                    transition={itemAnimations}
                >

                    {
                        book.bookRating === 0 ?
                            <Ratings bookId={book.id} addStarStyles={"text-[hsl(51,100%,58%)]"} /> :
                            // <p>{book.bookRating}</p>
                            <p className="flex items-center gap-[0.2rem] my-2 mb-2.5">
                            {[...Array(5)].map((star, index) => {
                                const rating = book.bookRating.toFixed(1);
                                const fullStars = Math.floor(rating);
                                const hasHalfStar = rating - fullStars >= 0.2 && rating - fullStars <= 0.6;
                                
                                return (
                                    <span key={index}>
                                        {index < fullStars ? (
                                            <FaStar className="text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] text-[1.035rem]" />
                                        ) : index === fullStars && hasHalfStar ? (
                                            <FaStarHalfAlt className="text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] text-[1.035rem]" />
                                        ) : (
                                            <FaRegStar className="text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] text-[1.035rem]" />
                                        )}
                                    </span>
                                );
                            })}
                        </p>
                    }


                </motion.div>
            </motion.div>
        </motion.div>
    );
};
