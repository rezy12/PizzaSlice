
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './componets/Navbar/navbar';
import Home from './Pages/Home/home';
{/*import IceCreamBuyPage from './componets/IceCreamBuyPage';*/}


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home/>} />
        {/*<Route path="/buyicecream" element={<IceCreamBuyPage/>} />*/}
      </Routes >
    </Router>
  );
};

export default App;