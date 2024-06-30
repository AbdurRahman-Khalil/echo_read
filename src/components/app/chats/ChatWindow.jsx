import { useParams } from "react-router-dom";

export const ChatWindow = () => {
    const { cid } = useParams();

    return (
        <div className="fixed top-0 left-0 border-2 border-l-0 border-t-0 border-black/20 bg-black/20 backdrop-blur-xl p-5 ml-[13.44rem] text-xl font-semibold mt-[4.26rem] 
                        min-h-full w-full">
            {cid}
        </div>
    );
};
