import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import CounterUp from '../../Components/CounterUp/CounterUp';
import Service from '../../Components/Service/Service';
import Review from '../../Components/Review/Review';
import Team from '../../Components/Team/Team';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
            <CounterUp />
            <Service />
            <Review />
            <Team />
        </React.Fragment>
    )
}

export default Home;