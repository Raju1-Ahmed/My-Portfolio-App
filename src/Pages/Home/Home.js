import React, { useState, useEffect } from 'react';
import About from './About';
import Intro from './Intro';
import Skills from './Skills';
import ProjectCategory from '../category/ProjectCategory';
import EmailSend from '../../components/email/EmailSend';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import './style.css';

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const toggleScrollToTopBtn = () => {
            const menuBar = document.getElementById('menuBar');
            if (menuBar && window.scrollY > menuBar.offsetHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', toggleScrollToTopBtn);
        return () => {
            window.removeEventListener('scroll', toggleScrollToTopBtn);
        };
    }, []);

    return (
        <div id='home'>
            <Navbar />
            <Intro />
            <About />
            <ProjectCategory />
            <Skills />
            <EmailSend />
            {showButton && (
                <button
                    type="button"
                    className="scroll-to-top-btn"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
            <a className="side-cta-link" href="#contact">Hire Me</a>
            <Footer />
        </div>
    );
};

export default Home;
