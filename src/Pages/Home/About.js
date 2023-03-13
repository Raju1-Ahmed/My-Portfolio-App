import React from 'react';
import { faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div id='about' className='mt-32'>
            <h1 class="text-center text-4xl font-bold text-cyan-900">Explain Here About Me..!</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-2 lg:gap-3'>
            <div data-aos="fade-right">
                    <h1 className='text-3xl  link-accent font-bold'>
                        <i class="fa-solid fa-house-circle-exclamation"></i>
                    </h1>
                    <h1 class="text-3xl  text-cyan-900">HOME</h1>
                    <p className='py-6 font-bold leading-loose  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi ad officia tempore incidunt in nihil consequuntur rerum, assumenda magnam enim reiciendis ullam excepturi, tenetur adipisci dicta iure modi saepe!</p>
                </div>
                <div data-aos="fade-left"> 
                    <h1 className='text-3xl  link-accent font-bold'>
                 <i class="fa-solid  fa-school-circle-exclamation"></i>
                    </h1>
                    <h1 class="text-3xl text-cyan-900">School</h1>
                    <p className='py-6 font-bold leading-loose  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi ad officia tempore incidunt in nihil consequuntur rerum, assumenda magnam enim reiciendis ullam excepturi, tenetur adipisci dicta iure modi saepe!</p>
                </div>
                <div data-aos="fade-up-right">
                    <span>
                        <h1 className='text-5xl text-violet-50 font-bold'>
                            <FontAwesomeIcon icon={faUniversity} className='w-10 link link-accent'></FontAwesomeIcon>
                        </h1>
                        <h1 class="text-3xl  text-cyan-900">University</h1>
                        <p class="py-6 font-bold leading-loose   text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </span>
                </div>
                <div data-aos="fade-up-left">
                    <h1 className='text-5xl text-violet-50 font-bold'>
                        <FontAwesomeIcon icon={faGraduationCap} className='w-10 link link-accent'></FontAwesomeIcon>                    </h1>
                    <h1 class="text-3xl text-cyan-900">Graduation</h1>
                    <p className='py-6 font-bold leading-loose  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi ad officia tempore incidunt in nihil consequuntur rerum, assumenda magnam enim reiciendis ullam excepturi, tenetur adipisci dicta iure modi saepe!</p>
                </div>
            </div>
        </div>
    );
};

export default About;