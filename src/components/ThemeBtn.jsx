import { useEffect } from "react";

import useThemeStore from "../stores/theme/ThemeStore";

import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";


export const ThemeBtn = ({ addStyles, hideSeek, btnText }) => {

    const { theme, darkTheme, lightTheme } = useThemeStore((state) => ({
        theme: state.theme,
        darkTheme: state.darkTheme,
        lightTheme: state.lightTheme
    }));

    useEffect(() => {
        const htmlTree = document.querySelector("html");

        htmlTree.classList.remove("dark", "light");
        htmlTree.classList.add(theme);

    }, [theme]);

    const handleTheme = () => {
        theme === "light" ? darkTheme() : lightTheme();
    }


    return (
        <button
            className={`text-slate-800 dark:text-slate-100 p-[0.7rem] ${addStyles} ${hideSeek}`}
            onClick={handleTheme}
        >
            {theme === "light" ? <FiSun /> : <BsMoonStars />} {btnText}
        </button>
    );
};
