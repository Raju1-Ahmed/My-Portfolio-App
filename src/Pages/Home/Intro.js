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
        words: ['Developer', 'Designer', 'Programmer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <Theme>
            <div id='intro'>
                <div class="centered-div">
                    <div class="intro-content">
                        <div class=" content-div">
                            <div>
                                <h3 className='text-5xl  mb-2 dark:text-white text-black'>Hello</h3>
                                <p className='text-2xl dark:text-white text-black'>i'am <span className='text-Bcolor '>Robius-sani</span> Mern-Stack Developer</p>
                                <p className='text-2xl -mt-3 dark:text-white text-black'>Devoted, innovative, Educational, Hardworking</p>
                            </div>
                            <div className='flex justify-start items-center sm -ml-3'>
                                <a className='text-3xl mr-5 dark:text-white text-black link-accent' href="https://github.com/Raju1-Ahmed" target="_blank"><FontAwesomeIcon className='p-3 dark:bg-black rounded-full bg-white' icon={faGithub}></FontAwesomeIcon> </a>
                                <a className='text-3xl mr-5 dark:text-white text-black link-accent' href="https://github.com/Raju1-Ahmed" target="_blank"><FontAwesomeIcon className='p-3 dark:bg-black rounded-full bg-white' icon={faFacebook}></FontAwesomeIcon> </a>
                                <a className='text-3xl mr-5 dark:text-white text-black link-accent' href="https://github.com/Raju1-Ahmed" target="_blank"><FontAwesomeIcon className='p-3 dark:bg-black rounded-full bg-white' icon={faLinkedin}></FontAwesomeIcon> </a>
                                <a className='text-3xl dark:text-white text-black link-accent' href="https://github.com/Raju1-Ahmed" target="_blank"><FontAwesomeIcon className='p-3 dark:bg-black rounded-full bg-white' icon={faGoogle}></FontAwesomeIcon> </a>

                            </div>
                            <div className='flex justify-around items-center mt-4 -ml-8 button'>
                                {/* <a className='A text-xl button-85 dark:text-Bcolor border  rounded p-1 link-accent' href="https://github.com/Raju1-Ahmed" target="_blank">DOWNLOAD CV<FontAwesomeIcon className='ml-2' icon={faDownload}></FontAwesomeIcon> </a> */}


                                <div>
                                    {isLoading ? (
                                        // Loading spinner using Tailwind CSS
                                        <div className="flex justify-center items-center h-20">
                                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
                                        </div>
                                    ) : singleFile ? (
                                        <button className='A md:text-xl text-sm button-85 dark:text-Bcolor border  rounded p-1 link-accent' onClick={() => downloadFile(singleFile._id, singleFile.filePath, singleFile.file_mimetype)}>
                                            DOWNLOAD CV <FontAwesomeIcon className='ml-2' icon={faDownload}/>
                                        </button> 
                                    ) : (
                                        <p style={{ fontWeight: '300' }}>No files found. Please add some.</p>
                                    )}
                                </div>
                                <a className='B text-xl  button-86 dark:text-Bcolor border  rounded p-3 link-accent' href="https://github.com/Raju1-Ahmed" target="_blank">CONTRACT<FontAwesomeIcon className='ml-2' icon={faFileContract}></FontAwesomeIcon> </a>
                            </div>
                        </div>
                        <div className=" logo-div">
                            <h1 style={{ margin: '0px' }} className="text-black dark:text-white text-3xl font-serif">
                                i'am a|
                                <span className='text-xl mb-2 text-Bcolor'>
                                    {text}
                                </span>
                                <Cursor cursorStyle='<' />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </Theme>
    );
};

export default Intro;