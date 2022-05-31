import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Timer from './pages/Timer';
import Footer from "./components/Footer";

import './scss/all.scss';

export const Context = React.createContext();


function App() {
  const [page, setPage] = useState(window.location.pathname);

  return ( 
    <Context.Provider value={{page, setPage}}>
    <div className="wrapper">
      <Header type={page === '/timer' ? 'STOPWATCH'  : 'TIMER'} />
      <main className="page">
      <Routes>
        <Route path="/timer" element={<Main />}/>
        <Route path="/countdown" element={<Timer />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </Context.Provider>
  );
}

export default App;
