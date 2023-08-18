import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Task2.module.css";

const FlightSearchForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search and API integration here
  };

  return (
    <div className={styles.flightSearchForm}>
      <h2>Find Flights</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Origin:</label>
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Destination:</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Departure Date:</label>
          <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Return Date:</label>
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </div>
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
};

const Task2 = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className='linked'>Home</Link>
          <Link to="/Book-a-Flight" className='linked'>Flights</Link>
          <Link to="/Hotels" className='linked'>Hotels</Link>
          <Link to="/Rent-a-car" className='linked'>Cars</Link>
        </nav>
      </header>
      <div className={styles.main}>
        <div className={styles.content}>
          <FlightSearchForm />
        </div>
      </div>
    </>
  );
};

export default Task2;
