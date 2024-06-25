import React from 'react'
import images from '../Components/Images';

const Footer = () => {
    return (
        <>
            <footer id="footer-id">

                <div className="container-footer">
                    <div className="footer-text">
                        <h3>Praful.Io</h3>
                        <p>Crafting pixel-perfect designs that blend form and function,<br /> i can create website like this in
                            pursuit of perfection.</p>
                    </div>

                    <div className="contacts">
                        <div className="contact-details">
                            <img src={images.address} alt="" className="contact-img" />

                            <div className="contact-text">
                                <div className="topic">Address</div>
                                <div className="text-one">birla college road,</div>
                                <div className="text-two">kalyan, maharashtra</div>
                            </div>
                        </div>
                        <div className=" contact-details">
                            <img src={images.phone} alt="" className="contact-img" />

                            <div className="contact-text">
                                <div className="topic">Phone</div>
                                <div className="text-one">+9186 5509 1639</div>
                            </div>

                        </div>
                        <div className="contact-details">
                            <img src={images.email} alt="" className="contact-img" />

                            <div className="contact-text">
                                <div className="topic">Email</div>
                                <div className="text-one">gosavipraful2@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-logo">
                        <ul className="socials">
                            <li><a href="https://www.linkedin.com/in/praful-gosavi-38b012280" target="_blank"><img src={images.linkedin} alt="linkedin" /></a></li>

                            <li><a href="https://github.com/praful-36" target="_blank"><img
                                src={images.github} alt="github" /></a></li>

                            <li><a href="https://wa.me/8655091639" target="_blank"><img src={images.whatsapp} alt="whatsapp" /></a></li>

                            <li><a href="https://www.instagram.com/prafulgosavi1" target="_blank"><img
                                src={images.insta} alt="insta" /></a></li>




                        </ul>

                    </div>

                    <div className="footer-endtext">
                        <div className="copyright">
                            &copy; Copyright Praful | All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
