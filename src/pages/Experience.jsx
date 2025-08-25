import React from 'react';
import { motion } from 'framer-motion';
import { BsFillPatchCheckFill } from "react-icons/bs";
import WAVETOP from '../Assets/wave3.svg';
import WAVEBOTTOM from '../Assets/wave.svg';
import '../components/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <img src={WAVETOP} alt="top wave" className="experience-wave-top" />
      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
      </motion.div>

      <div className="container experience-container">
        {/* Technical Skills */}
        <div className="skill-experience">
          <h3>Technical Skills</h3>

          <article className="experience-details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Web Development</h4>
          </article>

          <article className="experience-details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Object-Oriented Programming</h4>
          </article>

          <article className="experience-details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Data Structures & Algorithms</h4>
          </article>
          <article className="experience-details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Development & Operations</h4>
          </article>
          <article className="experience-details">
            <BsFillPatchCheckFill className="icons" />
            <h4>Data Analysis & Visualization</h4>
          </article>
        </div>
        {/* Web & Database */}
        <div className="experience-card">
          <h3>Web & Database</h3>
          <div className="experience-content2">
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>HTML/CSS</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>REST API</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>SQL & NoSQL</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Bootstrap</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Node.js & Express.js</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>React</h4></article>
          </div>
        </div>
        {/* Data Analytics & Visualization */}
        <div className="experience-card">
          <h3>Data Analytics & Visualization</h3>
          <div className="experience-content2">
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Python</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Power BI</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Tableau</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Data Analysis</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Data Visualization</h4></article>
          </div>
        </div>
        {/* Tools & Platforms */}
        <div className="experience-card">
          <h3>Tools & Platforms</h3>
          <div className="experience-content2">
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Git & GitHub</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Jira</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>VS Code</h4></article>
            <article className="experience-details"><BsFillPatchCheckFill className="icons" /><h4>Postman</h4></article>
          </div>
        </div>
      </div>
      <img src={WAVEBOTTOM} alt="bottom wave" className="experience-wave-bottom" />
    </section>
  );
};

export default Experience;