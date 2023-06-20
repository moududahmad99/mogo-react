import React from 'react';
import './Style.css';

const Review = () => {
    return (
        <section id="review">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 d-flex">
                        <a href="##">
                            <picture>
                                {/* eslint-disable-next-line */}
                                <img src="assets/review-img.png" alt="image" />
                            </picture>
                        </a>
                        <div className="review-desc">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                            </p>
                            <h3>John Doe</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
