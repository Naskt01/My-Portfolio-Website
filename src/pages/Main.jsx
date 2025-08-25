import React from 'react';

import Header from '../layout/Header/Header';
import Hero from '../components/Hero';
import About from '../pages/About';
import Contact from './Contact';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Footer from '../layout/Footer/Footer';
import '../components/Hero.css';
import '../components/Experience.css';
import '../components/Portfolio.css';
import '../components/Contact.css';
import '../components/About.css';
import '../layout/Footer/Footer.css';

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;


