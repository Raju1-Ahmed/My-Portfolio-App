import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../../asset/logo/raju.png'
import myImage from '../../asset/portfulioImg/removebg.png'
import './style.css'


const Intro = () => {
    return (
        <div id='intro' className='mt-[7rem]  '>
            <h4 className='text-4xl font-bold text-cyan-900 text-center'> Introduction for my self...!</h4>
            <div class="grid grid-cols-12 items-center justify-center p-3 pt-0">
                <div className=' lg:col-span-6 col-span-12'>
                    <img src={myImage} alt="myImage" className='w-full' />
                </div>
                <div className='lg:col-span-6 col-span-12'>
                    <h2 className='text-6xl text-left p-3'>Mern-Stack Developer</h2>
                    <p className='text-left p-3 text-lg'>Graduate of computer science with experience working across the full-stack of web development.I have built 30+ projects  i am looking for a platfrom where I can grow and continue to learn from other experienced team members</p>
                    <div className='flex'>
                        <button class="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-success lg:btn-lg" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <a href="https://drive.google.com/file/d/1vy3mQmMXStEnb9bhkIVk-Tn67cW9vzsd/view?usp=sharing" target="blank">Download CV</a>
                        </button>
                        <a class="btn ml-7 btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg" href="#contract">Contract</a>

                    </div>
                </div>
            </div>
        </div>

        // <div class="grid grid-rows grid-flow-col gap-4">
        //     <div className='bg-red-300'>01</div>
        //     <div className='bg-red-300'>02</div>
        // </div>





        //     <div>
        //     <p>Hi, i'm </p>
        //     <h1 class="btn btn-ghost disabled normal-case text-xl"><img className='w-10' src={logo} alt="" />
        //         <p>obiusSani</p></h1>
        //     <h2 className='ml-9'>
        //         {" "}
        //         As,a...{" "}
        //         <span style={{ fontWeight: "bold" }}>
        //             <Typewriter
        //                 words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        //                 loop={3}
        //                 cursor
        //                 cursorStyle='_'
        //                 typeSpeed={70}
        //                 deleteSpeed={50}
        //                 delaySpeed={1000}
        //             />
        //         </span>
        //     </h2>
        // </div>
        // <p class="text-left">Graduate of computer science with experience working across the full-stack of web development.I have built 30+ projects  i am looking for a platfrom where I can grow and continue to learn from other experienced team members</p>
        // <div className='mt-2'>
        //     <button class="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-success lg:btn-lg" data-aos="fade-zoom-in"
        //         data-aos-easing="ease-in-back"
        //         data-aos-delay="300"
        //         data-aos-offset="0">
        //         <a href="https://drive.google.com/file/d/1vy3mQmMXStEnb9bhkIVk-Tn67cW9vzsd/view?usp=sharing" target="blank">Download CV</a>
        //     </button>
        //     <a class="btn ml-7 btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg" href="#contract">Contract</a>
        // </div>




    );
};

export default Intro;