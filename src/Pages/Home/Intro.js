import React, { useEffect, useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFileContract } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import download from 'downloadjs';
import myImage from '../../asset/portfulioImg/removebg.png';
import { API_ENDPOINTS } from '../utils/constants';
import './style.css';

const Intro = () => {
    const [filesList, setFilesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getFilesList = async () => {
            try {
                const { data } = await axios.get(API_ENDPOINTS.files);
                setErrorMsg('');
                setFilesList(data);
            } catch (error) {
                setErrorMsg(error.response?.data || 'Resume unavailable right now');
            } finally {
                setIsLoading(false);
            }
        };

        getFilesList();
    }, []);

    const downloadFile = async (_id, filepath, mimetype) => {
        setIsLoading(true);
        try {
            const result = await axios.get(`${API_ENDPOINTS.files}/${_id}/download`, {
                responseType: 'blob',
            });

            if (!filepath || typeof filepath !== 'string') {
                throw new Error('Invalid file path.');
            }

            const split = filepath.split('/');
            const filename = split[split.length - 1];
            setErrorMsg('');
            return download(result.data, filename, mimetype);
        } catch (error) {
            setErrorMsg(error.message || 'Error while downloading file. Try again later');
        } finally {
            setIsLoading(false);
        }
    };

    const singleFile = filesList.length > 0 ? filesList[0] : null;

    const { text } = useTypewriter({
        words: ['Full-stack builder', 'API-focused engineer', 'UI problem solver', 'Portfolio storyteller'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 60,
    });

    return (
        <section id="intro" className="hero-section">
            <div className="section-shell hero-grid">
                <div className="hero-copy">
                    <span className="eyebrow">Portfolio 2026</span>
                    <h1 className="hero-title">Building practical web products with clean frontend experiences and dependable backend APIs.</h1>
                    <p className="hero-subtitle">
                        I&apos;m Robiul Hasan, a MERN stack developer focused on responsive UI, database-backed features, and maintainable project delivery.
                    </p>
                    <div className="hero-rotating-text">{text}</div>
                    <div className="hero-actions">
                        {isLoading ? (
                            <div className="status-pill">Loading resume...</div>
                        ) : singleFile ? (
                            <button
                                className="primary-button"
                                onClick={() => downloadFile(singleFile._id, singleFile.filePath, singleFile.file_mimetype)}
                            >
                                Download Resume <FontAwesomeIcon className="ml-2" icon={faDownload} />
                            </button>
                        ) : (
                            <span className="status-pill status-pill--error">{errorMsg}</span>
                        )}
                        <a className="secondary-button" href="#contact">
                            Let&apos;s Talk <FontAwesomeIcon className="ml-2" icon={faFileContract} />
                        </a>
                    </div>
                    <div className="social-row">
                        <a className="social-chip" href="https://github.com/Raju1-Ahmed" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                        <a className="social-chip" href="https://www.facebook.com/profile.php?id=100072162730034" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                        <a className="social-chip" href="https://www.linkedin.com/in/robius-sani-raju-2944a2240/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                        <a className="social-chip" href="mailto:robiulhasan.dev@gmail.com">
                            <FontAwesomeIcon icon={faGoogle} /> Email
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-card">
                        <img src={myImage} alt="Robiul Hasan" className="hero-image" />
                        <div className="hero-metrics">
                            <div>
                                <strong>Frontend</strong>
                                <span>Responsive React interfaces with Tailwind and reusable UI sections.</span>
                            </div>
                            <div>
                                <strong>Backend</strong>
                                <span>Express, MongoDB, upload flows, and structured portfolio data APIs.</span>
                            </div>
                            <div>
                                <strong>Delivery</strong>
                                <span>Focused on clear UX, clean code organization, and fast iteration.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
