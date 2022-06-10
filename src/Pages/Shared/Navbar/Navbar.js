import {  faGithub, faIntercom, faLinkedin, faMagento, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTrainTram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo/raju.png'

const Navbar = () => {
    const menuItems = <>
    

        <li><Link to="/blog"><i class="fa-solid fa-person-chalkboard"></i>INTRO</Link></li>
        <li><Link to="/blog"><i class="fa-solid fa-address-card"></i>ABOUT</Link></li>
        <li><Link to="/portfolio"><i class="fa-brands fa-servicestack"></i>SERVICE </Link></li>
        <li><Link to="/portfolio"><i class="fa-solid fa-square-envelope"></i>CONTRACT </Link></li>
        <li><Link to="/portfolio"><i class="fa-solid fa-file-code"></i>Skills </Link></li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">
                    <img className='w-10' src={logo} alt="" />
                    <p>obiusSani</p>
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal  p-0">
                   {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <a  href=""><FontAwesomeIcon icon={faTwitter} className='w-10 link link-accent'></FontAwesomeIcon></a>
                <a  href=""><FontAwesomeIcon icon={faGithub} className='w-10 link link-accent'></FontAwesomeIcon></a>
                <a  href=""><FontAwesomeIcon icon={faLinkedin} className='w-10 link link-accent'></FontAwesomeIcon></a>
            </div>
        </div>
    );
};

export default Navbar;