import { FiSearch } from "react-icons/fi";


export const SearchBar = () => {
    return (
        <form className="flex items-center border border-slate-900/30 dark:border-slate-50/30 pr-3 rounded-lg w-[22rem] bg-slate-50/5 dark:bg-slate-950/5 transition-all duration-500 
            max-[780px]:hidden"
        >
            <input className="px-3 py-[0.65rem] w-full outline-none rounded-s-lg text-[0.91rem] text-slate-800 dark:text-slate-100 font-semibold dark:font-medium backdrop-blur-xl bg-slate-50/20 dark:bg-slate-950/20" type="text" name="search" id="search" placeholder="Search Books" />
            <button className="px-3 py-2 -mr-3 bg-sky-300 rounded-e-lg border border-sky-300"><FiSearch className="mb-0.5 text-[1.45rem] text-slate-100 dark:text-slate-800" /></button>
        </form>
    );
};
