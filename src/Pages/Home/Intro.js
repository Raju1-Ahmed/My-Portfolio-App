import React, { useEffect, useState } from 'react';
import { useTypeWriter, Cursor, useTypewriter } from 'react-simple-typewriter';
import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../asset/logo/raju.png'
import myImage from '../../asset/portfulioImg/removebg.png'
import './style.css'
import { faDownload, faFileContract } from '@fortawesome/free-solid-svg-icons';
import Theme from '../../components/Theme';
import axios from 'axios';
import download from 'downloadjs';
import { API_URL } from '../utils/constants';

const Intro = () => {
    const [filesList, setFilesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Initialize loading to true
    // const text = 'Welcome to my portfolio!';

    useEffect(() => {
        const getFilesList = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/find`);
                setErrorMsg('');
                setFilesList(data);
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                error.response && setErrorMsg(error.response.data);
                setIsLoading(false); // Set loading to false on error
            }
        };

        getFilesList();
    }, []);

    const downloadFile = async (_id, filepath, mimetype) => {
        setIsLoading(true); // Set loading to true before download starts
        // Your downloadFile function code
        try {
            const result = await axios.get(`${API_URL}/download/${_id}`, {
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
            setIsLoading(false); // Set loading to false after download is completed or on error
        }
    };

    const singleFile = filesList.length > 0 ? filesList[0] : null;

    const { text } = useTypewriter({
        words: ['Skilled', 'Innovative', 'Tech-savvy', 'Detail-oriented', 'Creative', 'Analytical', 'Adaptable', 'Efficient', 'Collaborative', 'Versatile'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <Theme>
            <div className="container mx-auto flex flex-col md:flex-row md:gap-4 items-center justify-start">
                <div className="flex flex-col items-start justify-start text-start md:w-1/2 p-10">
                    <div>
                        <h3 className="text-5xl mb-2 text-gray-800 dark:text-gray-100 font-bold">Hello, I'm Robiul-Hasan</h3>
                        <p className="text-2xl -mt-2 text-gray-800 dark:text-gray-100">A Passionate Mern-Stack Developer</p>
                        <p className="text-2xl -mt-3 text-gray-800 dark:text-gray-100">Skilled, Innovative, and Always Learning</p>
                    </div>
                    <div className="flex justify-start items-center  mt-4 space-x-4">
                        <a className="text-3xl text-white link-accent" href="https://github.com/Raju1-Ahmed" target="_blank">
                            <FontAwesomeIcon className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300" icon={faGithub} />
                        </a>
                        <a className="text-3xl text-white link-accent" href="https://github.com/Raju1-Ahmed" target="_blank">
                            <FontAwesomeIcon className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300" icon={faFacebook} />
                        </a>
                        <a className="text-3xl text-white link-accent" href="https://github.com/Raju1-Ahmed" target="_blank">
                            <FontAwesomeIcon className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300" icon={faLinkedin} />
                        </a>
                        <a className="text-3xl text-white link-accent" href="https://github.com/Raju1-Ahmed" target="_blank">
                            <FontAwesomeIcon className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300" icon={faGoogle} />
                        </a>
                    </div>
                    <div className="flex justify-start items-center mt-4 space-x-4">
                        <div>
                            {isLoading ? (
                                // Loading spinner using Tailwind CSS
                                <div className="flex justify-center items-center h-20">
                                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
                                </div>
                            ) : singleFile ? (
                                <button
                                    className="A md:text-xl text-sm button-85 text-white border rounded p-1 bg-blue-600 hover:bg-blue-700 transition duration-300"
                                    onClick={() => downloadFile(singleFile._id, singleFile.filePath, singleFile.file_mimetype)}
                                >
                                    Get CV <FontAwesomeIcon className="ml-2" icon={faDownload} />
                                </button>
                            ) : (
                                <p className="text-gray-800 dark:text-gray-100" style={{ fontWeight: '300' }}>NetWork Problem Page Load again</p>
                            )}
                        </div>
                        <div>
                            <a className="B text-xl button-86 text-white border rounded p-3 bg-blue-600 hover:bg-blue-700 transition duration-300" href="https://github.com/Raju1-Ahmed" target="_blank">
                                CONTRACT <FontAwesomeIcon className="ml-2" icon={faFileContract} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 p-10">
                    <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed">
                        Welcome to my portfolio! I am a highly skilled and passionate Mern-Stack Developer with a track record of creating robust and innovative web applications. With over 8 years of experience, I have gained expertise in all stages of the development cycle for dynamic web projects. My technical skills include advanced HTML5, CSS3, JavaScript, jQuery, and Angular JS.
                    </p>
                    <br />
                    <span className="text-4xl mb-2 text-blue-600">
                        {text}
                    </span>
                    <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                        &lt;
                    </span>
                </div>
            </div>
        </Theme>
    );
};

export default Intro;