

import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import MainPageCard from '../MainPageCard/MainPageCard';
import Offer from '../Offer/Offer';
import TopBrand from '../TopBrand/TopBrand';
import './Home.css'

const Home = () => {
    return (
        <>
       
        <Header></Header>
        <Gallery></Gallery>
        <Offer></Offer>
        <MainPageCard></MainPageCard>
        <Blogs></Blogs>
        <ContactUs></ContactUs>
        <AboutUs></AboutUs>
        <TopBrand></TopBrand>
        
        </>
    );
};

export default Home;