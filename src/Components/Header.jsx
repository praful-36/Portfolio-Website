
import React from 'react';
import { Link } from 'react-router-dom';
import images from '../Components/Images';

const Header = () => {
  return (
    <header>
      <div className="left">
        <span className="Logotext">Praful.Io |</span>
        <span><img src={images.logo} alt="logo" /></span>
      </div>
      <div className="right">
        <ul className='navList'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/ProjectsList">projects</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
