import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from '../components/Work';

const Project = () => {
  return (
  <div className='fade'>
    <Navbar/>
    <HeroImg2 heading="PROJECTS" text="Projects are coming soon as of right now."/>
    <Work/>
    <Footer/>
  </div>
  );
};

export default Project;