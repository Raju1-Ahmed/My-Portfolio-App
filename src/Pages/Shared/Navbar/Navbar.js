import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo/raju.png'
import '../../Home/style.css'

const Navbar = () => {

  // mobile nav link list icon ========================
  const options = [
    { value: "home", label: "Home", href: "", to: "home", icon: "fas fa-home" },
    { value: "about", label: "hireMe", to: "/hireMe", icon: "fas fa-info-circle" },
    { value: "contact", label: "portfolio", to: "#portfolio", icon: "fas fa-envelope" },
  ];

  //  dropdown menu js code  start here  ===================
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  } ///End============

  //  navbar Scrollpos style code here =======================
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }  //END ================


  // Theme dark and light mode code here ===========================
  const [theme, setTheme] = useState(null);
  console.log(theme);
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
    <div class="centered-div">
      <div id="navbar" className=' bg-white dark:bg-dark'>
        <nav className='ContainerWrap'>
          <ul>
            {/* icon =============================== */}
            <div className='navStart'>
              <a href='#home' class=" normal-case text-xl">
                <img className='w-6' src={logo} alt="" />
              </a>
            </div>
            {/* main button  */}
            <div className="navCenter">
              <li> <a className='dark:text-Bcolor text-black font-bold text-uppercase font-sans' href="#intro"><i class="fa-solid fa-person-chalkboard"></i>Intro</a></li>
              <li> <a className='dark:text-Bcolor text-black font-bold text-uppercase font-sans' href="#about"><i class="fa-solid fa-address-card"></i>ABOUT</a></li>
              <li> <a className='dark:text-Bcolor text-black font-bold text-uppercase font-sans' href="#portfolio"><i class="fa-brands fa-servicestack"></i>PORTFOLIO</a></li>
              <li> <a className='dark:text-Bcolor text-black font-bold text-uppercase font-sans' href="#idname"><i class="fa-solid fa-file-code"></i> Skills</a></li>
              <li> <a className='dark:text-Bcolor text-black font-bold text-uppercase font-sans' href="#contract"><i class="fa-solid fa-square-envelope"></i>  CONTRACT</a></li>
            </div> {/* //END========================================= */}
            {/* =========== dropDown Menu html code start here ============== */}
            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                <i className={selectedOption.icon}></i> {selectedOption.label}{" "}
                <i
                  className={
                    isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"
                  }
                ></i>
              </button>
              <ul className={isOpen ? "dropdown-menu show" : "dropdown-menu"}>
                {options.map((option) => (
                  <li key={option.value}>
                    <Link
                      to={option.to}
                      onClick={() => handleOptionClick(option)}
                    >
                      <i className={option.icon}></i> {option.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>{/* //END========================================= */}
            <div className="navEnd">
              <a className='w-10 text-black dark:text-Bcolor link-accent' href="https://github.com/Raju1-Ahmed" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a>
              <img className='rounded-full bg-black dark:bg-dark link' onClick={handleThemeSwitch} src="https://img.icons8.com/external-others-amoghdesign/24/000000/external-mode-multimedia-flat-30px-others-amoghdesign.png" />
            </div>
          </ul>
        </nav>
      </div>
      <div class="logo-div">
        <img src="your-logo-url.png" alt="Your Logo"/>
    </div>
    <div class="content-div">
        <h1>Welcome to my website!</h1>
        <p>Here's some content for the paragraph.</p> 
        <button>Click me!</button> 
    </div>
</div>
    
  );
};

export default Navbar;