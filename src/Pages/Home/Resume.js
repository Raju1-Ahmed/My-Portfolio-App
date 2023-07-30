import React from 'react';
import './resume.css'; // Link to your custom CSS file for styling

const Resume = () => {
  return (
    <div className="resume">
      <div className="contact-info">
        <h1 className="heading">Robiul Hasan Razu</h1>
        <p className="white-text">Full-Stack Developer</p>
        <p className="white-text">Email: robiussaniraju@gmail.com</p>
        <p className="white-text">Phone: +88 01733624622</p>
        <p className="white-text">LinkedIn: [LinkedIn Profile URL]</p>
        <p className="white-text">GitHub: [GitHub Profile URL]</p>
        <p className="white-text">Portfolio: [Portfolio URL]</p>
      </div>

      <div className="objective">
        <h2 className="heading">Career Objective:</h2>
        <p className="white-text">Highly motivated and proactive Full-Stack Developer with a strong work ethic, quick learner, and excellent problem-solving skills. Seeking a challenging position to leverage my expertise in JavaScript/Node JS, MongoDB, Express JS, Typescript, and React JS to contribute to the growth and success of a dynamic organization. Eager to continue learning from experienced team members and further develop my skills.</p>
      </div>

      <div className="education">
        <h2 className="heading">Education:</h2>
        <p className="white-text">Bachelor of Science in Computer Science<br />
        Habiganj Polytechnic Institute, Jun 2017 - Dec 2021<br />
        GPA: 3.23 out of 4</p>
      </div>

      <div className="skills">
        <h2 className="heading">Skills:</h2>
        <ul>
          <li className="text-white">Core Skills: JavaScript (Node JS), MongoDB, Express JS, Typescript, React JS</li>
          <li className="text-white">Technology Skills: HTML5, SASS, CSS3, Material UI, React-Bootstrap, Git, GitHub, GitLab, Heroku, Firebase, Chrome Developer Tools, Firebug</li>
          <li className="text-white">Tools: Visual Studio Code, Chrome Developer Tools</li>
        </ul>
      </div>

      <div className="projects">
        <h2 className="heading">Projects:</h2>

        <h3 className="heading">Project: Autoparts</h3>
        <p className="white-text">Description: A full-stack web application for managing service orders and reviews related to autoparts.</p>
        <ul>
          <li className="white-text">Implemented user functionality for adding service orders, managing orders, checking order status, and adding reviews.</li>
          <li className="white-text">Developed a Master Admin Panel with features like user management, order status management, services management, and review management.</li>
          <li className="white-text">Utilized Private Route to restrict dashboard access without user login.</li>
        </ul>
        <p className="white-text">Technologies: React JS, Stripe Payment Gateway, Node JS, MongoDB, Express JS, Firebase Hosting and Authentication, Private Route, ImageBB, Axios, Heroku (Server Hosting)</p>

        <h3 className="heading">Project: TheFoodCity</h3>
        <p className="white-text">Description: A group project for a food ordering and management system.</p>
        <ul>
          <li className="white-text">Implemented user functionality for canceling and placing food orders.</li>
          <li className="white-text">Developed an Admin Panel with features for managing products, including adding, deleting, and editing.</li>
          <li className="white-text">Utilized Private Route to restrict dashboard access without user login.</li>
        </ul>
        <p className="white-text">Technologies: React JS, Stripe Payment Gateway, Node JS, MongoDB, Express JS, Firebase Hosting and Authentication, Private Route, ImageBB, Axios, Heroku (Server Hosting)</p>

        <h3 className="heading">Project: CreativeAgency</h3>
        <p className="white-text">Description: A full-stack web application for managing service orders and reviews for a creative agency.</p>
        <ul>
          <li className="white-text">Implemented user functionality for adding service orders, managing orders, checking order status, and adding reviews.</li>
          <li className="white-text">Developed a Master Admin Panel with features like user management, order status management, services management, and review management.</li>
          <li className="white-text">Utilized Private Route to restrict dashboard access without user login.</li>
        </ul>
        <p className="white-text">Technologies: React JS, Stripe Payment Gateway, Node JS, MongoDB, Express JS, Firebase Hosting and Authentication, Private Route, ImageBB, Axios, Heroku (Server Hosting)</p>

        {/* Add other projects similarly */}
      </div>

      <div className="additional-info">
        <h2 className="heading">Additional Information:</h2>
        <ul>
          <li className="white-text">Quick learner, proactive, and possess strong work ethics.</li>
          <li className="white-text">Excellent group management and problem-solving skills.</li>
        </ul>
      </div>

      <div className="references">
        <h2 className="heading">References:</h2>
        <p className="white-text">Available upon request.</p>
      </div>
    </div>
  );
};

export default Resume;
