import React from 'react';
import About from './About';
import Intro from './Intro';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;