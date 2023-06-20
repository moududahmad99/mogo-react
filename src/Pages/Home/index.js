import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import CounterUp from '../../Components/CounterUp/CounterUp';
import Service from '../../Components/Service/Service';
import Review from '../../Components/Review/Review';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
            <CounterUp />
            <Service />
            <Review />
        </React.Fragment>
    )
}

export default Home;