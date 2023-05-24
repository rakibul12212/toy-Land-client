import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import Feature from '../Feature/Feature';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';




import './Home.css'

const Home = () => {
    return (
        <>
        <Header></Header>
        <Gallery></Gallery>
        <Blogs></Blogs>
        <Feature></Feature>
        <AboutUs></AboutUs>

        </>
    );
};

export default Home;