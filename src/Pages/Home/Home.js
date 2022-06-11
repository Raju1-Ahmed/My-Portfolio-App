import React from 'react';
import About from './About';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <Portfolio></Portfolio>
            <Skills></Skills>
        </div>
    );
};

export default Home;