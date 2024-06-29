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

import star from "../../../assets/ratings/star.png";



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
        bookName: "The tales of Beedle The Bard",
        author: "J.K. Rowling",
        ratings: 4.5,
        userImg: u6,
        userName: "Julio Shaw"
    },
    {
        id: 6,
        bookImg: b6,
        bookName: "The tales of Beedle The Bard",
        author: "J.K. Rowling",
        ratings: 4.5,
        userImg: u6,
        userName: "Julio Shaw"
    },
    {
        id: 6,
        bookImg: b6,
        bookName: "The tales of Beedle The Bard",
        author: "J.K. Rowling",
        ratings: 4.5,
        userImg: u6,
        userName: "Julio Shaw"
    },
    {
        id: 6,
        bookImg: b6,
        bookName: "The tales of Beedle The Bard",
        author: "J.K. Rowling",
        ratings: 4.5,
        userImg: u6,
        userName: "Julio Shaw"
    },
];



export const Book = () => {
    return (
        <>{
            books.map(book => {
                return (
                    <div key={book.id} className="flex max-w-full min-h-44 -space-x-8 border rounded-lg border-slate-900/30 dark:border-slate-50/30 text-slate-800 dark:text-slate-100 transition-all duration-500">
                        <div className="max-w-[50%] min-h-44">
                            <img
                                className="max-w-[80%] min-h-full object-cover rounded-s-lg"
                                src={book.bookImg}
                                alt={book.bookName + "'s poster"}
                            />
                        </div>
                        <div className="font-bold dark:font-semibold flex flex-col flex-1 justify-between p-3 pr-3.5">
                            <p className="text-xl line-clamp-2">{book.bookName}</p>
                            <p className="text-sm font-semibold dark:font-medium line-clamp-1">{book.author}</p>
                            <div className="ratings flex items-center gap-0.5">
                                <p className="mt-1">{book.ratings}</p>
                                <img className="max-w-6" src={star} alt="start image" />
                                {/* <p>{"(10+ users)"}</p> */}
                            </div>
                            <div className="user flex items-center gap-1">
                                <img className="max-w-8 rounded-full p-[0.01rem] border border-slate-900/50 dark:border-slate-50/50" src={book.userImg} alt={book.userImg + "'s image"} />
                                <p className="text-[0.8rem] font-semibold dark:font-medium line-clamp-1">{book.userName}</p>
                            </div>
                            <button className="py-2 rounded-lg mt-2 font-semibold dark:font-medium border border-slate-900/30 dark:border-slate-50/30" >Exchange</button>
                        </div>
                    </div>
                )
            })
        }</>
    );
};
