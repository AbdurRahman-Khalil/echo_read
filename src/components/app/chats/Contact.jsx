import { Link } from "react-router-dom"


export const Contact = ({ key, peopleImg, peopleName }) => {
    return (
        <li key={key}>
            <Link
                className="flex items-center gap-2.5 rounded-lg ">
                <img className="rounded-full max-w-11 border border-slate-900/70 dark:border-slate-50/70" src={peopleImg} alt={peopleName} />
                <p className="font-semibold dark:font-medium text-[0.925rem] text-slate-800 dark:text-slate-100">{peopleName}</p>
            </Link>
        </li>
    );
};
