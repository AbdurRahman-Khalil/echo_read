import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence } from 'framer-motion';

import useBookStore from '../../../stores/books/BookStore';

import { Button } from "../../custom_components/Button";
import { Review } from "../../custom_components/Review";

import u1 from "../../../assets/megan_hanson.jpg";




const initialValues = {
    review: "",
};

const reviewSchema = Yup.object().shape({
    review: Yup.string()
        .required("Please write something before submitting.")
        .min(20, 'Review must be at least 20 characters.')
        .max(1000, 'Review must be at most 1000 characters.'),
});



export const BookReviews = ({ book }) => {
    const { addReview } = useBookStore(state => ({
        addReview: state.addReview
    }));

    const reviews = book.reviews || [];


    const onSubmit = (values, { resetForm }) => {
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
            id: uuidv4(),
            userImg: u1,
            userName: "Magan Hanson",
            theReview: values.review,
            reviewDate: `${day}, ${date} ${month} ${year}`
        };
        addReview(book.id, newReview);

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
                    <Form className="mt-3.5 mb-8 max-[331px]:mb-12">
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

                        <div className="space-x-10 max-[331px]:space-x-0 text-end max-[331px]:flex max-[331px]:flex-col-reverse max-[331px]:gap-3">
                            <button
                                type="reset"
                                className="text-slate-900/75 dark:text-slate-100/75 hover:text-slate-900 dark:hover:text-slate-100 active:text-slate-200 dark:active:text-slate-800 
                                duration-200 ease-linear font-bold dark:font-medium mt-4"
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
