import React from 'react';
import images from '../Components/Images';

const Services = () => {
    return (
        <section id="services">

            <div className="services-container">

                <div className="title">
                    <h2>OFFERED SERVICES</h2>
                    <p>Web design and development have been my bread and butter for more than 1 year. During that time
                        I've discovered that I can help startups and companies with the following services.</p>
                </div>

                <div className="text-box">
                    <div className="text-box-elements">
                        <img src={images.design2} alt="" />
                        <h4>
                            DESIGN
                        </h4>
                        <div className="para">
                            Successful online projects start with good design. It establishes a solid foundation for
                            future development and allows for long term growth
                        </div>
                    </div>
                    <div className="text-box-elements">
                        <img src={images.design1} alt="" />
                        <h4>
                            DEVELOPMENT
                        </h4>
                        <div className="para">
                            I can code my own designs or even use the customer's design as base. My focus is to generate
                            clean code that's well structured for reliability
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
