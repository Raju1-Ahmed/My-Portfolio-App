import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="section-shell site-footer__content">
                <p>© {new Date().getFullYear()} Robiul Hasan. Portfolio, admin, and API flow updated for a cleaner full-stack presentation.</p>
            </div>
        </footer>
    );
};

export default Footer;
