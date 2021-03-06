import React from 'react';
import About from './About';
import Contract from './Contract';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
    return (
        <div id='home' >
            <Intro></Intro>
            <About></About>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <Contract></Contract>
        </div>
    );
};

export default Home;