import { useNavigate } from "react-router-dom";



export const NotFoundPage = () => {
    const goBack = useNavigate();

    return (
        <section
            id="not-found-page"
            className="relative min-h-svh flex justify-center items-center bg-slate-200 dark:bg-slate-900 overflow-hidden
            before:absolute before:-top-[60%] before:-left-[7%] before:w-[42rem] before:h-[42rem] before:rounded-full before:blur-[13rem] dark:before:bg-cyan-400/40 before:bg-cyan-500/[72%]  
            after:absolute after:-bottom-[60%] after:-right-[7%] after:w-[42rem] after:h-[42rem] after:rounded-full after:blur-[13rem] dark:after:bg-rose-400/40 after:bg-rose-500/[72%]"
        >
            <div className="text-center text-slate-800/90 dark:text-slate-100/[67%] mx-12 max-[464px]:mx-9 mt-6 max-[782px]:mt-11 max-[440px]:mt-[3.1rem] duration-200 ease-linear">
                <h1 className="text-7xl max-[1145px]:text-[4.25rem] max-[1020px]:text-[4rem] font-extrabold dark:font-bold mb-6 duration-200 ease-linear">404</h1>
                <p className="text-4xl max-[1145px]:text-[2.1rem] max-[1020px]:text-[2rem] font-bold dark:font-semibold mb-4 duration-200 ease-linear">Oops! Page not Found</p>
                <p
                    className="text-[1.18rem] max-[1145px]:text-[1.08rem] max-[1020px]:text-[1.02rem] font-semibold dark:font-normal tracking-wide leading-[1.6rem] duration-200 ease-linear"
                >
                    The page you are looking for doesn't exist. it might have been moved or deleted.
                </p>
                <button
                    className="text-[1.1rem] max-[1145px]:text-[1rem] max-[1020px]:text-[0.975rem] text-slate-200 dark:text-slate-900 font-medium dark:font-bold tracking-wide hover:scale-[1.03]
                            bg-slate-800/[88%] dark:bg-slate-100/60 hover:bg-slate-800/[93.5%] hover:dark:bg-slate-100/[71.5%] mt-8 rounded-xl px-6 py-3.5 duration-200 ease-linear"
                    onClick={() => goBack(-1)}
                >
                    Take me Back
                </button>
            </div>
        </section>
    );
};