import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home'; 
import About from './Components/About'; 
import Contact from './Components/Contact'; 
import Footer from './Components/Footer';
import Services from "./Components/Services";
import Details from "./Components/Details";
import Faq from "./Components/Faq";
import ProjectsList from "./Components/ProjectsList";

const App = () => {
  return (
    <BrowserRouter basename="/Portfolio-Website">
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/details" element={<Details />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ProjectsList" element={<ProjectsList />} />
        </Routes>

        <hr className="line" />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
