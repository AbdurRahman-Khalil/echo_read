import Appt from "./components/app/Appt";
import { Navbar } from "./components/custom_components/Navbar";

import { BsMoonStars } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


const App = () => {
  return (
    <>
      <header>
        <Navbar styles={"flex justify-between items-center border-b px-3 pt-[0.4rem] pb-[0.3rem] fixed top-0 left-0 w-full z-50"}>
          <h1 className="text-[2.7rem] font-medium -mt-[0.32rem] cursor-pointer">EchoRead</h1>
          <div className="flex gap-5 items-center">
            <form className="flex items-center border pr-3 rounded-lg w-[22rem] duration-300">
              <input className="px-3 py-3 w-full outline-none rounded-s-lg font-medium" type="text" name="search" id="search" placeholder="Search Books" />
              <button className="px-3.5 py-2.5 -mr-3 bg-blue-300 rounded-e-lg border border-blue-300"><FiSearch className="rotate-90 mb-0.5 text-[1.6rem] text-slate-100" /></button>
            </form>
            <button className="border border-black/30 rounded-full -ml-2 p-3"><BsMoonStars className="text-lg" /></button>
            <div id="user" className=""><FaUserCircle className="text-[2.75rem]" /></div>
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