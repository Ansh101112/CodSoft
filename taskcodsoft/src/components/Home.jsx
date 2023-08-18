import React from 'react'
import styles from "./home.module.css";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <nav className='navbar'>
                <h1 className='text'>
                    <Link to="/" className='linked'>Home</Link>
                    <Link to="/about" className='linked'>About</Link>
                    <Link to="/contact" className='linked'>Contact</Link>
                </h1>
            </nav>
            <div className={styles.content}>
                <ul className={styles.list}>
                    <Link to="task1"><li>TASK 1</li></Link>
                    <Link to='task2'><li>TASK 2</li></Link>
                </ul>
            </div>

        </>
    )
}

export default Home;