import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Location from './Pages/Location/location';
import  Menu from "./Pages/Menu/menu";
import FAQ from "./Pages/FAQs/faq";
import Contact from './Pages/Contact/contact';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "location",
    element: <Location/>,
  },

  {
    path: "menu",
    element: <Menu/>,
  },

  {
    path: "faq",
    element: <FAQ/>,
  },

  {
    path: "contact",
    element: <Contact/>,
  },




]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
