import React from 'react';
import Blogs from '../Blogs/Blogs';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';




import './Home.css'

const Home = () => {
    return (
        <>
        <Header></Header>
        <Gallery></Gallery>
        <Blogs></Blogs>

        </>
    );
};

export default Home;