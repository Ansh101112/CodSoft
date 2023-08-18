import React from 'react'
import { Link } from 'react-router-dom';
import Home from './components/Home';
import styles from "./about.module.css";

function About() {
  return (
   <>
      <nav className='navbar'>
        <h1 className='text'>
            <Link to="/" className='linked'>Home</Link>
            <Link to="/about" className='linked'>About</Link>
            <Link to="/contact" className='linked'>Contact</Link>
            
        </h1>
    </nav>
    <p className='text'>
    Internship Project in CodSoft submitted by<p className={styles.text}><u><a href='https://www.linkedin.com/in/anshumantiiwari/'> Anshuman Tiwari </a></u></p>
    </p>
   </>
  )
}

export default About;