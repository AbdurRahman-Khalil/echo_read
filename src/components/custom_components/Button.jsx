
export const Button = ({ btnType, addStyles, btnText }) => {
    return (
        <button type={btnType} className={`${addStyles} tracking-wide
                border border-slate-900/30 dark:border-slate-50/30 rounded-lg
                bg-slate-900 dark:bg-slate-100 hover:bg-slate-800/95 dark:hover:bg-slate-200/95 duration-300 ease-in-out
                font-medium dark:font-bold
                text-slate-50 dark:text-slate-800`}
        >{btnText}</button>
    );
};
