import React from 'react'
import './Style.css'

const Banner = () => {
    return (
        <React.Fragment>
            <section id="banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="banner-text">
                                <h4>Creative Template</h4>
                                <h3>Welcome to <span>Mogo</span></h3>
                            </div>
                            <div className="banner-button">
                                <a href="##">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Banner;