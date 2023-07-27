import React from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSoccerBall, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobile from '../../asset/logo/mobile.png'
import EmailSend from '../../components/email/EmailSend';
import './style.css'
const Contract = () => {
    return (
        <div id='contract'>
            <h4 className='text-4xl font-bold text-cyan-900 text-center my-12'>contract With Me...</h4>
            <EmailSend />
            <h4 className='text-4xl font-bold text-cyan-900 text-center my-12'>contract With Me...</h4>
            <div className='contract'>
                <div>
                    <a href=""><FontAwesomeIcon icon={faPhone} className='   w-10 link link-accent'></FontAwesomeIcon>+88 01733624622</a>
                </div>
                <div>
                    <a href=""><FontAwesomeIcon icon={faInstagram} className='w-10 link link-accent'></FontAwesomeIcon>Instagram</a>
                </div>
                <div>
                    <a href=""><FontAwesomeIcon icon={faTwitter} className='w-10 link link-accent'></FontAwesomeIcon>Twitter</a>
                </div>
                <div>
                    <a href=""><FontAwesomeIcon icon={faFacebook} className='w-10 link link-accent'></FontAwesomeIcon>Facebook</a>
                </div>
                <div>
                    <a href=""><FontAwesomeIcon icon={faLinkedin} className='w-10 link link-accent'></FontAwesomeIcon>Linkedin</a>
                </div>
            </div>
        </div >
    );
};

export default Contract;