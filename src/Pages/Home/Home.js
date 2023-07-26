import React from 'react';
import About from './About';
import Contract from './Contract';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Skills from './Skills';
import ProjectCategory from '../category/ProjectCategory';
import EmailSend from '../../components/email/EmailSend';

const Home = () => {
<h2>This is Home</h2>
    return (
        <div id='home' >
            <Intro></Intro>
            <About></About>
            <ProjectCategory/>
           {/* <Portfolio></Portfolio>  */}
             <Skills></Skills> 
             <EmailSend/>
             <Contract></Contract> 
        </div>
    );
};

export default Home;