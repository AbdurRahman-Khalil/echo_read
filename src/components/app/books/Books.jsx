import { Categories } from "./categories/Categories";
import { Book } from "./Book";


export const Books = () => {
    return (
        <div id="books" className="mt-3 mr-3.5">
            <Categories />
            <div id="books-container" className="grid grid-cols-3 gap-3 mt-3.5">
                <Book />
            </div>
        </div>
    );
};
