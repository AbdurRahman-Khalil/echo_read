import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/custom_components/Navbar";
import { Home } from "./components/home/Home";
import { Chats } from "./components/home/chats/Chats";
import { Books } from "./components/home/books/Books";
import { BookOpened } from "./components/home/books/BookOpened";
import { ListBook } from "./components/home/books/ListBook";
import { FlyoutMenu } from "./components/home/FlyoutMenu";
import { Profile } from "./components/home/profile/Profile";
import { SearchBar } from "./components/home/SearchBar";
import { ThemeBtn } from "./components/home/ThemeBtn";



const App = () => {

  const [listBookState, setListBookState] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);


  return (
    <>
      <header>
        <Navbar
          styles={"flex justify-between items-center border-b border-slate-900/50 dark:border-slate-50/55 pl-2.5 pr-3.5 pt-[0.4rem] pb-[0.3rem] fixed top-0 left-0 w-full z-50 bg-slate-50/40 dark:bg-slate-950/40 backdrop-blur-[2.5rem] transition-all duration-500"}
        >
          <h1 id="logo" className="text-[2.35rem] text-slate-800 dark:text-slate-100 font-light -mt-[0.1rem] cursor-pointer">EchoRead</h1>
          <div className="flex gap-6 max-[780px]:gap-[1.1rem] items-center">
            <SearchBar hideSeek={"max-[780px]:hidden w-[22rem]"} />
            <ThemeBtn
              addStyles={"text-lg -ml-2.5 border border-slate-900/30 dark:border-slate-50/30 rounded-full"}
              hideSeek={"max-[390px]:hidden"}
            />
            <FlyoutMenu
              setOpenProfile={setOpenProfile}
              onOpenProfileClick={() => setOpenProfile(true)}
              onListBookClick={() => setListBookState(true)}
            />
          </div>
        </Navbar>
      </header>
      <main>
        {/* if user isn't logged in */}


        {/* if user is logged in */}
        {/* <Home>
        {!openProfile ? 
          <>
            <Books />
            <Chats />
          </> :
          <Profile setOpenProfile={setOpenProfile} setListBookState={setListBookState} /> 
        }
          
        </Home> */}


        <Home>
          {!openProfile ?
            <>
              {/* <Books /> */}

              <Routes>
                <Route path="/" element={<Books />} />
                <Route path="/books/:bid" element={<BookOpened />} />
              </Routes>

              {/* <Chats /> */}
            </> :
            <Profile setOpenProfile={setOpenProfile} setListBookState={setListBookState} />
          }

        </Home>
          
          
        

      </main>
      {listBookState && <ListBook setListBookState={setListBookState} />}
    </>
  );
};

export default App;


