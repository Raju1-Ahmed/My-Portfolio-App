import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../../asset/logo/raju.png'

const Intro = () => {
    return (
       <div>
            <h4 className='text-4xl font-bold text-cyan-900 text-center my-12'>Introduction for my self...!</h4>

         <div id='intro' class="flex bg-base-100  mt-10 flex-col w-full lg:flex-row">
        <div class="grid flex-grow  lg:w-full card place-items-center lg:place-items-end">
        <div class="avatar">
                <div class="w-48 mr-5 mb-5 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
            </div>
        </div>
        <div class="divider lg:divider-horizontal"></div>
        <div class="grid flex-grow card  place-items-center">
        
            <div >
                <p>Hi, i'm </p>
                <h1 class="btn btn-ghost disabled normal-case text-xl"><img className='w-10' src={logo} alt="" />
                    <p>obiusSani</p></h1> 
                <h2 className='ml-9'>
                    {" "}
                    As,a...{" "}
                    <span style={{ fontWeight: "bold" }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[
                                "Programmer",
                                "Website Development!",
                                "Website Design!",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p class="py-6 text-left">Graduate of computer science with experience working across the full-stack of web development.I have built 30+ projects  i am looking for a platfrom where I can grow and continue to learn from other experienced team members</p>
                <button class="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-success lg:btn-lg">Download CV</button>
                <button></button>
                <a  class="btn ml-7 btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg" href="#contract">Contract</a>

            </div>
        </div>
    </div>
       </div>
    );
};

export default Intro;