import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

import { booksData } from "./data"; 
import { myBooksData } from "./MyData"; 


const bookStore = (set) => ({

    books: booksData,
    myBooks: myBooksData,

    addBook: (book) => {
        set((state) => ({
            books: [book, ...state.books], 
            myBooks: [book, ...state.myBooks], 
        }));
    },
    deleteBook: (bookId) => {
        set((state) => ({
            books: state.books.filter((b) => b.id !== bookId),
            myBooks: state.myBooks.filter((b) => b.id !== bookId)
        }));
    },
});


const useBookStore = create(
    devtools (
        persist (bookStore, {
            name: "books"
        })
    )
);

export default useBookStore;