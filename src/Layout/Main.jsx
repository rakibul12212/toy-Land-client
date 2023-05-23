import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Home from '../Pages/Home/Home';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
         
            <Footer></Footer>
        </>
    );
};

export default Main;