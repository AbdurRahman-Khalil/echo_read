import star from "../../../assets/ratings/star.png";


export const Book = ({ key, bookImg, bookName, author, ratings, userImg, userName }) => {
    return (
        <div
            key={key}
            className="flex max-w-full min-h-44 -space-x-8 border rounded-lg border-slate-900/30 dark:border-slate-50/30 text-slate-800 dark:text-slate-100 transition-all duration-500"
        >
            <div className="max-w-[50%] min-h-44">
                <img
                    className="max-w-[80%] min-h-full object-cover rounded-s-lg"
                    src={bookImg}
                    alt={bookName + "'s poster"}
                />
            </div>
            <div className="relative font-bold dark:font-semibold flex flex-col flex-1 justify-between p-3 pr-3.5">
                <p className="text-xl line-clamp-2 leading-6">{bookName}</p>
                <p className="text-sm font-semibold dark:font-medium line-clamp-1">{author}</p>
                <div className="ratings absolute top-0 right-0 pl-1.5 pb-0.5 border-b border-l border-slate-900/30 dark:border-slate-50/30 rounded-se-lg rounded-es-lg flex items-center">
                    <p className="mt-1">{ratings}</p>
                    <img className="max-w-6" src={star} alt="start image" />
                    {/* <p>{"(10+ users)"}</p> */}
                </div>
                <div className="user flex items-center gap-1">
                    <img className="max-w-8 rounded-full p-[0.01rem] border border-slate-900/50 dark:border-slate-50/50" src={userImg} alt={userImg + "'s image"} />
                    <p className="text-[0.8rem] font-semibold dark:font-medium line-clamp-1">{userName}</p>
                </div>
                <button className="py-2 mt-2 
                border border-slate-900/30 dark:border-slate-50/30 rounded-lg
                bg-slate-800 dark:bg-slate-100 hover:bg-slate-900 dark:hover:bg-slate-200 duration-300 ease-in-out
                font-medium dark:font-bold
                text-slate-50 dark:text-slate-800 
                ">
                    Exchange
                </button>
            </div>
        </div>
    );
};
