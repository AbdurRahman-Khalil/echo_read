import { useState } from "react";

import useBookStore from "../../stores/books/BookStore";

import { FaStar, FaRegStar } from "react-icons/fa";



export const Ratings = ({ bookId, styles, addStarStyles }) => {
    
    const { addRating } = useBookStore((state) => ({
        addRating: state.addRating,
    }));

    const [rating, setRating] = useState(null);

    const handleRating = (newRating) => {
        setRating(newRating);
        addRating(bookId, newRating);
    };


    return (
        <div className={`ratings flex items-center gap-[0.2rem] my-2 mb-2.5 ${styles}`}>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;

                return (
                    <label key={index}>
                        <input
                            className="hidden"
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => handleRating(currentRating)}
                        />
                        <span  
                        >
                            {
                                currentRating <= rating
                                    ? <FaStar className={`${addStarStyles} cursor-pointer`} />
                                    : <FaRegStar className={`${addStarStyles} cursor-pointer`} />
                            }
                        </span>
                    </label>
                )
            })}
        </div>
    );
};







