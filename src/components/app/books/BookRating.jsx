import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


export const BookRating = ({ bookRatings, addStarStyles }) => {
    return (
        <p className="flex items-center gap-[0.2rem] my-2 mb-2.5">
        {[...Array(5)].map((star, index) => {
            const rating = bookRatings.toFixed(1);
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating - fullStars >= 0.2 && rating - fullStars <= 0.6;

            return (
                <span key={index}>
                    {index < fullStars ? (
                        <FaStar className={`text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] ${addStarStyles} duration-200 ease-linear`} />
                    ) : index === fullStars && hasHalfStar ? (
                        <FaStarHalfAlt className={`text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] ${addStarStyles} duration-200 ease-linear`} />
                    ) : (
                        <FaRegStar className={`text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] ${addStarStyles} duration-200 ease-linear`} />
                    )}
                </span>
            );
        })}
    </p>
    );
};