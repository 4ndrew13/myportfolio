import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg4 from '../components/HeroImg4';
import Form from '../components/Form';

const Contact = () => {
  return ( 
  <div className='fade'>
    <Navbar/>
    <HeroImg4 heading="CONTACT" text="Questions? Let me know"/>
    <Form/>
    <Footer/>
  </div>
  );
};

export default Contact;