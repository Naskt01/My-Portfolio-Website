import React from 'react'
import '../components/Contact.css';
import { motion } from 'framer-motion'
import WAVE from '../Assets/wave3.svg';
import WAVEBOTTOM from '../Assets/wave.svg';
import {TfiEmail} from 'react-icons/tfi'
import {MdOutlineSms} from 'react-icons/md'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jwfug8b","template_nngwlsu", form.current, 'ppm7Y7STtMazsHkyU')
      .then((result) => {
          form.current.reset();
          setMessageSent(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };
  return (
    <section className="contact-section"id = 'contact'>
      <img src={WAVE} alt="top wave" className="contact-wave-top" />
      <motion.div 
      className="contact-heading" 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -30 }} 
      transition={{ duration: 0.4 }}
      >
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </motion.div>      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>TNaskar01@indianatech.net</h5>
            <a href="mailto:TNaskar01@indianatech.net" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineSms className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+1 (260) 410-4545</h5>
            <a href="sms:+1260410-4545" target="_blank">Text</a>
          </article>
        </div>

        <form ref = {form} onSubmit = {sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="email"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            autoComplete="off" // textareas usually don’t need autofill
          ></textarea>
          <button type = 'submit' className='btn btn-primary'>{messageSent ? "✔ Message sent" : "Send message!"}</button>
        </form>
        {messageSent && <p className="success-msg">Thanks! I’ll get back to you soon.</p>}
      </div>
      <img src={WAVEBOTTOM} alt="bottom wave" className="contact-wave-bottom" />
    </section>
  )
}

export default Contact
