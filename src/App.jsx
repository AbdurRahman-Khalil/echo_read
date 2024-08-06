import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/custom_components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { ThemeBtn } from "./components/ThemeBtn";
import { FlyoutMenu } from "./components/FlyoutMenu";
import { ChatsBooks } from "./components/chats_books/ChatsBooks";
import { Chats } from "./components/chats_books/chats/Chats";
// import { Chat } from "./components/app/chats/Chat";
import { Books } from "./components/chats_books/books/Books";
import { BookPage } from "./components/chats_books/books/BookPage";
import { ListBook } from "./components/chats_books/books/ListBook";
import { Profile } from "./components/profile/Profile";
import { NotFoundPage } from "./components/NotFoundPage";



const App = () => {

  return (
    <>
      <header>
        <Navbar
          styles={"flex justify-between items-center border-b border-slate-900/50 dark:border-slate-50/55 pl-2.5 pr-3.5 pt-[0.4rem] pb-[0.3rem] fixed top-0 left-0 w-full z-50 bg-slate-50/40 dark:bg-slate-950/40 backdrop-blur-[2.5rem] transition-all duration-500"}
        >
          <h1 id="logo" className="text-[2.35rem] text-slate-800 dark:text-slate-100 font-semibold -mt-[0.1rem] cursor-pointer">EchoRead</h1>
          <div className="flex gap-6 max-[780px]:gap-[1.1rem] items-center">
            <SearchBar hideSeek={"max-[780px]:hidden w-[22rem]"} />
            <ThemeBtn
              addStyles={"text-lg -ml-2.5 border border-slate-900/30 dark:border-slate-50/30 rounded-full"}
              hideSeek={"max-[390px]:hidden"}
            />
            <FlyoutMenu />
          </div>
        </Navbar>
      </header>
      <main>
        <Routes>
        
        {/* if user isn't logged in */}
        
        
        {/* if user is logged in */}
          <Route path="/app" element={
            <ChatsBooks>
              <Chats />
              <Books />
            </ChatsBooks>
          }>
            <Route path="/app/books/:bid" element={<BookPage />} />
          </Route>
          <Route path="/app/profile" element={<Profile />} />
          {/* <Route path="/app/profile/my_books" element={<Profile />} /> */}
          <Route path="/app/list_book" element={<ListBook />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {/* {listBookState && <ListBook setListBookState={setListBookState} />} */}
    </>
  );
};

export default App;












