
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';
import Location from './Pages/Location/location';
{/*import IceCreamBuyPage from './componets/IceCreamBuyPage';*/}


const App = () => {
  return (
    <>
    {/*<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
  </Router>*/}

    <Home />

    </>
  );
};

export default App;