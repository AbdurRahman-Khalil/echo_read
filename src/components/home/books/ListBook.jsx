import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import useBookStore from "../../../stores/books/BookStore";

import { Button } from "../../custom_components/Button";
import { IoClose } from "react-icons/io5";

import u5 from "../../../assets/vickie_mckinney.jpg";



const initialValues = {
    title: "",
    author: "",
    description: "",
    image: null,
};

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/webp", "image/svg"];
const MAX_FILE_SIZE = 300 * 1024; // 300 KB

const bookSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required.')
        .min(5, 'Title must be at least 5 characters.')
        .max(100, 'Title must be at most 100 characters.'),
    // .matches(/^[a-zA-Z0-9\s]+$/, 'Title can only contain alphanumeric characters and spaces.'),
    author: Yup.string()
        .required('Author is required.')
        .min(3, 'Author must be at least 3 characters.')
        .max(50, 'Author must be at most 50 characters.'),
    // .matches(/^[a-zA-Z0-9\s]+$/, 'Author can only contain alphanumeric characters and spaces.'),
    description: Yup.string()
        .required('Description is required.')
        .min(50, 'Description must be at least 50 characters.')
        .max(500, 'Description must be at most 500 characters.'),
    image: Yup.mixed()
        .required("image is required.")
        .nullable()
        .test("FILE_SIZE", "image is too big.",
            (value) => !value || (value && value.size <= MAX_FILE_SIZE)
        )
        .test("FILE_FORMAT", "Invalid format.",
            (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
        )
});



export const ListBook = ({ setListBookState }) => {

    const { addBook } = useBookStore((state) => ({
        addBook: state.addBook
    }))

    const handleClickOutside = (e) => {
        if (e.target.id === 'overlay') {
            setListBookState(false);
        }
    };


    const onSubmit = (values, { resetForm }) => {
        console.log("Following Data has been submitted successfully ", values);
        // console.log("Following Data has been submitted successfully " + JSON.stringify(values, null, 2));

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

        
        const reader = new FileReader();
        reader.readAsDataURL(values.image);
        reader.onloadend = () => {
            const base64Image = reader.result;

            addBook({
                id: uuidv4(),
                bookImg: base64Image,
                bookName: values.title,
                author: values.author,
                description: values.description, 
                ratings: 4.6,
                userImg: u5,
                userName: "Vickie Mckinney",
                reviews: [],
                listedOn: `${day}, ${date} ${month} ${year}`,
            });

            resetForm();
        };

        reader.onerror = (error) => {
            console.log('Error: ', error);
        };

        setTimeout(() => {
            setListBookState(false);
        }, 1000);
    };



    return (
        <motion.div
            id="overlay"
            onClick={handleClickOutside}
            className="fixed top-0 min-h-screen w-full flex justify-center items-center px-3.5 text-slate-800 dark:text-slate-100 bg-slate-950/25 dark:bg-slate-50/5 backdrop-blur-[20px] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, staggerChildren: "beforeChildren" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.01 }}
                className="relative bg-slate-50 dark:bg-slate-950 p-5 rounded-xl border border-slate-900/40 dark:border-slate-50/[22%] duration-200 ease-linear w-[28rem] max-[425px]:max-w-full"
            >
                <IoClose
                    className="text-[2rem] absolute top-[0.4rem] right-[0.45rem] cursor-pointer"
                    onClick={() => setListBookState(false)}
                />

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={bookSchema}
                >
                    {(formik) => (
                        <Form className="text-end">
                            <h1 className="text-[2.1rem] font-bold dark:font-semibold text-center mt-1 mb-6 duration-300 ease-linear">
                                List a Book
                            </h1>
                            <div className="space-y-3 text-start">
                                <div className="title">
                                    <Field
                                        className="py-3 field"
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Title"
                                    />
                                    <ErrorMessage
                                        name="title"
                                        className="error-msg mt-1 ml-2"
                                        component="p"
                                    />
                                </div>

                                <div className="author">
                                    <Field
                                        className="py-3 field"
                                        type="text"
                                        name="author"
                                        id="author"
                                        placeholder="Author"
                                    />
                                    <ErrorMessage
                                        name="author"
                                        className="error-msg mt-1 ml-2"
                                        component="p"
                                    />
                                </div>

                                <div className="description">
                                    <Field
                                        className="resize-none min-h-32 py-2 field"
                                        type="text"
                                        as="textarea"
                                        name="description"
                                        id="description"
                                        placeholder="Description"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        className="error-msg -mt-1"
                                        component="p"
                                    />
                                </div>

                                <div className="image">
                                    <input
                                        className="-mt-[0.35rem] cursor-pointer w-full font-semibold dark:font-medium pr-2 rounded-lg ring-1 ring-slate-900/25 dark:ring-slate-50/25
                                        file:font-medium file:dark:font-normal
                                        file:text-slate-800 file:dark:text-slate-100
                                        file:bg-slate-100 file:hover:bg-slate-200/80 file:dark:bg-slate-900 file:dark:hover:bg-slate-800/80
                                        file:mr-2.5 file:px-3 file:py-2.5 file:cursor-pointer
                                        file:rounded-ss-lg file:rounded-es-lg file:border-0 file:border-r file:border-slate-900/25 file:dark:border-slate-50/25
                                        file:duration-300 file:ease-linear
                                        "
                                        type="file"
                                        id="image"
                                        accept=".jpeg, .jpg, .png, .webp, .svg"
                                        onChange={e => {
                                            formik.setFieldValue("image", e.target.files[0]);
                                        }}
                                    />
                                    <ErrorMessage
                                        name="image"
                                        className="error-msg mt-1"
                                        component="p"
                                    />
                                </div>
                            </div>

                            <Button
                                btnType={"submit"}
                                btnText={"List now"}
                                addStyles={"py-3 w-full mt-7 text-[1.05rem]"}
                            />

                            <button
                                type="reset"
                                className="text-slate-900/75 dark:text-slate-100/75 hover:text-slate-900 dark:hover:text-slate-100 active:text-slate-200 dark:active:text-slate-800 duration-200 ease-linear font-semibold dark:font-medium mt-4"
                                onClick={formik.handleReset}
                            >
                                Clear Form
                            </button>
                        </Form>
                    )}
                </Formik>
            </motion.div>
        </motion.div>
    );
};















































// useEffect(() => {
//     // Prevent scrolling of background window
//     document.body.style.overflow = 'hidden';
//     return () => {
//         document.body.style.overflow = 'unset';
//     };
// }, []);


