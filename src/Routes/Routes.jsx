
import {createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Addatoy from '../Pages/Addatoy/Addatoy';
import Alltoys from '../Pages/Alltoys/Alltoys';
import Home from '../Pages/Home/Home';
import Mytoys from '../Pages/Mytoys/Mytoys';
import Navbar from '../Pages/Navbar/Navbar';
import Blogs from '../Pages/Blogs/Blogs';
import SignIn from '../Registerpages/SignIn/SignIn';
import SignUp from '../Registerpages/SignUp/SignUp';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ContactUs from '../Pages/ContactUs/ContactUs';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
    {
      path:"/",
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
    path:"/aboutus",
    element:<AboutUs></AboutUs>
  },
  {
      path:"/contactus",
      element:<ContactUs></ContactUs>
  }]
  
    
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
    
  
  ]);

export default router;