import { ExchangeBtn } from "../../custom_components/ExchangeBtn";
import { Ratings } from "../../custom_components/Ratings";
import { User } from "../../custom_components/User";
import { Review } from "../../custom_components/Review";

import b6 from "../../../assets/books/book6.jpeg";
import u1 from "../../../assets/megan_hanson.jpg";
import u2 from "../../../assets/willard_arnold.jpg";
import u3 from "../../../assets/leta_carpenter.jpg";
import u4 from "../../../assets/owen_frazier.jpg";
import u5 from "../../../assets/vickie_mckinney.jpg";

import { MdKeyboardBackspace } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";



export const BookOpened = () => {
    return (
        <div className="mt-4 p-3 pt-2 px-4 text-slate-800 dark:text-slate-100 rounded-lg border border-slate-900/20 dark:border-slate-50/20">
            <MdKeyboardBackspace className="text-[2rem] mb-4" />
            <div className="top flex justify-between max-[1000px]:flex-col max-[1000px]:gap-10 duration-300 ease-linear">
                <div className="top-left flex gap-4 max-[343px]:gap-3 max-w-[48%] max-[1100px]:max-w-[53%] max-[1000px]:max-w-[70%] max-[850px]:max-w-[75%] max-[635px]:max-w-[79%] max-[522px]:max-w-[83%] max-[464px]:max-w-[100%]">
                    <div className="book-open-img duration-300 ease-linear max-w-[33%] max-[1200px]:max-w-[38%] max-[1000px]:max-w-[35%] max-[850px]:max-w-[40%] max-[635px]:max-w-[43%] max-[522px]:max-w-[45%] max-[464px]:max-w-[43%] max-[343px]:max-w-[41%]">
                        <img className="max-w-full min-h-full object-cover rounded-lg border border-slate-900/30 dark:border-slate-50/30" src={b6} alt="" />
                    </div>
                    <div className="book-text flex-1 flex flex-col justify-between">
                        <div>
                            <h1 className="text-[2.3rem] min-[1000px]:max-[1100px]:text-[2.1rem] max-[850px]:text-[2.1rem] max-[785px]:text-[2.7rem] max-[635px]:text-[2.4rem] max-[522px]:text-[2.1rem] max-[384px]:text-[1.8rem] max-[343px]:text-[1.6rem] leading-[2.8rem] min-[1000px]:max-[1100px]:leading-[2.7rem] max-[850px]:leading-[2.6rem] max-[785px]:leading-[3.3rem] max-[635px]:leading-[2.9rem] max-[522px]:leading-[2.6rem] max-[384px]:leading-[2.25rem] max-[343px]:leading-[2rem] duration-300 ease-linear font-bold dark:font-semibold">The Tales of Beedle The Bard</h1>
                            <p className="text-[1.3rem] min-[1000px]:max-[1100px]:text-[1.2rem] max-[850px]:text-[1.2rem] max-[785px]:text-[1.4rem] max-[635px]:text-[1.25rem] max-[522px]:text-[1.1rem] max-[384px]:text-[1rem] max-[343px]:text-[0.962rem] duration-300 ease-linear font-semibold dark:font-medium mt-0.5 max-[850px]:mt-1 max-[785px]:mt-1.5 max-[343px]:mt-1">J.K. Rowling</p>
                        </div>

                        <Ratings
                            styles={"space-x-1.5"}
                            ratings={"4.5"}
                            ratingStyles={"mt-1.5 text-[1.5rem] min-[1000px]:max-[1100px]:text-[1.35rem] max-[850px]:text-[1.3rem] max-[785px]:text-[1.6rem] max-[635px]:text-[1.4rem] max-[522px]:text-[1.2rem] max-[384px]:text-[1.1rem] max-[343px]:text-[1.03rem] font-bold dark:font-semibold"}
                            addStarStyles={"max-w-[1.7rem] min-[1000px]:max-[1100px]:max-w-[1.6rem] max-[850px]:max-w-[1.5rem] max-[785px]:max-w-[1.8rem] max-[635px]:max-w-[1.4rem] max-[522px]:max-w-[1.2rem] max-[384px]:max-w-[1.1rem] max-[343px]:max-w-[1.03rem]"}
                        />
                    </div>
                </div>

                <div className="top-right mr-3 py-1 flex flex-col justify-between max-[1000px]:space-y-6 max-[464px]:w-[100%]">
                    <div className="space-y-3">
                        <User
                            styles={"user flex items-center gap-2"}
                            userImg={u1}
                            userName={"Megan Hanson"}
                            addImgStyles={"max-w-11 min-[1000px]:max-[1100px]:max-w-[2.63rem]"}
                            addUsernameStyles={"text-[1.1rem] min-[1000px]:max-[1100px]:text-[1.04rem] max-[522px]:text-[1rem] max-[384px]:text-[0.93rem]"}
                        />

                        <div className="flex items-center gap-1.5 ml-1">
                            <GiBlackBook className="text-2xl min-[1000px]:max-[1100px]:text-[1.4rem] max-[522px]:text-[1.25rem] max-[384px]:text-[1.1rem]" />
                            <p className="font-medium min-[1000px]:max-[1100px]:text-[0.95rem] max-[522px]:text-[0.92rem] max-[384px]:text-[0.88rem]">On: <code>04-07-2024</code></p>
                        </div>
                    </div>
                    <ExchangeBtn addStyles={"py-2.5 w-72 max-[464px]:w-full text-[1.05rem] max-[522px]:text-[1rem] max-[384px]:text-[0.96rem] max-[343px]:text-[0.925rem]"} />
                </div>
            </div>

            <div className="bottom mt-12">
                <div className="description mb-8">
                    <h2 className="text-[1.875rem] max-[522px]:text-[1.64rem] max-[384px]:text-[1.47rem] max-[343px]:text-[1.375rem] font-semibold dark:font-medium mb-1">Description</h2>
                    <p className="font-medium dark:font-normal max-[522px]:text-[0.96rem] max-[384px]:text-[0.93rem]">"The Tales of Beedle the Bard" is a collection of five wizarding fairy tales written by J.K. Rowling. Each story imparts moral lessons with a magical twist, beloved in the wizarding world of Harry Potter. The book includes "The Tale of the Three Brothers," which plays a significant role in the series' final installment. With illustrations and annotations by Albus Dumbledore, the book offers insights into the magical lore and traditions of the wizarding world. Rowling's enchanting storytelling brings these tales to life, making them timeless and captivating. The moral lessons embedded within the stories are both profound and thought-provoking. This collection is a charming and whimsical addition to the Harry Potter universe, appealing to fans of all ages. It is a must-have for anyone who loves the magic and wonder of Rowling's world.</p>
                </div>

                <div className="reviews">
                    <h2 className="text-[1.875rem] max-[522px]:text-[1.64rem] max-[384px]:text-[1.47rem] max-[343px]:text-[1.375rem] font-semibold dark:font-medium -mb-1">Reviews</h2>
                    <Review
                        userImg={u1}
                        userName={"Megan Hanson"}
                        theReview={`${"The Tales of Beedle the Bard"} is a delightful addition to the Harry Potter series. The fairy tales are charming, each carrying a unique moral lesson. Rowling's storytelling shines through, making it a must-read for fans. The illustrations and Dumbledore's notes add a rich, immersive layer. Perfect for readers of all ages.`}
                    />
                    <Review
                        userImg={u2}
                        userName={"Willard Arnold"}
                        theReview={`This book is a magical treat for Harry Potter enthusiasts. The tales are whimsical and filled with enchanting details. I loved how each story conveyed meaningful messages. Dumbledore's commentary provided fascinating insights. It's a wonderful companion to the original series.`}
                    />
                    <Review
                        userImg={u3}
                        userName={"Leta Carpenter"}
                        theReview={`${"The Tales of Beedle the Bard"} captivated me from the first page. The stories are simple yet profound, reminiscent of classic fairy tales. Rowling's creativity is evident in every tale. The added notes from Dumbledore offer a deeper understanding. A must-have for any Potterhead's collection.`}
                    />
                    <Review
                        userImg={u4}
                        userName={"Owen Frazier"}
                        theReview={`A charming collection of wizarding fairy tales, this book exceeded my expectations. Each story is well-crafted and engaging. The moral lessons are cleverly woven into the narrative. I particularly enjoyed the annotations by Albus Dumbledore. It's a fantastic addition to the Harry Potter world.`}
                    />
                    <Review
                        userImg={u5}
                        userName={"Vickie Mckinney"}
                        theReview={`${"The Tales of Beedle the Bard"} is a gem for both young readers and adults. The stories are enchanting and beautifully written. Rowling's imagination knows no bounds, as evidenced by these magical tales. The illustrations are a lovely touch. It's a delightful read that complements the Harry Potter series perfectly.`}
                    />
                </div>
            </div>
        </div>
    );
};
