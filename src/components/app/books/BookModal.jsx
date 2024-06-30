import { useParams } from "react-router-dom";


export const BookModal = () => {
    const { bid } = useParams();

    return (
        <div>{bid} BookModal</div>
    );
};
