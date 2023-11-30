import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg4 from '../components/HeroImg4';
import Form from '../components/Form';
import AnimatedPage from '../AnimatedPage';

const Contact = () => {
  return ( 
    <AnimatedPage>
  <div className='fade'>
    <Navbar/>
    <HeroImg4 heading="CONTACT" text="Questions? Let me know"/>
    <Form/>
    <Footer/>
  </div>
  </AnimatedPage>
  );
};

export default Contact;