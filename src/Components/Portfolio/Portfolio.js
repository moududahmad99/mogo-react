import React from 'react';
import { FaUser } from 'react-icons/fa';
import './Style.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h3>What We Do</h3>
                            <h2>Some of our work</h2>
                            <p className="mt-3 pt-5 text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row py-5 portfolio-gutter">
                    <div className="col-lg-3">
                        <div className="portfolio-wrapper">
                            <a href="##">
                                <picture>
                                    <img className="w-100 img-fluid" src="assets/portfolio-2.png" alt="portfolio" />
                                </picture>
                                <div className="portfolio-icon">
                                    <i> <FaUser /> </i>
                                    <h3>creatively designed</h3>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </a>
                        </div>
                        <div className="portfolio-wrapper">
                            <a href="##">
                                <picture>
                                    <img className="w-100 img-fluid" src="assets/portfolio-4.png" alt="portfolio" />
                                </picture>
                                <div className="portfolio-icon">
                                    <i> <FaUser /> </i>
                                    <h3>creatively designed</h3>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="portfolio-wrapper">
                            <a href="##">
                                <picture>
                                    <img className="w-100 img-fluid" src="assets/portfolio-4.png" alt="portfolio" />
                                </picture>
                                <div className="portfolio-icon">
                                    <i> <FaUser /> </i>
                                    <h3>creatively designed</h3>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </a>
                        </div>
                        <div className="portfolio-wrapper">
                            <a href="##">
                                <picture>
                                    <img className="w-100 img-fluid" src="assets/portfolio-3.png" alt="portfolio" />
                                </picture>
                                <div className="portfolio-icon">
                                    <i> <FaUser /> </i>
                                    <h3>creatively designed</h3>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="portfolio-wrapper">
                            <a href="##">
                                <picture>
                                    <img className="w-100 img-fluid" src="assets/portfolio-5.png" alt="portfolio" />
                                </picture>
                                <div className="portfolio-icon">
                                    <i> <FaUser /> </i>
                                    <h3>creatively designed</h3>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="portfolio-wrapper">
                            <a href="##">
                                <picture>
                                    <img className="w-100 img-fluid" src="assets/portfolio-2.png" alt="portfolio" />
                                </picture>
                                <div className="portfolio-icon">
                                    <i> <FaUser /> </i>
                                    <h3>creatively designed</h3>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </a>
                        </div>
                        <div className="portfolio-wrapper">
                            <a href="##">
                                <picture>
                                    <img className="w-100 img-fluid" src="assets/portfolio-3.png" alt="portfolio" />
                                </picture>
                                <div className="portfolio-icon">
                                    <i> <FaUser /> </i>
                                    <h3>creatively designed</h3>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
