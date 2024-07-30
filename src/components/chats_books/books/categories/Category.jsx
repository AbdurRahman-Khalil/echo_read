
export const Category = ({ name, styles }) => {
    return (
        <button className={`px-3.5 py-3 text-nowrap font-semibold dark:font-medium border border-[${styles}]/30 dark:border-[${styles}]/30 rounded-lg bg-[${styles}] transition-all duration-500`}>
            {name}
        </button>
    );
};
