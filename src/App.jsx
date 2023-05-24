// import { BrowserRouter,Switch,Route  } from 'react-router-dom'

import { Navbar } from 'flowbite-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Main from './Layout/Main';
import Addatoy from './Pages/Addatoy/Addatoy';
import Alltoys from './Pages/Alltoys/Alltoys';
import Blogs from './Pages/Blogs/Blogs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Mytoys from './Pages/Mytoys/Mytoys';
import SignIn from './Registerpages/SignIn/SignIn';
import SignUp from './Registerpages/SignUp/SignUp';

//import Alltoys from './Pages/Alltoys/Alltoys'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[{
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
  {
    path:"/header",
    element:<Header></Header>
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }]
    
    }
    
  
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App