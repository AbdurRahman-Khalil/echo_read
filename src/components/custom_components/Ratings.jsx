import star from "../../assets/ratings/star.png";


export const Ratings = ({ styles, ratingStyles, ratings, addStarStyles }) => {
    return (
        <div className={`ratings flex items-center ${styles}`}>
            <p className={ratingStyles}>{ratings}</p>
            <img
                className={`min-h-full object-cover ${addStarStyles}`}
                src={star}
                alt="start image"
            />
        </div>
    );
};
