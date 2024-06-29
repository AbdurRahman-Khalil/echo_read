import julio_shaw from "../../../assets/julio_shaw.jpg";
import leta_carpenter from "../../../assets/leta_carpenter.jpg";
import megan_hanson from "../../../assets/megan_hanson.jpg";
import owen_frazier from "../../../assets/owen_frazier.jpg";
import vickie_mckinney from "../../../assets/vickie_mckinney.jpg";
import willard_arnold from "../../../assets/willard_arnold.jpg";
import { Contact } from "./Contact";




let peoples = [
    {
        id: 1,
        name: "Julio Shaw",
        img: julio_shaw
    },
    {
        id: 2,
        name: "Leta Carpenter",
        img: leta_carpenter
    },
    {
        id: 3,
        name: "Megan Hanson",
        img: megan_hanson
    },
    {
        id: 4,
        name: "Owen Frazier",
        img: owen_frazier
    },
    {
        id: 5,
        name: "Vickie Mckinney",
        img: vickie_mckinney
    },
    {
        id: 6,
        name: "Willard Arnold",
        img: willard_arnold
    },
];




export const Chats = () => {
    return (
        <aside id="chats" className="fixed top-0 left-0 max-w-fit border-r border-r-slate-900/20 dark:border-r-slate-50/20 pl-3 pr-6 mt-[4.26rem] min-h-[89.3%] transition-all duration-500">
            <h2 className="text-[2.15rem] text-slate-800 dark:text-slate-100 font-semibold dark:font-medium text-left mt-1.5 mb-5">Chats</h2>
            {/* <hr className="h-[0.01rem] border border-black/10 mb-5 ml-0 mr-5" /> */}
            <ul id="peopless" className="space-y-3 list-none">
                {
                    peoples.map(people => (
                        <Contact
                            key={people.id}
                            peopleImg={people.img}
                            peopleName={people.name}
                        />
                    ))
                }
            </ul>
        </aside>
    );
};
