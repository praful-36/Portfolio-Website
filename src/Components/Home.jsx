import React, { useEffect } from 'react';
import Services from "./Services";
import Details from "./Details";
import About from './About';
import Faq from "./Faq";
import developerLogo from "../assets/img/dev-img.png";
import { Link } from 'react-router-dom';
import Education from './Education';

const Home = () => {
  useEffect(() => {
    const adjustScrollButtonVisibility = () => {
      const scrollButton = document.getElementById("scrollButton");
      if (window.innerWidth > 800) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };

    const scrollFunction = () => {
      const scrollButton = document.getElementById("scrollButton");
      if (window.innerWidth > 800) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollButton.style.display = "block";
        } else {
          scrollButton.style.display = "none";
        }
      }
    };

    window.addEventListener('resize', adjustScrollButtonVisibility);
    window.onscroll = scrollFunction;

    return () => {
      window.removeEventListener('resize', adjustScrollButtonVisibility);
      window.onscroll = null;
    };
  }, []);

  const topFunction = () => {
    const scrollToTop = () => {
      const scrollTop = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );

      if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 15);
      }
    };

    scrollToTop();
  };

  return (
    <>
      <button id="scrollButton" onClick={topFunction} title="Scroll to top" style={{ display: 'none' }} > &uarr; </button>

      <section className="section-1">

        <div className="left-section-1">
          Hi,<span style={{ color: "aqua" }}> I'm Praful!</span> <br />  Turning visions into reality by designing and developing websites that captivate and perform.
          <div id="section-input">
            <Link to="/contact"> <input type="button" value="contact me" className="section-1-btn" /></Link>
          </div>
        </div>

        <div className="right-section-1">
          <img src={developerLogo} loading="lazy" alt="Developer Praful's Logo" />
        </div>
      </section>

      <hr className="line" />
      <About />
      <hr className="line" />
      <Services />
      <hr className="line" />
      <Details />
      <hr className="line" />
      <Education />
      <hr className="line" />
      <Faq />
    </>
  );
};

export default Home;
