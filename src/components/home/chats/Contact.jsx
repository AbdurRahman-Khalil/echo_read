
export const Contact = ({ key, addStyles, addPeopleImgStyles, peopleImg, addPeopleNameStyles, peopleName }) => {
    return (
        <li key={key}
            className={`${addStyles} flex items-center gap-2.5 rounded-lg`}
        >
            <img className={`${addPeopleImgStyles} rounded-full object-cover min-h-full border border-slate-900/70 dark:border-slate-50/70`} src={peopleImg} alt={peopleName} />
            <p className={`${addPeopleNameStyles} font-semibold dark:font-medium text-slate-800 dark:text-slate-100`}>{peopleName}</p>
        </li>
    );
};