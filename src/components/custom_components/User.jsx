
export const User = ({ styles, userImg, addImgStyles, addUsernameStyles, userName }) => {
    return (
        <div className={styles}>
            <img src={userImg} className={`min-h-full object-cover rounded-full p-[0.01rem] border border-slate-900/50 dark:border-slate-50/50 ${addImgStyles}`} alt={userName + "image"} />
            <p className={`font-semibold dark:font-medium ${addUsernameStyles}`}>{userName}</p>
        </div>
    );
};
