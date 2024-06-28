// ProjectsList.js

import React from 'react';
import Projects from './Projects';

const projectsData = [
  {
    title: 'Inotebook React app ',
    description: 'Introducing iNotebook: the game-changing React app for effortless note-taking. Experience seamless writing, deleting, and secure saving, all with advanced privacy. With robust login and sign-up, your notes stay confidential. hassle-free note-taking with iNotebook.',
    technologies: 'React,HTML,CSS',
    status: 'Completed',
    githubLink: 'https://praful-36.github.io/Inotebook_React-app/',
  },
  {
    title: 'Praful.io',
    description: 'This is my personal space where I showcase my skills, education, and professional journey. Explore to learn more about my passion for front-end development, commitment to clean coding, and ongoing journey of knowledge and growth.',
    technologies: 'React, HTML, CSS',
    status: 'Completed',
  },
  {
    title: 'Netflix Clone ',
    description: 'A Netflix clone website is an online platform designed to mimic the features and functionality of the popular streaming service Netflix. I created Netflix clone website completed from Strach with some improvements',
    technologies: 'HTML,CSS',
    status: 'Completed',
  },

];

const miniProjectsData = [
  {
    title: 'Textify',
    description: 'Textify is react react-based website that allows user to transform their text into different cases like upper,Lowercase and others.',
    technologies: 'React,HTML,CSS,Bootstrap',
    status: 'Completed',
    githubLink: 'https://praful-36.github.io/Textify/',
  },
  {
    title: 'News API App',
    description: 'News Api app is React based application that allow user to read latest news with diffrent category.',
    technologies: 'React, Axios',
    status: 'Completed',

  },
  {
    title: 'Ecommerece Shop',
    description: 'Ecommerece Shop is react application that render products from strapi backend server into frontend website  ',
    technologies: 'React,HTML,CSS,tailwind css',
    status: 'ongoing',
  },

];

const ProjectsList = () => {
  return (
    <div className="projects-list">

      <div className="project">
        <h1>Main Projects</h1>

        <div className="project-items">
          {projectsData.map((project, index) => (
            <Projects key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="project">
        <h1>Mini Projects</h1>

        <div className="project-items">
          {miniProjectsData.map((project, index) => (
            <Projects key={index} {...project} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectsList;
