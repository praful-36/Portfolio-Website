import React from 'react';

const Projects = ({ title, description, technologies, status, githubLink }) => {
  return (

    <div id='projects' className="projects">
      <h3>{title}</h3>
      <p  className='description'>{description}</p>
      <p>Technologies: {technologies}</p>
      <p>Status: {status}</p>
      {/* <p>No live link available</p> */}

      {githubLink ? (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      ) : (
        <button disabled>GitHub Repository: Not available</button>
      )}
    </div>
  );
};

export default Projects;
