import { useParams, useNavigate } from "react-router-dom";

import useBookStore from "../../../stores/books/BookStore";

import { Button } from "../../custom_components/Button";
import { Ratings } from "../../custom_components/Ratings";
import { BookRating } from "./BookRating";
import { User } from "../../custom_components/User";
import { BookReviews } from "./BookReviews";

import { IoArrowBackOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";



export const BookPage = () => {
    const { books } = useBookStore((state) => ({
        books: state.books,
    }));

    const { bid } = useParams();

    const book = books.find((b) => b.id === bid);

    const goback = useNavigate();

    if (!book) {
        return <div>Book not found</div>;
    }


    return (
        <div className="-mx-3.5 pb-5 pt-[0.02rem] px-[1.15rem] text-slate-800 dark:text-slate-100 ">
            <IoArrowBackOutline
                onClick={() => goback("/app")}
                className="text-[1.9rem] mt-0.5 mb-6 hover:scale-x-[1.15] hover:-translate-x-1 duration-200 ease-linear cursor-pointer"
            />
            <div className="top flex justify-between max-[1035px]:flex-col max-[1035px]:gap-10 duration-300 ease-linear">
                <div className="top-left flex gap-4 max-[343px]:gap-3 max-w-[48%] max-[1100px]:max-w-[53%] max-[1035px]:max-w-[70%] max-[850px]:max-w-[78%] max-[707px]:max-w-[80%] max-[640px]:max-w-[84%] max-[560px]:max-w-[86%] max-[522px]:max-w-[90%] max-[464px]:max-w-[100%]">
                    <div className="book-open-img duration-300 ease-linear max-w-[33%] max-[1220px]:max-w-[38%] max-[1000px]:max-w-[35%] max-[872px]:max-w-[40%] max-[690px]:max-w-[38.5%] max-[640px]:max-w-[43%] max-[570px]:max-w-[41%] max-[522px]:max-w-[43%] max-[482px]:max-w-[42%] max-[343px]:max-w-[41%]">
                        <img className="max-w-full min-h-full object-cover rounded-lg border border-slate-900/20 dark:border-slate-50/[13%]" src={book.bookImg} alt="" />
                    </div>
                    <div className="book-text flex-1 flex flex-col justify-between">
                        <div>
                            {/* max-[590px]:line-clamp-3 max-[522px]:line-clamp-4 max-[500px]:line-clamp-3 max-[464px]:line-clamp-4 */}
                            <h1 className="text-[2.3rem] min-[1035px]:max-[1100px]:text-[2.1rem] max-[850px]:text-[2.17rem] max-[785px]:text-[2.6rem] max-[640px]:text-[2.4rem] max-[522px]:text-[2.1rem] max-[384px]:text-[1.8rem] max-[343px]:text-[1.6rem] leading-[2.8rem] min-[1000px]:max-[1100px]:leading-[2.7rem] max-[850px]:leading-[2.6rem] max-[785px]:leading-[3.33rem] max-[640px]:leading-[2.9rem] max-[522px]:leading-[2.6rem] max-[384px]:leading-[2.25rem] max-[343px]:leading-[2rem] line-clamp-3 max-[522px]:line-clamp-4 max-[482px]:line-clamp-3 duration-300 ease-linear font-bold dark:font-semibold">{book.bookName}</h1>
                            <p className="text-[1.3rem] min-[1035px]:max-[1100px]:text-[1.2rem] max-[850px]:text-[1.2rem] max-[785px]:text-[1.3rem] max-[640px]:text-[1.25rem] max-[522px]:text-[1.1rem] max-[384px]:text-[1rem] max-[343px]:text-[0.962rem] duration-300 ease-linear font-semibold dark:font-medium mt-0.5 max-[850px]:mt-1 max-[785px]:mt-1.5 max-[343px]:mt-1">{book.author}</p>
                        </div>

                        {
                            book.bookRating === 0 ?
                                <Ratings
                                    bookId={book.id}
                                    addStarStyles={"text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] text-[1.41rem] max-[850px]:text-[1.35rem] max-[785px]:text-[1.62rem] max-[640px]:text-[1.41rem] max-[522px]:text-[1.35rem] max-[384px]:text-[1.15rem] max-[343px]:text-[1.05rem] duration-200 ease-linear"}
                                /> :
                                <BookRating
                                    bookRatings={book.bookRating}
                                    addStarStyles={"text-[1.41rem] max-[850px]:text-[1.35rem] max-[785px]:text-[1.62rem] max-[640px]:text-[1.41rem] max-[522px]:text-[1.35rem] max-[384px]:text-[1.15rem] max-[343px]:text-[1.05rem]"}
                                />
                        }
                    </div>
                </div>

                <div className="top-right mr-3 py-1 flex flex-col justify-between max-[1035px]:space-y-10 max-[464px]:w-[100%]">
                    <div className="space-y-4">
                        <User
                            styles={"user flex items-center gap-2"}
                            userImg={book.userImg}
                            userName={book.userName}
                            addImgStyles={"max-w-11 min-[1000px]:max-[1100px]:max-w-[2.63rem] max-[464px]:max-w-[2.53rem] max-[415px]:max-w-[2.4rem] max-[384px]:max-w-[2.3rem] max-[343px]:max-w-[2.1rem]"}
                            addUsernameStyles={"text-[1.1rem] min-[1000px]:max-[1100px]:text-[1.04rem] max-[522px]:text-[1rem] max-[464px]:text-[0.97rem] max-[415px]:text-[0.95rem] max-[384px]:text-[0.91rem] max-[343px]:text-[0.86rem]"}
                        />

                        <div className="flex items-center gap-1.5 ml-1">
                            <GiBlackBook className="text-2xl min-[1000px]:max-[1100px]:text-[1.4rem] max-[522px]:text-[1.25rem] max-[464px]:text-[1.2rem] max-[415px]:text-[1.15rem] max-[384px]:text-[1.1rem] max-[343px]:text-[0.99rem]" />
                            <p className="font-medium dark:font-normal min-[1000px]:max-[1100px]:text-[0.95rem] max-[522px]:text-[0.92rem] max-[464px]:text-[0.9rem] max-[415px]:text-[0.875rem] max-[384px]:text-[0.855rem] max-[343px]:text-[0.81rem]">On: {book.listedOn}</p>
                        </div>
                    </div>
                    <Button btnText={"Exchange"} addStyles={"py-2.5 w-72 max-[464px]:w-full text-[1.05rem] max-[522px]:text-[1rem] max-[384px]:text-[0.96rem] max-[343px]:text-[0.925rem]"} />
                </div>
            </div>

            <div className="bottom mt-12">
                <div id="description" className="mb-8">
                    <h2 className="text-[1.875rem] max-[1100px]:text-[1.73rem] max-[850px]:text-[1.62rem] max-[785px]:text-[1.975rem] max-[640px]:text-[1.855rem] max-[522px]:text-[1.62rem] max-[384px]:text-[1.43rem] max-[343px]:text-[1.345rem] max-[320px]:text-[1.315rem] font-semibold dark:font-medium mb-1"
                    >
                        Description:
                    </h2>
                    <p className="font-medium dark:font-normal max-[522px]:text-[0.96rem] max-[384px]:text-[0.93rem]">{book.description}</p>
                </div>

                <BookReviews book={book} />
            </div>
        </div>
    );
};




// parent div : rounded-lg border border-slate-900/20 dark:border-slate-50/20

// h2-desc: before:absolute before:top-[0.63rem] before:-left-1.5 before:w-[0.3rem] before:h-[55%] before:rounded-full before:bg-slate-700 dark:before:bg-slate-200
























































// import { Button } from "../../custom_components/Button";
// import { Ratings } from "../../custom_components/Ratings";
// import { User } from "../../custom_components/User";
// import { BookReviews } from "./BookReviews";

// import b6 from "../../../assets/books/book3.jpg";
// import u1 from "../../../assets/megan_hanson.jpg";

// import { IoArrowBackOutline } from "react-icons/io5";
// import { GiBlackBook } from "react-icons/gi";



// export const BookOpened = () => {
//     return (
//         <div className="my-4 p-3 pt-2 px-4 text-slate-800 dark:text-slate-100 rounded-lg border border-slate-900/20 dark:border-slate-50/20">
//             <IoArrowBackOutline className="text-[1.9rem] mt-0.5 mb-4 hover:scale-x-[1.15] hover:-translate-x-1 duration-200 ease-linear cursor-pointer" />
//             <div className="top flex justify-between max-[1000px]:flex-col max-[1000px]:gap-10 duration-300 ease-linear">
//                 <div className="top-left flex gap-4 max-[343px]:gap-3 max-w-[48%] max-[1100px]:max-w-[53%] max-[1000px]:max-w-[70%] max-[850px]:max-w-[75%] max-[640px]:max-w-[79%] max-[522px]:max-w-[83%] max-[464px]:max-w-[100%]">
//                     <div className="book-open-img duration-300 ease-linear max-w-[33%] max-[1200px]:max-w-[38%] max-[1000px]:max-w-[35%] max-[850px]:max-w-[40%] max-[640px]:max-w-[43%] max-[522px]:max-w-[45%] max-[464px]:max-w-[43%] max-[343px]:max-w-[41%]">
//                         <img className="max-w-full min-h-full object-cover rounded-lg border border-slate-900/30 dark:border-slate-50/30" src={b6} alt="" />
//                     </div>
//                     <div className="book-text flex-1 flex flex-col justify-between">
//                         <div>
//                             <h1 className="text-[2.3rem] min-[1000px]:max-[1100px]:text-[2.1rem] max-[850px]:text-[2.1rem] max-[785px]:text-[2.7rem] max-[640px]:text-[2.4rem] max-[522px]:text-[2.1rem] max-[384px]:text-[1.8rem] max-[343px]:text-[1.6rem] leading-[2.8rem] min-[1000px]:max-[1100px]:leading-[2.7rem] max-[850px]:leading-[2.6rem] max-[785px]:leading-[3.3rem] max-[640px]:leading-[2.9rem] max-[522px]:leading-[2.6rem] max-[384px]:leading-[2.25rem] max-[343px]:leading-[2rem] duration-300 ease-linear font-bold dark:font-semibold">The Casual Vacancy</h1>
//                             <p className="text-[1.3rem] min-[1000px]:max-[1100px]:text-[1.2rem] max-[850px]:text-[1.2rem] max-[785px]:text-[1.4rem] max-[640px]:text-[1.25rem] max-[522px]:text-[1.1rem] max-[384px]:text-[1rem] max-[343px]:text-[0.962rem] duration-300 ease-linear font-semibold dark:font-medium mt-0.5 max-[850px]:mt-1 max-[785px]:mt-1.5 max-[343px]:mt-1">J. K. Rwoling</p>
//                         </div>

//                         <Ratings
//                             styles={"space-x-1.5"}
//                             ratings={"4.5"}
//                             ratingStyles={"mt-1.5 text-[1.5rem] min-[1000px]:max-[1100px]:text-[1.35rem] max-[850px]:text-[1.3rem] max-[785px]:text-[1.6rem] max-[640px]:text-[1.4rem] max-[522px]:text-[1.2rem] max-[384px]:text-[1.1rem] max-[343px]:text-[1.03rem] font-bold dark:font-semibold"}
//                             addStarStyles={"max-w-[1.7rem] min-[1000px]:max-[1100px]:max-w-[1.6rem] max-[850px]:max-w-[1.5rem] max-[785px]:max-w-[1.8rem] max-[640px]:max-w-[1.4rem] max-[522px]:max-w-[1.2rem] max-[384px]:max-w-[1.1rem] max-[343px]:max-w-[1.03rem]"}
//                         />
//                     </div>
//                 </div>

//                 <div className="top-right mr-3 py-1 flex flex-col justify-between max-[1000px]:space-y-6 max-[464px]:w-[100%]">
//                     <div className="space-y-3">
//                         <User
//                             styles={"user flex items-center gap-2"}
//                             userImg={u1}
//                             userName={"Megan Hanson"}
//                             addImgStyles={"max-w-11 min-[1000px]:max-[1100px]:max-w-[2.63rem]"}
//                             addUsernameStyles={"text-[1.1rem] min-[1000px]:max-[1100px]:text-[1.04rem] max-[522px]:text-[1rem] max-[384px]:text-[0.93rem]"}
//                         />

//                         <div className="flex items-center gap-1.5 ml-1">
//                             <GiBlackBook className="text-2xl min-[1000px]:max-[1100px]:text-[1.4rem] max-[522px]:text-[1.25rem] max-[384px]:text-[1.1rem]" />
//                             <p className="font-medium dark:font-normal min-[1000px]:max-[1100px]:text-[0.95rem] max-[522px]:text-[0.92rem] max-[384px]:text-[0.88rem]">On: Wednesday, 4 July 2024</p>
//                         </div>
//                     </div>
//                     <Button btnText={"Exchange"} addStyles={"py-2.5 w-72 max-[464px]:w-full text-[1.05rem] max-[522px]:text-[1rem] max-[384px]:text-[0.96rem] max-[343px]:text-[0.925rem]"} />
//                 </div>
//             </div>

//             <div className="bottom mt-12">
//                 <div id="description" className="mb-8">
//                     <h2 className="text-[1.875rem] max-[522px]:text-[1.64rem] max-[384px]:text-[1.47rem] max-[343px]:text-[1.375rem] font-semibold dark:font-medium mb-1">Description</h2>
//                     <p className="font-medium dark:font-normal max-[522px]:text-[0.96rem] max-[384px]:text-[0.93rem]">{`${"The Tales of Beedle the Bard"} is a gem for both young readers and adults. The stories are enchanting and beautifully written. Rowling's imagination knows no bounds, as evidenced by these magical tales. The illustrations are a lovely touch. It's a delightful read that complements the Harry Potter series perfectly.`}</p>
//                 </div>

//                 <BookReviews />
//             </div>
//         </div>
//     );
// };
