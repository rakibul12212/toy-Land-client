import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import Feature from '../Feature/Feature';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import ShoppingItems from '../ShoppingItems/ShoppingItems';





import './Home.css'

const Home = () => {
    return (
        <>
        <Header></Header>
        <Gallery></Gallery>
        <ShoppingItems></ShoppingItems>
        <Offer></Offer>
        <Blogs></Blogs>
        <Feature></Feature>
        <ContactUs></ContactUs>
        {/* <AboutUs></AboutUs> */}

        </>
    );
};

export default Home;