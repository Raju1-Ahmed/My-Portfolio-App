import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../../asset/logo/raju.png'

const Intro = () => {
    return (
        <div class="hero min-h-screen  bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse"> 
            <div class="avatar">
                    <div class="w-48 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <div class="text-center lg:text-left lg:w-96 lg:ml-10">
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
                    <p class="py-6">I have a only 6.month of experience in web development. I will make your own website in your budget. My packages price are very reliable, if you think that my packages price are highly in your budget you can order with custom price</p>
                    <button class="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-success lg:btn-lg">Download CV</button>
                    <button class="btn ml-7 btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Contract</button>

                </div>
            </div>
        </div>
    );
};

export default Intro;