import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import '/src/styles/head.css';

const header = () => {
    return (
        <header id='home' className='w-full h-screen relative'>
            <Navbar />
            <Slider />            
        </header>
    );
};

export default header;