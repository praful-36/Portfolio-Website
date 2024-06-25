import React from 'react';
import images from '../Components/Images';
import resume from '../assets/img/resume.pdf';

const About = () => {
  return (
    <>
      <article id="about">
        <div className="about-container">
          <img src={images.dev} alt="Dev-img" loading="lazy" className='dev' />
          <section className="about-text">
            <h1 style={{fontSize:"33px",margin:"10px 0"}}>About Me</h1>
            <p>I'm a passionate web developer with a love for crafting beautiful and efficient websites. I specialize in bringing concepts to life through thoughtful development and seamless user experiences.</p>
            <p>One of my notable projects is iNotebook, a React-based website where users can log in, sign up, and add notes. I've also contributed to various projects, leveraging my skills in HTML, CSS, JavaScript, React, MongoDB, and Express.</p>
            <p>I always try to stay updated with the latest trends in web development. I'm committed to delivering exceptional results and exceeding client expectations.</p>
            <div className="cv">
              <a href={resume} download="Resume.pdf">
                <button className='cv-download'>
                  Download CV <span style={{ margin: '0 0 4px 10px', fontSize: '22px' }}>&darr;</span>
                </button>
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default About;
