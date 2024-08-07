import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { Button } from "../../custom_components/Button";
import { Ratings } from "../../custom_components/Ratings";
import { BookRating } from "./BookRating";
import { User } from "../../custom_components/User";



export const Book = ({ bookId, bookImg, bookName, bookRating, author, userImg, userName }) => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex max-[1255px]:gap-1 max-[1090px]:gap-0.5 max-[561px]:gap-0 max-w-full min-h-44 -space-x-8 border rounded-lg border-slate-900/[18%] dark:border-slate-50/20 text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 shadow-lg transition-all duration-500"
        >
            <Link to={`/app/books/${bookId}`} className="book-img max-w-[50%] max-[1150px]:max-w-[53%] max-[1090px]:max-w-[57%] max-[1024px]:max-w-[53%] max-[857px]:max-w-[54.5%] max-[815px]:max-w-[56%] max-[800px]:max-w-[57%] max-[561px]:max-w-[60%] max-[456px]:max-w-[57%] max-[390px]:max-w-[55%] min-h-44 duration-300 min-[1425px]:max-w-[55%]">
                <img
                    className="max-w-[80%] min-h-full object-cover rounded-s-lg"
                    src={bookImg}
                    alt={bookName + "'s poster"}
                />
            </Link>
            <div className="book-text font-bold dark:font-semibold flex flex-col flex-1 justify-between py-3 pl-2.5 pr-3.5 max-[1150px]:pl-3 max-[1024px]:pl-1 max-[950px]:pl-2 max-[900px]:pl-2.5 max-[841px]:pr-3 max-[841px]:pl-3 max-[785px]:pl-1 max-[785px]:pr-3.5 max-[685px]:pl-2 max-[645px]:pr-3 max-[629px]:pl-2.5 max-[605px]:pr-2.5 max-[561px]:pr-4 max-[561px]:pl-0 max-[561px]:py-4 max-[456px]:pr-3.5 max-[456px]:pl-0.5 max-[456px]:py-3 max-[415px]:pl-1 max-[390px]:pl-2 max-[355px]:pl-2.5 max-[345px]:pr-3 max-[322px]:pl-3 min-[1425px]:pl-3 min-[1425px]:pr-3 min-[1425px]:pt-2.5 min-[1525px]:pl-2.5 min-[1590px]:pl-2 min-[1525px]:py-3.5 min-[1645px]:pl-1.5">
                <h2 className="text-xl max-[1080px]:text-[1.142rem] max-[1024px]:text-[1.5rem] max-[841px]:text-[1.35rem] max-[815px]:text-xl max-[785px]:text-[1.5rem] max-[645px]:text-[1.3rem] max-[605px]:text-xl max-[561px]:text-[2rem] max-[423px]:text-[1.67rem] max-[365px]:text-[1.35rem] line-clamp-2 leading-6 max-[1024px]:leading-[1.83rem] max-[815px]:leading-6 max-[785px]:leading-[1.83rem] max-[605px]:leading-[1.58rem] max-[561px]:leading-[2.5rem] max-[423px]:leading-[2.2rem] max-[365px]:leading-7 min-[1425px]:text-[1.2rem] min-[1525px]:text-xl min-[1425px]:leading-7 min-[1525px]:leading-6"
                >{bookName}</h2>

                <p className="text-sm max-[1080px]:text-[0.8rem] max-[1024px]:text-[0.987rem] max-[841px]:text-[0.93rem] max-[815px]:text-[0.905rem] max-[785px]:text-[0.987rem] max-[645px]:text-[0.91rem] max-[605px]:text-[0.9rem] max-[561px]:text-[1.3rem] max-[423px]:text-[1.08rem] max-[365px]:text-[0.98rem] max-[320px]:text-[0.95rem] font-semibold dark:font-medium line-clamp-1 min-[1425px]:text-[0.835rem] min-[1525px]:text-sm min-[1425px]:leading-6"
                >{author}</p>

                {
                    bookRating === 0 ?
                        <Ratings bookId={bookId} addStarStyles={"text-[hsl(51,100%,49%)] dark:text-[hsl(51,100%,60%)] text-[1.035rem] max-[561px]:text-[1.35rem] max-[423px]:text-[1.15rem] max-[365px]:text-[1.05rem] max-[320px]:text-[1.035rem]"} /> :
                        <BookRating bookRatings={bookRating} addStarStyles={"text-[1.035rem] max-[561px]:text-[1.35rem] max-[423px]:text-[1.15rem] max-[365px]:text-[1.05rem] max-[320px]:text-[1.035rem]"} />
                }

                <User
                    styles={"user flex items-center gap-1.5 max-[561px]:gap-2 max-[365px]:gap-1.5 min-[1425px]:mt-1 min-[1525px]:mt-0"}
                    userImg={userImg}
                    userName={userName}
                    addImgStyles={"max-w-8 max-[1080px]:max-w-[1.88rem] max-[1024px]:max-w-[2.25rem] max-[841px]:max-w-[2.055rem] max-[815px]:max-w-[2.02rem] max-[785px]:max-w-[2.25rem] max-[645px]:max-w-[2.04rem] max-[605px]:max-w-[1.98rem] max-[561px]:max-w-[2.8rem] max-[473px]:max-w-11 max-[456px]:max-w-10 max-[423px]:max-w-[2.45rem] max-[400px]:max-w-9 max-[369px]:max-w-[2.135rem] max-[351px]:max-w-[1.97rem] max-[336px]:max-w-[1.9rem] min-[1425px]:max-w-7 min-[1525px]:max-w-8"}
                    addUsernameStyles={"text-[0.8rem] max-[1080px]:text-[0.745rem] max-[1024px]:text-[0.865rem] max-[841px]:text-[0.845rem] max-[815px]:text-[0.823rem] max-[785px]:text-[0.865rem] max-[645px]:text-[0.83rem] max-[605px]:text-[0.805rem] max-[561px]:text-[1.02rem] max-[473px]:text-[0.98rem] max-[456px]:text-[0.955rem] max-[423px]:text-[0.93rem] max-[400px]:text-[0.9rem] max-[369px]:text-[0.845rem] max-[351px]:text-[0.83rem] max-[336px]:text-[0.8rem] max-[323px]:text-[0.77rem] line-clamp-1 min-[1425px]:text-[0.75rem] min-[1525px]:text-[0.8rem]"}
                />

                <Button addStyles={"py-2 mt-2"} btnText={"Exchange"} />
            </div>
        </motion.div>
    );
};







// book animation
// transition={{
//     duration: 0.1,
//     type: 'spring',
//     stiffness: 250,
//     damping: 25,
// }}


// book-text
// max-[1024px]:pl-2.5 max-[900px]:pl-3




{/* <Ratings
    ratings={ratings}
    ratingStyles={"mt-1 max-[561px]:text-lg max-[423px]:text-[1.035rem] max-[365px]:text-[0.98rem] min-[1425px]:text-[0.935rem] min-[1525px]:text-base"}
    addStarStyles={"max-w-6 max-[561px]:max-w-8 max-[423px]:max-w-7 max-[365px]:max-w-[1.613rem] min-[1425px]:max-w-[1.38rem] min-[1525px]:max-w-6"}
/> */}