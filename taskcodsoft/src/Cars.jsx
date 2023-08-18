import React from 'react'
import { Link } from 'react-router-dom';

function Cars() {
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
        </>
    );
}

export default Cars;