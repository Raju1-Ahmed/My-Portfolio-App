import React, { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '#intro', label: 'Intro' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#skill', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header id="menuBar" className="site-header">
      <div className="section-shell">
        <nav className="top-nav">
          <Link to="/" className="brand-mark">
            <span className="brand-mark__name">Robiul Hasan</span>
            <span className="brand-mark__role">MERN Portfolio</span>
          </Link>

          <div className="nav-links nav-links--desktop">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/admin" className="nav-link nav-link--accent">Admin</Link>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="nav-links nav-links--mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <Link to="/resume" className="nav-link" onClick={() => setMenuOpen(false)}>Resume</Link>
            <Link to="/admin" className="nav-link nav-link--accent" onClick={() => setMenuOpen(false)}>Admin</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
