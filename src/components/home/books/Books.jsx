import { Categories } from "./categories/Categories";
// import { Book } from "./Book";
import { BookOpened } from "./BookOpened";

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
    {
        id: 6,
        bookImg: b6,
        bookName: "The Tales of Beedle The Bard",
        author: "J.K. Rowling",
        ratings: 4.5,
        userImg: u6,
        userName: "Julio Shaw"
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
    {
        id: 6,
        bookImg: b6,
        bookName: "The Tales of Beedle The Bard",
        author: "J.K. Rowling",
        ratings: 4.5,
        userImg: u6,
        userName: "Julio Shaw"
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


export const Books = () => {
    return (
        <div id="books" className="mt-3 mr-3.5 ml-[14.25rem] max-[785px]:ml-3.5">
            <Categories />
            {/* <div id="books-container" className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[561px]:grid-cols-1 min-[1425px]:grid-cols-4 gap-3 mt-3.5">
                {
                    books.map(book => (
                        <Book
                            key={book.id}
                            bookImg={book.bookImg}
                            bookName={book.bookName}
                            author={book.author}
                            ratings={book.ratings}
                            userImg={book.userImg}
                            userName={book.userName}
                        />
                    ))
                }
            </div> */}
            <BookOpened />
        </div>
    );
};
