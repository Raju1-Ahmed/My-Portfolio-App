import React from 'react';
import { GiBurningPassion } from "react-icons/gi";
import { MdCastForEducation, MdDiversity2, MdOutlineWorkHistory } from "react-icons/md";

const About = () => {
    const highlights = [
        {
            icon: <MdOutlineWorkHistory />,
            title: 'Hands-on project work',
            description: 'Built portfolio, admin, CRUD, upload, and API-driven interfaces while learning how full-stack systems fit together end to end.',
        },
        {
            icon: <MdCastForEducation />,
            title: 'Continuous learning',
            description: 'Completed web design and MERN training, then kept improving through personal builds, experiments, and client-style workflows.',
        },
        {
            icon: <MdDiversity2 />,
            title: 'Technical foundation',
            description: 'Studied computer engineering topics like programming, networking, software engineering, architecture, and problem solving.',
        },
        {
            icon: <GiBurningPassion />,
            title: 'Why I enjoy coding',
            description: 'I like turning rough ideas into working products, especially when the result is easier to use, easier to maintain, and more useful to real people.',
        },
    ];

    return (
        <section id='about' className='section-shell section-block'>
            <div className="section-heading">
                <span className="eyebrow">About</span>
                <h2>Experience, learning path, and the way I approach building products.</h2>
                <p>
                    This portfolio combines personal branding, project presentation, file management, and client contact flows. My goal is to make both the UI and the backend feel intentional and easy to maintain.
                </p>
            </div>
            <div className="info-grid">
                {highlights.map((item) => (
                    <article key={item.title} className="info-card">
                        <div className="info-card__icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default About;
