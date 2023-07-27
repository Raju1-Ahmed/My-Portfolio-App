import React from 'react';
import About from './About';
import Contract from './Contract';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Skills from './Skills';
import ProjectCategory from '../category/ProjectCategory';
import EmailSend from '../../components/email/EmailSend';

import './style.css'

const Home = () => {
    document.getElementById('scrollToTopBtn').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    return (
        <div id='home' >
            <Intro></Intro>
            <About></About>
            <ProjectCategory />
            {/* <Portfolio></Portfolio>  */}
            {/* <Skills></Skills>  */}
            <EmailSend />
            {/* <Contract></Contract>  */}


            <div class="left-link">
                <a href="#">Hire Me</a>
            </div>




            <div class="scroll-to-top-btn" id="scrollToTopBtn">
                <i class="fas fa-arrow-up"></i>
            </div>
        </div>
    );
};

export default Home;