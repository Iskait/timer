import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Timer from './pages/Timer';
import Footer from "./components/Footer";

import './scss/all.scss';


function App() {

  return ( 
    <div className="wrapper">
      <Header />
      <main className="page">
      <Routes>
        <Route path="/timer/" element={<Main />}/>
        <Route path="/countdown/" element={<Timer />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
