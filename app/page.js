import React from 'react';
import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import Footer from './Footer/Footer';

const page = () => {
    return (
        <div className=''>
            <Navbar />
            <LandingPage />
            <Footer />
        </div>
    );
};

export default page;