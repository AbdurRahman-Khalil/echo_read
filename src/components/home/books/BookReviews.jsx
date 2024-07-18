import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AnimatePresence } from 'framer-motion';

import { Button } from "../../custom_components/Button";
import { Review } from "../../custom_components/Review";

import u1 from "../../../assets/megan_hanson.jpg";
import u2 from "../../../assets/willard_arnold.jpg";
import u3 from "../../../assets/leta_carpenter.jpg";
import u4 from "../../../assets/owen_frazier.jpg";
import u5 from "../../../assets/vickie_mckinney.jpg";



const initialValues = {
    review: "",
};

const reviewSchema = Yup.object().shape({
    review: Yup.string()
        .required("Please write something before submitting.")
        .min(20, 'Review must be at least 20 characters.')
        .max(1000, 'Review must be at most 1000 characters.'),
});


const allReviews = [
    {
        id: 1,
        userImg: u1,
        userName: "Megan Hanson",
        theReview: `${"The Tales of Beedle the Bard"} is a delightful addition to the Harry Potter series. The fairy tales are charming, each carrying a unique moral lesson. Rowling's storytelling shines through, making it a must-read for fans. The illustrations and Dumbledore's notes add a rich, immersive layer. Perfect for readers of all ages.`,
        reviewDate: "Tuesday, 18 July 2024",
    },
    {
        id: 2,
        userImg: u2,
        userName: "Willard Arnold",
        theReview: `This book is a magical treat for Harry Potter enthusiasts. The tales are whimsical and filled with enchanting details. I loved how each story conveyed meaningful messages. Dumbledore's commentary provided fascinating insights. It's a wonderful companion to the original series.`,
        reviewDate: "Sunday, 15 March 2024",
    },
    {
        id: 3,
        userImg: u3,
        userName: "Leta Carpenter",
        theReview: `${"The Tales of Beedle the Bard"} captivated me from the first page. The stories are simple yet profound, reminiscent of classic fairy tales. Rowling's creativity is evident in every tale. The added notes from Dumbledore offer a deeper understanding. A must-have for any Potterhead's collection.`,
        reviewDate: "Saturday, 8 August 2023",
    },
    {
        id: 4,
        userImg: u4,
        userName: "Owen Frazier",
        theReview: `A charming collection of wizarding fairy tales, this book exceeded my expectations. Each story is well-crafted and engaging. The moral lessons are cleverly woven into the narrative. I particularly enjoyed the annotations by Albus Dumbledore. It's a fantastic addition to the Harry Potter world.`,
        reviewDate: "Thursday, 10 April 2024",
    },
    {
        id: 5,
        userImg: u5,
        userName: "Vickie Mckinney",
        theReview: `${"The Tales of Beedle the Bard"} is a gem for both young readers and adults. The stories are enchanting and beautifully written. Rowling's imagination knows no bounds, as evidenced by these magical tales. The illustrations are a lovely touch. It's a delightful read that complements the Harry Potter series perfectly.`,
        reviewDate: "Monday, 12 June 2024",
    },
];

allReviews.reverse();


export const BookReviews = () => {
    const [reviews, setReviews] = useState(allReviews);

    const onSubmit = (values, { resetForm }) => {
        
        // console.log("Following Data has been submitted successfully ", values);

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const currentDate = new Date(Date.now());
        const day = days[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();

        const newReview = {
            id: reviews.length + 1,
            userImg: u1,
            userName: "Magan Hanson",
            theReview: values.review,
            reviewDate: `${day}, ${date} ${month} ${year}`
        };
        setReviews([newReview, ...reviews]);

        resetForm();
    };


    return (
        <div id="reviews">
            <h2 className="text-[1.875rem] max-[522px]:text-[1.64rem] max-[384px]:text-[1.47rem] max-[343px]:text-[1.375rem] font-semibold dark:font-medium -mb-1">Reviews</h2>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={reviewSchema}
            >
                {(formik) => (
                    <Form className="mt-3.5 mb-8">
                        {/* <p className="text-[1.6rem] font-semibold dark:font-medium mb-2 ml-[0.18rem]">Your Review</p> */}
                        <div className="review">
                            <Field
                                className="resize-none min-h-32 py-2.5 text-[1.035rem]
                                        w-full px-3.5 font-semibold dark:font-medium placeholder:font-normal tracking-wide rounded-lg focus:ring-2 ring-slate-800 dark:ring-slate-100 outline-none border-2 border-slate-900/20 dark:border-slate-50/20 bg-transparent duration-200 ease-linear"
                                type="text"
                                as="textarea"
                                name="review"
                                id="review"
                                placeholder="Your thoughts about this Book..."
                            />
                            <ErrorMessage
                                name="review"
                                className="-mt-1 ml-1 text-amber-400 dark:text-amber-300 text-[0.965rem] font-medium dark:font-normal tracking-wide"
                                component="p"
                            />
                        </div>

                        <div className="space-x-10 text-end">
                            <button
                                type="reset"
                                className="text-slate-900/75 dark:text-slate-100/75 hover:text-slate-900 dark:hover:text-slate-100 active:text-slate-200 dark:active:text-slate-800 duration-200 ease-linear font-bold dark:font-medium mt-4"
                                onClick={formik.handleReset}
                            >
                                Clear Review
                            </button>

                            <Button
                                btnType={"submit"}
                                btnText={"Submit"}
                                addStyles={"px-10 py-3 mt-2.5 text-[1.05rem]"}
                            />
                        </div>
                    </Form>
                )}
            </Formik>

            {/* <div className="mt-7 mb-[1.1rem] p-[0.08rem] mx-auto bg-slate-500/25 max-w-[80%] rounded-full"></div> */}

            <ul className="list-none">
                <p className="font-semibold dark:font-medium tracking-wide">Total Reviews: {reviews.length}</p>
            <AnimatePresence>
            {
                reviews.map(review => (
                    <Review
                        key={review.id}
                        userImg={review.userImg}
                        userName={review.userName}
                        theReview={review.theReview}
                        date={review.reviewDate}
                    />
                ))
            }
            </AnimatePresence>
            </ul>            
        </div>
    )
}
