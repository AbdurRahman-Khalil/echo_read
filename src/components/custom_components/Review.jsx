import { User } from "./User";



export const Review = ({ theReview, userImg, userName }) => {
    return (
        <div className="review space-y-3 mt-4 p-3.5 bg-slate-100/50 dark:bg-slate-900/40 rounded-lg border border-slate-900/15 dark:border-slate-50/15">
            <User
                styles={"flex gap-1.5 items-center"}
                userImg={userImg}
                userName={userName}
                addImgStyles={"max-w-8"}
                addUsernameStyles={"max-[522px]:text-[0.96rem] max-[384px]:text-[0.93rem]"}
            />
            <p className="text-[0.93rem] max-[522px]:text-[0.92rem] max-[384px]:text-[0.9rem] font-medium dark:font-normal">{theReview}</p>
        </div>
    );
};
