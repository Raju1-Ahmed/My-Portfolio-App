import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { FaEllo, FaRegAddressCard, FaFileContract } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { RxResume } from "react-icons/rx";
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo/raju.png'
import '../../Home/style.css'

const Navbar = () => {

  // Theme dark and light mode code here ===========================
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //  The End dark and light mode code code =========================END

  return (
    <div id="menuBar" className='bg-black dark:bg-white'>

      <div class="navbar ">
        <div class="navbar-start">
          <div class="dropdown bg-black dark:bg-white">
            <label tabindex="0" class="btn btn-ghost dark:text-black text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black dark:bg-white rounded-box w-52">
              <li><a className='dark:text-black text-white font-bold text-lg' href="#intro"><FaEllo className='dark:text-black text-white  font-bold text-lg' />INTRO</a></li>
              <li><a className='dark:text-black text-white font-bold text-lg' href="#about">  <FaRegAddressCard className='dark:text-black text-white font-bold text-lg mr-1' />ABOUT</a></li>
              <li><a className='dark:text-black text-white font-bold text-lg' href="#portfolio"> <GoProject className='dark:text-black text-white font-bold text-lg mr-1' />PORTFOLIO</a> </li>
              <li><a className='dark:text-black text-white font-bold text-lg' href="#skill"> <GiSkills className='dark:text-black text-white font-bold text-lg mr-1' /> SKILL</a></li>
              <li> <a className='dark:text-black text-white font-bold text-lg' href=""> <RxResume className='dark:text-black text-white font-bold text-lg ' /><Link to="/resume"> RESUME</Link></a></li>
              <li><a className='dark:text-black text-white font-bold text-lg' href="#contract"> <FaFileContract className='dark:text-black text-white font-bold text-lg mr-1' />CONTRACT</a></li>
            </ul>
          </div>
          <Link to='/' class="normal-case text-xl">
            <h2 className="dark:text-black text-white font-bold text-lg">Razu..</h2>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a className='dark:text-black text-white font-bold text-lg' href="#intro"><FaEllo className='dark:text-black text-white  font-bold text-lg' />INTRO</a></li>
            <li><a className='dark:text-black text-white font-bold text-lg' href="#about">  <FaRegAddressCard className='dark:text-black text-white font-bold text-lg ' />ABOUT</a></li>
            <li><a className='dark:text-black text-white font-bold text-lg' href="#portfolio"> <GoProject className='dark:text-black text-white font-bold text-lg' />PORTFOLIO</a> </li>
            <li><a className='dark:text-black text-white font-bold text-lg' href="#skill"> <GiSkills className='dark:text-black text-white font-bold text-lg ' /> SKILL</a></li>
            <li> <a className='dark:text-black text-white font-bold text-lg' href=""> <RxResume className='dark:text-black text-white font-bold text-lg ' /><Link to="/resume"> RESUME</Link></a></li>
            <li><a className='dark:text-black text-white font-bold text-lg' href="#contract"> <FaFileContract className='dark:text-black text-white font-bold text-lg ' />CONTRACT</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <div class="flex space-x-3 justify-center items-center">
          <Link className='dark:text-black text-white font-bold text-lg' to="/admin"> <RiAdminFill className='dark:text-black text-white font-bold text-xl ' /></Link>
            <span onClick={handleThemeSwitch}>
              <MdDarkMode className='dark:text-black text-white font-bold text-2xl mr-1' />
            </span>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Navbar;