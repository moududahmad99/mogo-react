import React from 'react';
import { RiTwitterLine, RiSnapchatLine, RiInstagramLine, RiPinterestLine } from 'react-icons/ri';
import './Style.css'

const Team = () => {
    return (
        <section className="team" id="team">
            <div className="container">
                <div className="team-text">
                    <h4 className="pt-5">Who We Are</h4>
                    <h3>MEET OUR TEAM</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.
                    </p>
                </div>
                <div className="team-main">
                    <div className="team-section">
                        <div className="team-card">
                            <div className="card-img">
                                <a href="##">
                                    <img src="assets/team-1.png" alt="" />
                                </a>
                                <div className="team-card-icon">
                                    <a href="##">
                                        <RiTwitterLine />
                                    </a>
                                    <a href="##">
                                        <RiSnapchatLine />
                                    </a>
                                    <a href="##">
                                        <RiInstagramLine />
                                    </a>
                                    <a href="##">
                                        <RiPinterestLine />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-desc">
                            <h3>Matrix Dix</h3>
                            <p>AI ENGINEER</p>
                        </div>
                    </div>
                    <div className="team-section">
                        <div className="team-card">
                            <div className="card-img">
                                <a href="##">
                                    <img src="assets/team-2.png" alt="" />
                                </a>
                                <div className="team-card-icon">
                                    <a href="##">
                                        <RiTwitterLine />
                                    </a>
                                    <a href="##">
                                        <RiSnapchatLine />
                                    </a>
                                    <a href="##">
                                        <RiInstagramLine />
                                    </a>
                                    <a href="##">
                                        <RiPinterestLine />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-desc">
                            <h3>Ixlieean Dix</h3>
                            <p>Data Scientist</p>
                        </div>
                    </div>
                    <div className="team-section">
                        <div className="team-card">
                            <div className="card-img">
                                <a href="##">
                                    <img src="assets/team-1.png" alt="" />
                                </a>
                                <div className="team-card-icon">
                                    <a href="##">
                                        <RiTwitterLine />
                                    </a>
                                    <a href="##">
                                        <RiSnapchatLine />
                                    </a>
                                    <a href="##">
                                        <RiInstagramLine />
                                    </a>
                                    <a href="##">
                                        <RiPinterestLine />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-desc">
                            <h3>Alexaud Dix</h3>
                            <p>AI ENGINEER</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
