import { motion } from 'framer-motion';

import { User } from "./User";


export const Review = ({ key, userImg, userName, theReview, date }) => {
    return (
        <motion.li 
            key={key} 
            className="review space-y-3 max-[600px]:space-y-4 mt-4 p-3.5 bg-slate-100/50 dark:bg-slate-900/40 rounded-lg border border-slate-900/15 dark:border-slate-50/15"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                duration: 0.4,
                type: 'spring',
                stiffness: 250,
                damping: 25,
            }}
        >
            <div className="flex justify-between items-center max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2">
                <User
                    styles={"flex gap-1.5 items-center"}
                    userImg={userImg}
                    userName={userName}
                    addImgStyles={"max-w-8"}
                    addUsernameStyles={"max-[522px]:text-[0.96rem] max-[384px]:text-[0.93rem]"}
                />
                <p className="text-slate-400 max-[522px]:text-[0.96rem] max-[384px]:text-[0.93rem]">{date}</p>
            </div>
            <p className="text-[0.93rem] max-[522px]:text-[0.92rem] max-[384px]:text-[0.9rem] font-medium dark:font-normal">{theReview}</p>
        </motion.li>
    );
};
