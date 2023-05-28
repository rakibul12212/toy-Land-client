

import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';

import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import MainPageCard from '../MainPageCard/MainPageCard';
import Offer from '../Offer/Offer';
// import ShoppingItems from '../ShoppingItems/ShoppingItems';
import TopBrand from '../TopBrand/TopBrand';
import ViewDetails from '../ViewDetails/ViewDetails';





import './Home.css'

const Home = () => {
    return (
        <>
       
        <Header></Header>
        <Gallery></Gallery>
        {/* <ShoppingItems></ShoppingItems> */}
        <MainPageCard></MainPageCard>
        <Offer></Offer>
        <Blogs></Blogs>
        <ContactUs></ContactUs>
        <AboutUs></AboutUs>
        <TopBrand></TopBrand>
        <ViewDetails></ViewDetails>
        </>
    );
};

export default Home;