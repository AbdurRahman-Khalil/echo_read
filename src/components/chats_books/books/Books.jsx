import { motion, AnimatePresence } from "framer-motion";

import { useLocation } from "react-router-dom";

import useBookStore from "../../../stores/books/BookStore";
import useSearchStore from "../../../stores/search/SearchStore";

// import { Categories } from "./categories/Categories";
import { Book } from "./Book";
// import { BookPage } from "./BookPage";
import { SearchBar } from "../../SearchBar"
import { Outlet } from "react-router-dom";



export const Books = () => {
    const { books } = useBookStore((state) => ({
        books: state.books,
    }));

    const { searchQuery } = useSearchStore((state) => ({
        searchQuery: state.searchQuery,
    }));

    const location = useLocation();

    const showBooksContainer = !location.pathname.includes("/app/books/");





    return (
        <div id="books" className="mt-3 max-[780px]:mt-3.5 mr-3.5 ml-[14.25rem] max-[785px]:ml-3.5">
            {/* <Categories /> */}
            <SearchBar hideSeek={"hidden max-[780px]:block w-full"} />

            {showBooksContainer && (


                <motion.div
                    id="books-container"
                    className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[561px]:grid-cols-1 min-[1425px]:grid-cols-4 gap-3 mt-4 max-[780px]:mt-5 mb-4"
                >
                    <AnimatePresence>
                        {
                            books.filter(book => {
                                const lowercasedQuery = searchQuery.trim().toLowerCase();

                                return lowercasedQuery === ""
                                    ?
                                    book
                                    :
                                    book.bookName.toLowerCase().includes(lowercasedQuery) ||
                                    book.author.toLowerCase().includes(lowercasedQuery) ||
                                    book.userName.toLowerCase().includes(lowercasedQuery)
                            })
                                .map(book => (
                                    <Book
                                        key={book.id}
                                        bookId={book.id}
                                        bookName={book.bookName}
                                        bookImg={book.bookImg}
                                        author={book.author}
                                        userImg={book.userImg}
                                        userName={book.userName}
                                        bookRating={book.bookRating}
                                    />
                                ))
                        }
                    </AnimatePresence>
                </motion.div>
            )}
            <Outlet />
        </div>
    );
};
