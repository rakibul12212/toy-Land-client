
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
import ShowItems from "../Pages/ShowItems/ShowItems";
import MainPageCard from "../Pages/MainPageCard/MainPageCard";
import AllToysPage from "../Pages/AllToysPage/AllToysPage";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import { async } from "@firebase/util";


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
      element:<PrivateRoute><Addatoy></Addatoy></PrivateRoute>
    },
    {
      path:"/mytoys",
      element:<PrivateRoute><Mytoys></Mytoys></PrivateRoute>
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
  },
  {
    path:"/showitems",
      element:<ShowItems></ShowItems>
  },
{
  path:"/mainpagecard",
  element:<MainPageCard></MainPageCard>
},
{
  path:"/alltoyspage",
  element:<AllToysPage></AllToysPage>
},
{
  path:"/toydetails/:id",
  loader: async ({params})=>fetch (`https://toy-cart-server-rakibul12212.vercel.app/toys/${params.id}`),
  element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
}

]
  
    
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
    
  
  ]);

export default router;