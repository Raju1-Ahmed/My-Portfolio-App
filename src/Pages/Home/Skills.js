import React, { useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaFirefoxBrowser } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiExpress, SiMui, SiTailwindcss, SiMongodb, SiVisualstudiocode, SiHeroku, SiAmazonaws, SiFirebase, SiNetlify, SiVercel, SiGooglechrome, SiAdobephotoshop, SiFigma } from 'react-icons/si';
import { BsFiletypeScss, BsGit, BsGithub } from 'react-icons/bs';
import './style.css';

const sections = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML', icon: <AiFillHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'SCSS', icon: <BsFiletypeScss /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Material UI', icon: <SiMui /> },
    ],
  },
  {
    title: 'Backend and Data',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'Workflow and Tools',
    items: [
      { name: 'Git', icon: <BsGit /> },
      { name: 'GitHub', icon: <BsGithub /> },
      { name: 'VS Code', icon: <SiVisualstudiocode /> },
      { name: 'Chrome DevTools', icon: <SiGooglechrome /> },
      { name: 'Firefox DevTools', icon: <FaFirefoxBrowser /> },
    ],
  },
  {
    title: 'Deployment and Design',
    items: [
      { name: 'Heroku', icon: <SiHeroku /> },
      { name: 'AWS', icon: <SiAmazonaws /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Netlify', icon: <SiNetlify /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop /> },
      { name: 'Figma', icon: <SiFigma /> },
    ],
  },
];

const Skills = () => {
  const [activeSection, setActiveSection] = useState(sections[0].title);
  const currentSection = sections.find((section) => section.title === activeSection) || sections[0];
  const softSkills = ['Communication', 'Teamwork', 'Problem Solving', 'Attention to Detail', 'Adaptability'];

  return (
    <section id='skill' className="section-shell section-block">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2>Core tools across frontend, backend, deployment, and product delivery.</h2>
        <p>
          I&apos;ve grouped the stack this way to show how the UI, API, workflow, and launch side fit together in the projects above.
        </p>
      </div>

      <div className="skill-tabs">
        {sections.map((section) => (
          <button
            key={section.title}
            type="button"
            className={`skill-tab ${activeSection === section.title ? 'skill-tab--active' : ''}`}
            onClick={() => setActiveSection(section.title)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="skills-card-grid">
        {currentSection.items.map((item) => (
          <div key={item.name} className="skill-card">
            <div className="skill-card__icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="soft-skill-row">
        {softSkills.map((skill) => (
          <span key={skill} className="soft-skill-pill">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
