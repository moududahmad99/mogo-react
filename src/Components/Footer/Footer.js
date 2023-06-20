import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaGooglePlusG, FaYoutube, FaSnapchat, FaGlobe, FaArrowUp } from 'react-icons/fa';
import './Style.css'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <React.Fragment>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-pOne">
                                <a href="##">
                                    <img src="assets/footer-logo.png" alt="footer-logo" />
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip xea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <h4><span>15k </span>followers</h4>
                                <hr />
                                <h4>
                                    Follow Us:
                                    <a href="##"><FaFacebookF /></a>
                                    <a href="##"><FaTwitter /></a>
                                    <a href="##"><FaInstagram /></a>
                                    <a href="##"><FaPinterestP /></a>
                                    <a href="##"><FaGooglePlusG /></a>
                                    <a href="##"><FaYoutube /></a>
                                    <a href="##"><FaSnapchat /></a>
                                    <a href="##"><FaGlobe /></a>
                                </h4>
                                <form action="##">
                                    <input type="email" placeholder="Your Email" />
                                    <a href="##">SUBSCRIBE</a>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-pTwo">
                                <h3>BLOGS</h3>
                                <div className="footer-img">
                                    <a href="##"><img src="assets/footer-blog1.png" alt="blog" /></a>
                                    <div className="footer-desc">
                                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
                                        <p>Jan 9, 2027</p>
                                    </div>
                                </div>
                                <div className="footer-img">
                                    <a href="##"><img src="assets/footer-blog2.png" alt="blog" /></a>
                                    <div className="footer-desc">
                                        <h5>Consectetur adipiscing elit, sed do eiusmod tempor</h5>
                                        <p>Jan 9, 2027</p>
                                    </div>
                                </div>
                                <div className="footer-img">
                                    <a href="##"><img src="assets/footer-blog3.png" alt="blog" /></a>
                                    <div className="footer-desc">
                                        <h5>sed do eiusmod tempor incididunt ut labore</h5>
                                        <p>Jan 9, 2027</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-pThree">
                                <h3>Instagram</h3>
                                <div className="footer-instagram">
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta1.png" alt="insta" /></a>
                                    </div>
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta2.png" alt="insta" /></a>
                                    </div>
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta3.png" alt="insta" /></a>
                                    </div>
                                </div>
                                <div className="footer-instagram">
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta4.png" alt="insta" /></a>
                                    </div>
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta5.png" alt="insta" /></a>
                                    </div>
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta6.png" alt="insta" /></a>
                                    </div>
                                </div>
                                <div className="footer-instagram">
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta7.png" alt="insta" /></a>
                                    </div>
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta8.png" alt="insta" /></a>
                                    </div>
                                    <div className="footer-assets">
                                        <a href="##"><img src="assets/footer-insta9.png" alt="insta" /></a>
                                    </div>
                                    <div className="footer-link">
                                        <a href="##">View More Photos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* eslint-disable-next-line */}
            <a className="backToTop" onClick={scrollToTop}><FaArrowUp /></a>
        </React.Fragment>
    );
};

export default Footer;
