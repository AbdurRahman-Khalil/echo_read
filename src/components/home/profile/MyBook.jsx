import useBookStore from "../../../stores/books/BookStore";

import { motion } from 'framer-motion';

import star from "../../../assets/ratings/star.png";

import { CgTrash } from "react-icons/cg";



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


export const MyBook = ({ id, key, bookImg, bookName, author, ratings }) => {
    const { deleteBook } = useBookStore((state) => ({
        deleteBook: state.deleteBook,
    }));
    
    return (
        <div key={key} className="book relative text-slate-100 rounded-xl border border-slate-900/15 dark:border-slate-50/15 cursor-pointer">
            <CgTrash 
                className="absolute top-0 right-0 text-[2.35rem] bg-slate-50/10 backdrop-blur-3xl rounded-se-xl rounded-es-xl px-2 py-1 z-20 cursor-pointer hover:text-red-300 duration-200 ease-linear"
                onClick={() => deleteBook(id)}
            />
            <img className="max-w-full min-h-full object-cover rounded-xl" src={bookImg} alt={bookName + "'s image"} />
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
                    {bookName}
                </motion.h2>

                <motion.p
                    className="text-center text-[1.035rem] font-medium leading-5"
                    variants={itemVariants}
                    transition={itemAnimations}
                >
                    {author}
                </motion.p>
                <motion.div
                    className="ratings flex items-center gap-0.5 mt-2"
                    variants={itemVariants}
                    transition={itemAnimations}
                >
                    <p className="text-lg mt-1.5 font-semibold">{ratings}</p>
                    <img
                        className="min-h-full object-cover max-w-[1.8rem]"
                        src={star}
                        alt="start image"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};
