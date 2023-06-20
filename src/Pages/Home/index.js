import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
        </React.Fragment>
    )
}

export default Home