import React from 'react'
import images from '../Components/Images';

const Education = () => {

    const skillLevels = {
        "html": 90,
        "css": 90,
        "javascript": 50,
        "bootstrap": 50,
        "TailwindCss":70,
        "react": 80,
        "Express": 40,
        "MongoDB":70,
        "Github":40,
        
    };

    return (
        <>
            <div className="education-container">
                <h2 style={{ textAlign: "center", fontSize: "35px" }}>EDUCATION & SKILL</h2>
                <section className="education-flex">
                    <div className="education-text">
                        <div className="education-text-details">
                            <span className="time-details">2024 - Present</span>
                            <h3>Progressive Web Development Initiatives</h3>
                            <p>Continuing to expand my skills as a front-end web developer and working happily on my own web projects.</p>
                        </div>
                        <div className="education-text-details">
                            <span className="time-details">2022 - 2023</span>
                            <h3>Introduction to Web Development</h3>
                            <p>Embarked on my journey in web development, learning the fundamentals and exploring various technologies.</p>
                        </div>
                    </div>
                    <div className="education-text">
                        <div className="education-text-details">
                            <span className="time-details">2021 - 2022</span>
                            <h3>Advanced Studies in BSC-IT</h3>
                            <p>Deepened my understanding of web development concepts and delved into more advanced topics in my BSC-IT program.</p>
                        </div>
                        <div className="education-text-details">
                            <span className="time-details">2020 - 2021</span>
                            <h3>Beginning of IT Career</h3>
                            <p>Entered the exciting world of IT by enrolling in a BSC-IT course, laying the foundation for my career in technology.</p>
                        </div>
                    </div>
                </section>

                <div className="d-icons">

                    <div className="details-icons">
                        {Object.keys(skillLevels).slice(0, 3).map((skill, index) => (
                            <div key={index} className="skill-bar">
                                <img src={images[skill]} alt={skill} />
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${skillLevels[skill]}%` }}>
                                        {`${skill}  ${skillLevels[skill]}%`}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="details-icons">
                        {Object.keys(skillLevels).slice(3, 6).map((skill, index) => (
                            <div key={index} className="skill-bar">
                                <img src={images[skill]} alt={skill} />
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${skillLevels[skill]}%` }}>
                                        {`${skill}  ${skillLevels[skill]}%`}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="details-icons">
                        {Object.keys(skillLevels).slice(6, 9).map((skill, index) => (
                            <div key={index} className="skill-bar">
                                <img src={images[skill]} alt={skill} />
                                <div className="progress-bar">
                                    <div className="progress-value" style={{ width: `${skillLevels[skill]}%` }}>
                                        {`${skill}  ${skillLevels[skill]}%`}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Education
