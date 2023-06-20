import React from 'react'
import "./Style.css"

import { FaUserFriends } from 'react-icons/fa';


const About = () => {
    return (
        <React.Fragment>
            <section id="about">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <h3>What We Do</h3>
                                <h2>Story About Us</h2>
                                <p className="mt-5 pt-5 text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <div className="about-card">
                                <img className="w-100 img-fluid" src="assets/about-2.png" alt="about" />
                                <div className="about-overlay">
                                    <i><FaUserFriends /></i>
                                    <h3>Super Team</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-card text-center">
                                <img className="w-100 img-fluid" src="assets/about-3.png" alt="about" />
                                <div className="about-overlay">
                                    <i><FaUserFriends /></i>
                                    <h3>Super Team</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-card text-center">
                                <img className="w-100 img-fluid" src="assets/about-2.png" alt="about" />
                                <div className="about-overlay">
                                    <i><FaUserFriends /></i>
                                    <h3>Super Team</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About