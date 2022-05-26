import React from "react";

import Stopwatch from "./components/Stopwatch";

import Header from "./components/Header";

import './scss/all.scss';

function App() {
  return (
    <div className="wrapper">
    <main className="stopwatch">
      <Header />
      <Stopwatch />
    </main>
    </div>
  );
}

export default App;
