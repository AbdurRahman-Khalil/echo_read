import { useState } from "react";

import { FaStar, FaRegStar } from "react-icons/fa";


import useBookStore from "../../stores/books/BookStore";



export const Ratings = ({ bookId, styles, addStarStyles }) => {
    
    const [rating, setRating] = useState(null);

    const addRating = useBookStore((state) => state.addRating);

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
                                    ? <FaStar className={`${addStarStyles} text-[1.035rem] cursor-pointer`} />
                                    : <FaRegStar className={`${addStarStyles} text-[1.035rem] cursor-pointer`} />
                            }
                        </span>
                    </label>
                )
            })}
        </div>
    );
};







