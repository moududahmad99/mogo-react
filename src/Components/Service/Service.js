import React from 'react';
import { FaInbox, FaGhost, FaCloud } from 'react-icons/fa';
import './Style.css';

const Service = () => {
    return (
        <section id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h3>We Work With</h3>
                            <h2>Amazing Service</h2>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5">
                    <div className="col-lg-4">
                        <div className="service-card d-flex">
                            <a href="##">
                                <FaInbox className="icon" />
                            </a>
                            <div className="service-text">
                                <h3>PHOTOGRAPHY</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-card d-flex">
                            <a href="##">
                                <FaGhost className="icon" />
                            </a>
                            <div className="service-text">
                                <h3>Creativity</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-card d-flex">
                            <a href="##">
                                <FaCloud className="icon" />
                            </a>
                            <div className="service-text">
                                <h3>AI Engineering</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="service-card d-flex">
                            <a href="##">
                                <FaCloud className="icon" />
                            </a>
                            <div className="service-text">
                                <h3>Digital</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-card d-flex">
                            <a href="##">
                                <FaGhost className="icon" />
                            </a>
                            <div className="service-text">
                                <h3>Web Engineering</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-card d-flex">
                            <a href="##">
                                <FaInbox className="icon" />
                            </a>
                            <div className="service-text">
                                <h3>SEO</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
