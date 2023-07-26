import React from 'react';
import { GiStabbedNote, GiInspiration, GiBurningPassion } from "react-icons/gi";
import { MdCastForEducation, MdDiversity2 } from "react-icons/md";
const About = () => {
    return (
        <div id='about' className='container m-auto mt-[100px] sm:p-0 p-2'>
            <div >
                <h1 class="text-left text-4xl font-bold text-Bcolor ">Programming Carer</h1>
                <div className='grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-items-center mt-16 gap-16'>
                    <div className='relative'>
                        <div className='top-0 left-0 mr-3 mb-3 absolute'
                            style={{ marginleft: "0px", marginTop: "-40px" }} >
                            <GiStabbedNote className="text-Bcolor text-5xl" />
                        </div>
                        <div className='dark:bg-white bg-black p-4'>
                            <span className='flex mt-2 items-center'>
                                <h2 className="text-Bcolor font-bold text-2xl text-left">Carer Starting</h2>
                                <GiInspiration className="dark:text-black text-white ml-2 text-3xl" />
                            </span>
                            <p className='dark:text-black text-left text-sm font-bold mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum molestiae laboriosam dignissimos quis est eligendi excepturi distinctio, consectetur vero laborum possimus eos quia sint architecto nesciunt veniam! Praesentium, a!</p></div>
                    </div>

                    <div className='relative '>
                        <div className='top-0 left-0 mr-3 mb-3 absolute'
                            style={{ marginleft: "0px", marginTop: "-40px" }} >
                            <GiStabbedNote className="text-Bcolor text-5xl" />
                        </div>
                        <div className='dark:bg-white bg-black p-4'>
                            <span className='flex mt-2 items-center'>
                                <h2 className="text-Bcolor font-bold text-2xl text-left">Educational Background</h2>
                                <MdCastForEducation className="dark:text-black text-white ml-2 text-3xl" />
                            </span>
                            <p className='dark:text-black text-left text-sm font-bold mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum molestiae laboriosam dignissimos quis est eligendi excepturi distinctio, consectetur vero laborum possimus eos quia sint architecto nesciunt veniam! Praesentium, a!</p></div>
                    </div>

                    <div className='relative '>
                        <div className='top-0 left-0 mr-3 mb-3 absolute'
                            style={{ marginleft: "0px", marginTop: "-40px" }} >
                            <GiStabbedNote className="text-Bcolor text-5xl" />
                        </div>
                        <div className='dark:bg-white bg-black p-4'>
                            <span className='flex mt-2 items-center'>
                                <h2 className="text-Bcolor font-bold text-2xl text-left">University With Programming Carer </h2>
                                <MdDiversity2 className="dark:text-black text-white ml-2 text-3xl" />
                            </span>
                            <p className='dark:text-black text-left text-sm font-bold mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum molestiae laboriosam dignissimos quis est eligendi excepturi distinctio, consectetur vero laborum possimus eos quia sint architecto nesciunt veniam! Praesentium, a!</p></div>
                    </div>

                    <div className='relative '>
                        <div className='top-0 left-0 mr-3 mb-3 absolute'
                            style={{ marginleft: "0px", marginTop: "-40px" }} >
                            <GiStabbedNote className="text-Bcolor text-5xl" />
                        </div>
                        <div className='dark:bg-white bg-black p-4 shadow-5xl shadow-Bcolor rounded'>
                            <span className='flex mt-2 items-center'>
                                <h2 className="text-Bcolor font-bold text-2xl text-left">Why Now Carer is My Passion</h2>
                                <GiBurningPassion className="dark:text-black text-white ml-2 text-3xl" />
                            </span>
                            <p className='dark:text-black text-white text-left text-sm font-bold mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum molestiae laboriosam dignissimos quis est eligendi excepturi distinctio, consectetur vero laborum possimus eos quia sint architecto nesciunt veniam! Praesentium, a!</p></div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;

