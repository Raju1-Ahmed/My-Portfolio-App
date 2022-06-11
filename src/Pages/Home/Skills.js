import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faChess, faFileCode, faLink, faServer, faVestPatches, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Skills = () => {
    return (
        <div className='mb-36 mt-36'>
            <h4 className='text-4xl font-bold text-cyan-900 text-center my-12'>Skills...!</h4>
             
            <div class="grid grid-cols-2 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className='bg-base-100 shadow-xl py-7'>
                        <div class="py-7 px-7 shadow-lg shadow-cyan-500/50 badge only:badge-lg"><h1 className='text-emerald-400 font-bold'><FontAwesomeIcon icon={faHtml5} className='w-10 link link-accent'></FontAwesomeIcon>HTML</h1>
                        </div> <br /> <br />
                        <div class="py-7 px-7 shadow-lg shadow-cyan-500/50 badge badge-lg"><h1 className='text-emerald-400 font-bold'><i class="fa-brands w-10 fa-css3-alt"></i>CSS</h1>
                        </div> <br /> <br />
                        <div class="py-7 px-7 shadow-lg shadow-cyan-500/50 badge badge-lg"><h1 className='text-emerald-400 font-bold'><i class="fa-brands w-10 fa-bootstrap"></i>BOOSTRAP</h1>
                        </div> 
                </div>
                <div className='bg-base-100 shadow-xl py-7'>
                    <div class=" py-7 px-7  shadow-lg shadow-cyan-500/50 badge  badge-lg"><h1 className='text-emerald-400 font-bold'><FontAwesomeIcon icon={faHtml5} className='w-10 link link-accent'></FontAwesomeIcon>REACT-BOOSTRAP</h1>
                        </div> <br /> <br />
                        <div class="py-7 px-7 shadow-lg shadow-cyan-500/50 badge  badge-lg"><h1 className='text-emerald-400 font-bold'><i class="fa-brands w-10 fa-css3-alt"></i>TAILWIND CSS</h1>
                        </div> <br /> <br />
                        <div class="py-7 px-7 shadow-lg shadow-cyan-500/50 badge py-5 badge-lg"><h1 className='text-emerald-400 font-bold'><i class="fa-brands w-10 fa-css3-alt"></i>REACT-DAISYUI</h1>
                        </div> 
                </div>
                <div className='bg-base-100 shadow-xl py-7'>
                    <div class="ml-12 py-7 px-7 shadow-lg shadow-cyan-500/50 badge badge-lg"><h1 className='text-emerald-400 font-bold'><FontAwesomeIcon icon={faHtml5} className='w-10 link link-accent'></FontAwesomeIcon>JAVASCRIPT</h1>
                        </div> <br /> <br />
                        <div class="ml-7 py-7 px-7 shadow-lg shadow-cyan-500/50 badge badge-lg"><h1 className='text-emerald-400 font-bold'><i class="fa-brands w-10 fa-css3-alt"></i>REACT</h1>
                        </div> <br /> <br />
                        <div class="ml-7 py-7 px-7 shadow-lg shadow-cyan-500/50 badge  badge-lg"><h1 className='text-emerald-400 font-bold'><i class="fa-brands w-10 fa-css3-alt"></i>MONGODB</h1>
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default Skills;