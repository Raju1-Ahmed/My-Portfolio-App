import React from 'react';

const Footer = () => {
    return (
        <div className="flex items-center dark:text-white text-black justify-center h-10 dark:bg-silver bg-inherit text-center text-sm">
            © {new Date().getFullYear()} Razu... All Rights Reserved.
        </div>
    );
};

export default Footer;