import useSearchStore from "../../stores/search/SearchStore";

import { FiSearch } from "react-icons/fi";



export const SearchBar = ({ hideSeek }) => {

    const { searchQuery, updateSearchQuery } = useSearchStore((state) => ({
        searchQuery: state.searchQuery,
        updateSearchQuery: state.updateSearchQuery
    }));


    return (
        <form className={`max-[780px]:relative flex items-center border border-slate-900/30 dark:border-slate-50/30 rounded-lg bg-slate-50/20 dark:bg-slate-950/20 backdrop-blur-xl duration-200 ease-linear 
                ${hideSeek} pr-0`}
            onSubmit={(e) => e.preventDefualt()}
        >
            <button type="submit" className="pl-2.5 pr-1.5 pt-2 pb-[0.575rem] rounded-s-lg max-[780px]:absolute top-0 left-0 bottom-0"><FiSearch className="text-slate-600 dark:text-slate-300 mb-0.5 text-[1.4rem]" /></button>
            <input
                className="px-1.5 max-[780px]:px-2.5 max-[780px]:pl-11 pt-[0.65rem] pb-[0.68rem] max-[780px]:py-3 w-full outline-none rounded-lg text-[0.91rem] text-slate-800 dark:text-slate-100 font-semibold dark:font-medium placeholder:font-medium bg-transparent"
                type="text"
                name="searchQuery"
                id="searchQuery"
                placeholder="Search by book or author..."
                value={searchQuery}
                onChange={(e) => {updateSearchQuery(e.target.value)}}
            />
        </form>
    );
};
