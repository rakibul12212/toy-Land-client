import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home.jsx';
import Addatoy from './Pages/Addatoy/Addatoy.jsx';
import Alltoys from './Pages/Alltoys/Alltoys.jsx';
import Mytoys from './Pages/Mytoys/Mytoys.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Navbar from './Pages/Navbar/Navbar.jsx';
import SignIn from './Registerpages/SignIn/SignIn.jsx';
import SignUp from './Registerpages/SignUp/SignUp.jsx';
import Footer from './Pages/Footer/Footer.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    
  },
  {
    path:"/home",
    element:<Home></Home>
  },
  {
    path:"/alltoys",
    element:<Alltoys></Alltoys>
  },
  {
    path:"/addatoy",
    element:<Addatoy></Addatoy>
  },
  {
    path:"/mytoys",
    element:<Mytoys></Mytoys>
  },
  {
    path:"/blogs",
    element:<Blogs></Blogs>
  },
  {
    path:"/navbar",
    element:<Navbar></Navbar>
  },
  {
    path:"/signin",
    element:<SignIn></SignIn>
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>
  },
  
    {
      path:"/footer",
      element:<Footer></Footer>
    },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
