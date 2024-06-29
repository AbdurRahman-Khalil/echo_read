import { Navbar } from "./components/custom_components/Navbar";
import { Appt } from "./components/app/Appt";

import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { useState, useEffect } from "react";


const App = () => {
  const [theme, setTheme] = useState("light");

  const darkTheme = () => {
    setTheme("dark");
  }

  const lightTheme = () => {
    setTheme("light");
  }

  // Change in theme
  useEffect(() => {
    const htmlTree = document.querySelector("html");

    htmlTree.classList.remove("dark", "light");
    htmlTree.classList.add(theme);

  }, [theme]);


  const handleToggle = () => {
    theme === "light" ? darkTheme() : lightTheme();
  }


  return (
    <>
      <header>
        <Navbar
          styles={"flex justify-between items-center border-b-2 border-b-slate-900/20 dark:border-b-slate-50/20 px-3 pt-[0.4rem] pb-[0.3rem] fixed top-0 left-0 w-full z-50 bg-slate-50/35 dark:bg-slate-950/35 backdrop-blur-xl transition-all duration-500"}
        >
          <h1 className="text-[2.35rem] text-slate-800 dark:text-slate-100 font-bold font-playwriteNGModern -mt-[0.1rem] cursor-pointer">EchoRead</h1>
          <div className="flex gap-6 items-center">
            <form className="flex items-center border border-slate-900/30 dark:border-slate-50/30 pr-3 rounded-lg w-[22rem] bg-slate-50/10 dark:bg-slate-950/10 transition-all duration-500">
              <input className="px-3 py-[0.65rem] w-full outline-none rounded-s-lg text-[0.91rem] text-slate-800 dark:text-slate-100 font-medium backdrop-blur-xl bg-slate-50/35 dark:bg-slate-950/35" type="text" name="search" id="search" placeholder="Search Books" />
              <button className="px-3 py-2 -mr-3 bg-sky-300 rounded-e-lg border border-sky-300"><FiSearch className="mb-0.5 text-[1.45rem] text-slate-100 dark:text-slate-800 " /></button>
            </form>
            <button
              className="text-slate-800 dark:text-slate-100 text-lg border border-slate-900/30 dark:border-slate-50/30 rounded-full -ml-2.5 p-[0.7rem] transition-all duration-500"
              onClick={handleToggle}
            >
              {theme === "light" ? <BsMoonStars /> : <FiSun />}
            </button>
            <div id="user" className="text-slate-800 dark:text-slate-100 border border-slate-900/30 dark:border-slate-50/30 rounded-full p-3"><FaUserCircle className="text-lg" /></div>
          </div>
        </Navbar>
      </header>
      <main>
        <Appt />
      </main>
    </>
  );
};

export default App;