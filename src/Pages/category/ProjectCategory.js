import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

import { faFileCode, faLink, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ProjectCategory.css'

const ProjectCategory = () => {
    const [activeTab, setActiveTab] = useState('FullStack');
    const [products, setProducts] = useState([]);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false); // New state for data loading

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/file/product');
                setProducts(response.data);
                setDataLoaded(true);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleTabClick = (category) => {
        setActiveTab(category);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handlePlay = () => {
        const video = document.getElementById('autoplayVideo');
        if (video) {
            video.play().catch((error) => {
                console.error('Autoplay failed:', error);
            });
            setVideoLoaded(true);
        }
    };
    // const handlePlay = () => {       
    //         setVideoLoaded(true);        
    // };

   

    const filteredProducts = products.filter((product) => product.futureField === activeTab);

    return (
        <div className="tabs-container container mx-auto mt-[100px]">
            <h2 className=' text-Bcolor text-4xl text-center'>Here You can See My All Project</h2>
            <div className="tabs sm:w-3/4 w-full  mt-[30px]">
                <button
                    className={`tab ${activeTab === 'FullStack' ? 'active' : ''}`}
                    onClick={() => handleTabClick('FullStack')}
                >
                    FullStack
                </button>
                <button
                    className={`tab ${activeTab === 'Frontend' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Frontend')}
                >
                    Frontend
                </button>
                <button
                    className={`tab ${activeTab === 'React' ? 'active' : ''}`}
                    onClick={() => handleTabClick('React')}
                >
                    React
                </button>
                <button
                    className={`tab ${activeTab === 'Static' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Static')}
                >
                    Static
                </button>
            </div>
            {!dataLoaded ? ( // Show loading spinner until data is loaded
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
            <div className="tab-content sm:mt-5 mt-10 sm:pl-0 pl-2 ">
                <Slider {...settings}>
                    {filteredProducts.map((product) => (
                        <div className=" drop-shadow-2xl rounded " key={product._id}>
                            <div className="lg:flex xl:flex md:flex p-2 md:p-0 items-center justify-around">
                                <div>
                                {/* {!videoLoaded && <div className="spinner"></div>} */}
                                    <ReactPlayer
                                        // id="autoplayVideo"
                                        url={product.video.filePath}
                                        playing={!videoLoaded} // Autoplay when videoLoaded is false
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                        onReady={handlePlay} // Call handlePlay when the video is ready
                                    />
                                </div>

                                <div className='md:px-5 md:mt-3 mt-3 '>
                                    <span className="flex justify-between  items-center">
                                        <h2 className="md:text-4xl text-xl md:font-black dark:text-white text-black">{product.name}</h2>
                                        <h2 className="  text-Bcolor text-base">Future: {product.futureField} Project</h2>
                                    </span>
                                    <p className="text-Bcolor text-right  text-base">Last update: {new Date(product.date).toLocaleDateString()}</p> {/* Display Date */}
                                    <p className="dark:text-white text-black text-left text-sm md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique rerum, omnis sit recusandae tempora ea, minus illum, eos voluptate molestias magnam accusamus soluta officia reiciendis nesciunt fugit laboriosam alias ab.</p>
                                    <div className='sm:flex hidden justify-start items-end'>
                                        <button className="btn dark:bg-black bg-white dark:text-white text-black">
                                            <a href={product.clientURL} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faFileCode} className="w-10 link link-accent" />
                                                ClientCode
                                            </a>
                                        </button>
                                        <button className="btn ml-5 dark:bg-black bg-white dark:text-white text-black">
                                            <a href={product.serverURL} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faServer} className="w-10 link link-accent" />
                                                ServerCode
                                            </a>
                                        </button>
                                        <button className="btn ml-5 dark:bg-black bg-white dark:text-white text-black">
                                            <a href={product.demoURL} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faLink} className="w-10 link link-accent" /> DEMO
                                            </a>
                                        </button>
                                    </div>
                                    <div className='flex sm:hidden justify-around items-center'>
                                        <a className="dark:text-white text-black  border border-Bcolor rounded" href={product.clientURL} target="_blank" rel="noopener noreferrer">
                                            ClientCode<FontAwesomeIcon icon={faFileCode} className="w-10 link link-accent" />
                                        </a>
                                        <a className="dark:text-white text-black  border border-Bcolor rounded" href={product.serverURL} target="_blank" rel="noopener noreferrer">
                                            ServerCode<FontAwesomeIcon icon={faServer} className="w-10 link link-accent" />
                                        </a>
                                        <a className="dark:text-white text-black border border-Bcolor rounded" href={product.demoURL} target="_blank" rel="noopener noreferrer">
                                            DEMO<FontAwesomeIcon icon={faLink} className="w-10 link link-accent" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            )};
        </div>
    );
};

export default ProjectCategory;
