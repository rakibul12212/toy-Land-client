import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import Feature from '../Feature/Feature';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';





import './Home.css'

const Home = () => {
    return (
        <>
        <Header></Header>
        <Gallery></Gallery>
        <Offer></Offer>
        <Blogs></Blogs>
        <Feature></Feature>
        
        <AboutUs></AboutUs>

        </>
    );
};

export default Home;