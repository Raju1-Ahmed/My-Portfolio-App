import React from 'react';
import { faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import engineer from '../../asset/logo/engineer (1).png'

const About = () => {
    return (
        <div id='about' className='mt-32'>
            <h1 class="place-items-center  text-4xl font-bold text-cyan-900">Explain Here About Me..!</h1>

            <div class="flex bg-base-100 flex-col  w-full lg:flex-row">
                <div class="grid flex-grow  card">
                    <span className='border-cyan-900'>
                        <h1 className='text-3xl  link-accent font-bold'>
                            <i class="fa-solid fa-house-circle-exclamation"></i>
                        </h1>
                        <h1 class="text-3xl  text-cyan-900">Box Office News!</h1>
                        <p class="py-6 font-bold leading-loose   text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </span>
                </div>
                <div class=" lg:divider-horizontal"></div>
                <div class="grid flex-grow  card  place-items-center">
                    <span>
                        <h1 className='text-3xl  link-accent font-bold'>
                            <i class="fa-solid  fa-school-circle-exclamation"></i>
                        </h1>
                        <h1 class="text-3xl text-cyan-900">Box Office News!</h1>
                        <p class="py-6 font-bold leading-loose   text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </span>

                </div>
            </div>
            <div class="flex bg-base-100 flex-col  w-full lg:flex-row">
                <div class="grid flex-grow  card">
                    <span>
                        <h1 className='text-5xl text-violet-50 font-bold'>
                            <FontAwesomeIcon icon={faGraduationCap} className='w-10 link link-accent'></FontAwesomeIcon>                    </h1>
                        <h1 class="text-3xl text-cyan-900">Box Office News!</h1>
                        <p class="py-6 font-bold leading-loose    text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </span>
                </div>
                <div class=" lg:divider-horizontal"></div>
                <div class="grid flex-grow  card  place-items-center">
                    <span>
                        <h1 className='text-5xl text-violet-50 font-bold'>
                            <FontAwesomeIcon icon={faUniversity} className='w-10 link link-accent'></FontAwesomeIcon>
                        </h1>
                        <h1 class="text-3xl  text-cyan-900">Box Office News!</h1>
                        <p class="py-6 font-bold leading-loose  text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default About;