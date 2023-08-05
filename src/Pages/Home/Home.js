import React, { useState, useEffect } from 'react';
import About from './About';
import Intro from './Intro';
import Skills from './Skills';
import ProjectCategory from '../category/ProjectCategory';
import EmailSend from '../../components/email/EmailSend';

import './style.css'

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    // Function to check scroll position and toggle visibility of scroll-to-top button
    const toggleScrollToTopBtn = () => {
        const menuBar = document.getElementById('menuBar');
        if (window.scrollY > menuBar.offsetHeight) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Add event listener for scroll events on component mount
    useEffect(() => {
        window.addEventListener('scroll', toggleScrollToTopBtn);
        return () => {
            window.removeEventListener('scroll', toggleScrollToTopBtn);
        };
    }, []);

    // Function to handle scroll-to-top button click
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <div id='home' >
            <Intro></Intro>
            <About></About>
            <ProjectCategory />
            <Skills></Skills> 
            <EmailSend />
            <>
                {showButton && (
                    <div className="scroll-to-top-btn" onClick={handleScrollToTop}>
                        <i className="fas fa-arrow-up"></i>
                    </div>
                )}
            </>

            <div class="left-link">
                <a href="#">Hire Me</a>
            </div>


        </div>
    );
};

export default Home;