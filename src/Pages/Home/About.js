import React from 'react';
import { GiStabbedNote, GiInspiration, GiBurningPassion } from "react-icons/gi";
import { MdCastForEducation, MdDiversity2 } from "react-icons/md";
const About = () => {
    return (
        <div id='about' className='container m-auto mt-0 sm:mt-[100px] sm:p-0 p-2'>
            <div className="py-8 px-4">
                <h1 className="text-5xl  text-gray-800 dark:text-gray-100 font-bold">Programming Career And Experience</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="bg-metal p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <GiStabbedNote className="text-Bcolor text-5xl mr-2" />
                            <h2 className="text-Bcolor font-bold text-2xl">Coding Experience</h2>
                        </div>
                        <p className="dark:text-white text-black text-base">
                            I am a web developer with MERN-Stack technology skills. During college life, I have worked on many projects with my team. I have also completed a four-year diploma in computer programming and a six-month internship with several client projects.
                        </p>
                    </div>

                    <div className="bg-metal p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <MdCastForEducation   className="text-Bcolor text-5xl mr-2" />
                            <h2 className="text-Bcolor font-bold text-2xl">Course Complete</h2>
                        </div>
                        <p className="dark:text-white text-black text-base">
                        At the end of 2018, I completed web design course from ITBari institute and in 2020 completed web development course with Mern-Stack technology skills from Programming Hero institute. Meanwhile I am studying computer department                        </p>
                    </div>
                    
                    
                    <div className="bg-metal p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <MdDiversity2    className="text-Bcolor text-5xl mr-2" />
                            <h2 className="text-Bcolor font-bold text-2xl">Educational Journey</h2>
                        </div>
                        <p className="dark:text-white text-black text-base">
                        Bachelor's Degree The foundation of The educational qualification is a 4-year Bachelor's degree program in Computer Engineering.
                                During this program, i am study subjects like digital logic, computer architecture, programming languages, software engineering, data structures, algorithms, computer networks, and electronics                         </p>
                    </div>


                    <div className="bg-metal p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <GiBurningPassion className="text-Bcolor text-5xl mr-2" />
                            <h2 className="text-Bcolor font-bold text-2xl">Why Coding is My Passion</h2>
                        </div>
                        <p className="dark:text-white text-black text-base">
                            Career Opportunities: With the increasing demand for technology professionals, coding can open up a wide range of career opportunities in various industries. Having a skill that is in high demand can be very motivating.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;

