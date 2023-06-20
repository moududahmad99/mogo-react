import React, { useState, useEffect, useRef } from 'react';
import './Style.css'

const CounterUp = () => {
    const [count, setCount] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startCounter();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const startCounter = () => {
        let counter = 0;
        const interval = setInterval(() => {
          if (counter < 100) {
            counter += 1;
            setCount(counter);
          } else {
            clearInterval(interval);
          }
        }, 20);
      };
      

    return (
        <section id="counterUp" ref={sectionRef}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-2">
                        <div className="counterUp-inner">
                            <h3>{count > 0 ? count : 126}</h3>
                            <p>Web Engineers</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="counterUp-inner">
                            <h3>{count > 0 ? count : 167}</h3>
                            <p>Happy Client</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="counterUp-inner">
                            <h3>{count > 0 ? count : 87}</h3>
                            <p>Award Winning</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="counterUp-inner">
                            <h3>{count > 0 ? count : 99}</h3>
                            <p>Member</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="counterUp-inner">
                            <h3>{count > 0 ? count : 88}</h3>
                            <p>Cup Of Tea</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="counterUp-inner">
                            <h3>{count > 0 ? count : 72}</h3>
                            <p>SQA Engineers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterUp;
