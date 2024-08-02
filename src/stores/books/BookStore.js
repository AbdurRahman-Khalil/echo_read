import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

// import { booksData } from "./data"; 
// import { myBooksData } from "./MyData"; 


const bookStore = (set) => ({

    books: [],
    myBooks: [],

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
    addRating: (bookId, rating) => {
        set((state) => ({
            books: state.books.map((b) =>
                b.id === bookId
                    ? {
                        ...b,
                        usersRatings: [rating, ...(b.usersRatings || [])],
                        bookRating: [rating, ...(b.usersRatings || [])].reduce((a, c) => a + c, 0) / ((b.usersRatings || []).length + 1)
                    }
                    : b
            ),

            myBooks: state.myBooks.map((b) =>
                b.id === bookId
                    ? {
                        ...b,
                        usersRatings: [rating, ...(b.usersRatings || [])],
                        bookRating: [rating, ...(b.usersRatings || [])].reduce((a, c) => a + c, 0) / ((b.usersRatings || []).length + 1)
                    }
                    : b
            ),
        }));
    },

    addReview: (bookId, review) => {
        set((state) => ({
            books: state.books.map((b) =>
                b.id === bookId
                    ? {
                        ...b,
                        reviews: [review, ...(b.reviews || [])]
                    }
                    : b
            ),
            myBooks: state.myBooks.map((b) =>
                b.id === bookId
                    ? {
                        ...b,
                        reviews: [review, ...(b.reviews || [])]
                    }
                    : b
            ),
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