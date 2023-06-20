import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import CounterSection from '../../Components/CounterUp/CounterUp'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
            <CounterSection />
        </React.Fragment>
    )
}

export default Home