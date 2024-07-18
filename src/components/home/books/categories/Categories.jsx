import { Category } from "./Category";



let categories = [
    {
        id: 1,
        categoryName: "All",
        categoryColor: "bg-blue-300/70"
    },
    {
        id: 2,
        categoryName: "Science",
        categoryColor: "#35befd"
    },
    {
        id: 3,
        categoryName: "History",
        categoryColor: "#b9a679"
    },
    {
        id: 4,
        categoryName: "Mystery & Crime",
        categoryColor: "#87a0ab"
    },
    {
        id: 5,
        categoryName: "Fiction",
        categoryColor: "#f4cf3e"
    },
    {
        id: 6,
        categoryName: "Religion",
        categoryColor: "#f24055"
    },
    {
        id: 7,
        categoryName: "Entertainment",
        categoryColor: "#ffcc33"
    },
    {
        id: 8,
        categoryName: "Culture",
        categoryColor: "#4881ea"
    },
    {
        id: 9,
        categoryName: "Adventure",
        categoryColor: "#63cf87"
    },
    {
        id: 10,
        categoryName: "Classics",
        categoryColor: "#aa71c1"
    },
    {
        id: 11,
        categoryName: "Romance",
        categoryColor: "#aa71c1"
    },
    {
        id: 12,
        categoryName: "Funny",
        categoryColor: "#aa71c1"
    },
];


export const Categories = () => {
    return (
        <div id="categories" className="overflow-hidden overflow-x-scroll scroll-smooth">
            <div className="flex gap-1.5 text-slate-800 dark:text-slate-100 ">
                {
                    categories.map(category => (
                        <Category
                            key={category.id}
                            name={category.categoryName}
                            styles={category.categoryColor}
                        />
                    ))
                }
            </div>
        </div>
    );
};
