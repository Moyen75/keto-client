import React from 'react';
import Blogs from '../../../shared/Blogs/Blogs';
import Contact from '../../../shared/Contact/Contact';
import Gallery from '../../../shared/Gallery/Gallery';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Rooms from '../Rooms/Rooms';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Rooms></Rooms>
            <Gallery></Gallery>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;