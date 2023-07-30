import React, { useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaFirefoxBrowser } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiExpress, SiMui, SiTailwindcss, SiMongodb, SiVisualstudiocode, SiHeroku, SiAmazonaws, SiFirebase, SiNetlify, SiVercel, SiGooglechrome, SiAdobephotoshop, SiFigma } from 'react-icons/si';
import { BsFiletypeScss, BsGit, BsGithub } from 'react-icons/bs';
import './style.css'
const Skills = () => {
  const [isFirstCollapsed, setIsFirstCollapsed] = useState(false);
  const [isOtherCollapsed, setIsOtherCollapsed] = useState(true);
  const [version, setVersion] = useState(true);
  const [editor, setEditor] = useState(true);
  const [cloud, setCloud] = useState(true);
  const [browser, setBrowser] = useState(true);
  const [design, setDesign] = useState(true);
  const [soft, setSoft] = useState(true);

  const toggleSoftCollapse = () => {
    setSoft(prevState => !prevState);
  };
  const toggleDesignCollapse = () => {
    setDesign(prevState => !prevState);
  };
  const toggleBrowserCollapse = () => {
    setBrowser(prevState => !prevState);
  };
  const toggleCloudCollapse = () => {
    setCloud(prevState => !prevState);
  };
  const toggleEditorCollapse = () => {
    setEditor(prevState => !prevState);
  };
  const toggleVersionCollapse = () => {
    setVersion(prevState => !prevState);
  };
  const toggleFirstCollapse = () => {
    setIsFirstCollapsed(prevState => !prevState);
  };

  const toggleOtherCollapse = () => {
    setIsOtherCollapsed(prevState => !prevState);
  };

  return (
    <div class="container mx-auto">
      <h1 className={` category-title ${isFirstCollapsed ? 'collapsed' : ''}`} onClick={toggleFirstCollapse} id="accordion-flush-heading-1">
        <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
          <span>Front-End Development</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h1>
      <div className={`skills ${isFirstCollapsed ? 'collapsed' : ''}`}>
        <div class="skill">
          <AiFillHtml5 className="img text-Bcolor" />
          <p>HTML</p>
        </div>
        <div class="skill">
          <FaCss3Alt className="img text-Bcolor" />
          <p>CSS</p>
        </div>
        <div class="skill">
          <IoLogoJavascript className="img text-Bcolor" />
          <p>JavaScript</p>
        </div>
        <div class="skill">
          <FaReact className="img text-Bcolor" />
          <p>React.js</p>
        </div>
        <div class="skill">
          <SiTypescript className="img text-Bcolor" />
          <p>TypeScript</p>
        </div>
        <div class="skill">
          <BsFiletypeScss className="img text-Bcolor" />
          <p>SCSS (Sass)</p>
        </div>
        <div class="skill">
          <SiTailwindcss className="img text-Bcolor" />
          <p>Tailwind CSS</p>
        </div>
        <div class="skill">
          <FaBootstrap className="img text-Bcolor" />
          <p>Bootstrap</p>
        </div>
        <div class="skill">
        <SiMui className="img text-Bcolor" />
          <p>MaterialUI</p>
        </div>
      </div>
      
      <h1 className={`category-title ${isOtherCollapsed ? 'collapsed' : ''}`} onClick={toggleOtherCollapse}>
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
        <span>  Back-End Development</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h1>
      <div className={`skills ${isOtherCollapsed ? 'collapsed' : ''}`}>
        <div class="skill">
        <FaNodeJs className="img text-Bcolor" />
          <p>Node.js</p>
        </div>
        <div class="skill">
        <SiExpress className="img text-Bcolor" />
          <p>Express.js</p>
        </div>
        <div class="skill">
        <SiMongodb className="img text-Bcolor" />
          <p>MongoDB</p>
        </div>
      </div>
      
      <h1 className={`category-title ${version ? 'collapsed' : ''}`} onClick={toggleVersionCollapse}>
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
        <span>  Version Control</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h1>    
      <div className={`skills ${version ? 'collapsed' : ''}`}>
        <div class="skill">
        <BsGit className="img text-Bcolor" />
          <p>Git</p>
        </div>
        <div class="skill">
        <BsGithub className="img text-Bcolor" />
          <p>GitHub</p>
        </div>
      </div>

      <h1 className={`category-title ${editor ? 'collapsed' : ''}`} onClick={toggleEditorCollapse}>
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
        <span>  Text Editors / IDEs</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h1>     
      <div className={`skills ${editor ? 'collapsed' : ''}`}>
        <div class="skill">
        <SiVisualstudiocode className="img text-Bcolor" />
          <p>Visual Studio Code</p>
        </div>
      </div>

      <h1 className={`category-title ${cloud ? 'collapsed' : ''}`} onClick={toggleCloudCollapse}>
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
        <span>Cloud Services and Deployment</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h1>
      <div className={`skills ${cloud ? 'collapsed' : ''}`}>
        <div class="skill">
        <SiHeroku className="img text-Bcolor" />
          <p>Heroku</p>
        </div>
        <div class="skill">
        <SiAmazonaws className="img text-Bcolor" />
          <p>AWS (Amazon Web Services)</p>
        </div>
        <div class="skill">
        <SiFirebase className="img text-Bcolor" />
          <p>Firebase</p>
        </div>
        <div class="skill">
        <SiNetlify className="img text-Bcolor" />
          <p>Netlify</p>
        </div>
        <div class="skill">
        <SiVercel className="img text-Bcolor" />
          <p>Vercel (formerly Zeit)</p>
        </div>
      </div>

      <h1 className={`category-title ${browser ? 'collapsed' : ''}`} onClick={toggleBrowserCollapse}>
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
        <span>Browser Developer Tools</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h1>  
      <div className={`skills ${browser ? 'collapsed' : ''}`}>
        <div class="skill">
        <SiGooglechrome className='text-Bcolor img'/>
          <p>Chrome DevTools</p>
        </div>
        <div class="skill">
          <FaFirefoxBrowser className='text-Bcolor img'/>
          <p>Firefox Developer Tools</p>
        </div>
      </div>
   
      <h1 className={`category-title ${design ? 'collapsed' : ''}`} onClick={toggleDesignCollapse}>
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
        <span>Design Tools</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h1>
     
      <div className={`skills ${design ? 'collapsed' : ''}`}>
        <div class="skill">
          <SiAdobephotoshop className='img text-Bcolor'/>
          <p>Adobe Photoshop</p>
        </div>
        <div class="skill">
        <SiFigma className='img text-Bcolor'/>
          <p>Figma</p>
        </div>
      </div>

      <h1 className={`category-title ${soft ? 'collapsed' : ''}`} onClick={toggleSoftCollapse}>
      <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
        <span>Soft Skills</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h1>
      <div className={`skills ${soft ? 'collapsed' : ''}`}>
      <div class="skill">
          <p>Communication</p>
        </div>
        <div class="skill">
          <p>Teamwork</p>
        </div>
        <div class="skill">
          <p>Problem Solving</p>
        </div>
        <div class="skill">
          <p>Attention to Detail</p>
        </div>
      </div>

    </div>
  );
};

export default Skills;