import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

import { faFileCode, faLink, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ProjectCategory.css'

const ProjectCategory = () => {
    const [expandedDescription, setExpandedDescription] = useState(false);
    const [activeTab, setActiveTab] = useState('FullStack');
    const [products, setProducts] = useState([]);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false); // New state for data loading

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://myportfolioserver-0ekq.onrender.com/api/v1/file/product');
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
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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

    const toggleDescription = () => {
        setExpandedDescription(!expandedDescription);
    };


    const filteredProducts = products.filter((product) => product.futureField === activeTab);

    return (
        <div id='portfolio' className="tabs-container container mx-auto md:mt-[100px] mt-0">
            <h2 className='md:text-5xl text-3xl mb-8 md:text-left text-center  text-gray-800 dark:text-gray-100 font-bold'>Here You can See My All Projects</h2>
            {/* <div className="tabs md:mb-0 mb-12 sm:w-3/4 w-full  mt-[30px]">
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
            </div> */}
            <div className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8 my-4">
                <button
                    className={`tab content-between ${activeTab === 'FullStack'
                        ? 'active bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                        } 
                        py-0 px-4 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white`}
                    onClick={() => setActiveTab('FullStack')}
                >
                    FullStack
                </button>
                <button
                    className={`tab content-between ${activeTab === 'Frontend'
                        ? 'active bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                        } py-0 px-4 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white`}
                    onClick={() => setActiveTab('Frontend')}
                >
                    Frontend
                </button>
                <button
                    className={`tab  ${activeTab === 'React'
                        ? 'active bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                        } py-0 px-4 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white`}
                    onClick={() => setActiveTab('React')}
                >
                    React
                </button>
                <button
                    className={`tab  ${activeTab === 'Static'
                        ? 'active bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                        } py-0 px-4 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white`}
                    onClick={() => setActiveTab('Static')}
                >
                    Static
                </button>
            </div>
 


            {!dataLoaded ? ( // Show loading spinner until data is loaded
                <div className="spinner-container mt-9">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div  className="tab-content sm:mt-5 mt-5 sm:pl-0 pl-2 ">
                    <Slider {...settings}>
                        {filteredProducts.map((product) => (
                            <div className=" drop-shadow-2xl rounded " key={product._id}>
                                {/* <div className="mr-2 email-wrap-bg border border-green-700"> */}
                                <div className="bg-gradient-to-r from-blue-600 to-blue-800 border border-blue-800 shadow-lg rounded-lg mr-2">
                                    <div className="w-full">
                                        <ReactPlayer
                                            url={product.video.filePath}
                                            playing={!videoLoaded} // Autoplay when videoLoaded is false
                                            loop
                                            muted
                                            width="100%"
                                            height="100%"
                                            onReady={() => setVideoLoaded(true)} // Call setVideoLoaded when the video is ready
                                        />
                                    </div>

                                    <div className='p-1'>
                                       <div>
                                        <p className="text-gray-300 text-xs text-right m-0">Future: {product.futureField} Project</p> 
                                        <p className="text-gray-300 text-xs text-right"> Last update: {new Date(product.date).toLocaleDateString()} </p>   
                                       </div>
                                        <div>
                                            <h2 className="text-2xl text-left font-bold text-white mb-2">{product.name}</h2>                                                                                     
                                            <p className="text-gray-100 dark:text-gray-300 text-sm text-left leading-relaxed">
                                            {expandedDescription ? product.description : product.description.slice(0, 150)}
                                            {!expandedDescription && product.description.length > 150 && (
                                                <a onClick={toggleDescription} className="text-black hover:underline focus:outline-none ml-1">
                                                    Read more...
                                                </a>
                                            )}
                                            {expandedDescription && (
                                                <a onClick={toggleDescription} className="text-black hover:underline focus:outline-none ml-1">
                                                    Show less
                                                </a>
                                            )}
                                        </p>
                                        </div>
                                      
                                        <div className='flex justify-around items-center mb-1 mt-3'>
                                            <a className="text-gray-300  dark:text-gray-200 text-sm flex font-black items-center" href={product.clientURL} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faFileCode} className="w-4 mr-2" />
                                                Client Code
                                            </a>
                                            <a className="text-gray-300  dark:text-gray-200 text-sm flex font-black items-center ml-3" href={product.serverURL} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faServer} className="w-4 mr-2" />
                                                Server Code
                                            </a>
                                            <a className="text-gray-300  dark:text-gray-200 text-sm flex font-black items-center ml-3" href={product.demoURL} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faLink} className="w-4 mr-2" />
                                                Demo
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
//    <div className="lg:flex xl:flex md:flex p-2 md:p-0 items-center justify-around">
//                                 <div>
//                                 {/* {!videoLoaded && <div className="spinner"></div>} */}
//                                     <ReactPlayer
//                                         // id="autoplayVideo"
//                                         url={product.video.filePath}
//                                         playing={!videoLoaded} // Autoplay when videoLoaded is false
//                                         loop
//                                         muted
//                                         width="100%"
//                                         height="100%"
//                                         onReady={handlePlay} // Call handlePlay when the video is ready
//                                     />
//                                 </div>

//                                 <div className='md:px-5 md:mt-3 mt-3 '>
//                                     <span className="flex justify-between  items-center">
//                                         <h2 className="md:text-4xl text-xl md:font-black dark:text-white text-black">{product.name}</h2>
//                                         <h2 className="  text-Bcolor text-base">Future: {product.futureField} Project</h2>
//                                     </span>
//                                     <p className="text-Bcolor text-right  text-base">Last update: {new Date(product.date).toLocaleDateString()}</p> {/* Display Date */}
//                                     <p className="dark:text-white text-black text-left text-sm md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique rerum, omnis sit recusandae tempora ea, minus illum, eos voluptate molestias magnam accusamus soluta officia reiciendis nesciunt fugit laboriosam alias ab.</p>
//                                     <div className='sm:flex hidden justify-start items-end'>
//                                         <button className="btn dark:bg-black bg-white dark:text-white text-black">
//                                             <a href={product.clientURL} target="_blank" rel="noopener noreferrer">
//                                                 <FontAwesomeIcon icon={faFileCode} className="w-10 link link-accent" />
//                                                 ClientCode
//                                             </a>
//                                         </button>
//                                         <button className="btn ml-5 dark:bg-black bg-white dark:text-white text-black">
//                                             <a href={product.serverURL} target="_blank" rel="noopener noreferrer">
//                                                 <FontAwesomeIcon icon={faServer} className="w-10 link link-accent" />
//                                                 ServerCode
//                                             </a>
//                                         </button>
//                                         <button className="btn ml-5 dark:bg-black bg-white dark:text-white text-black">
//                                             <a href={product.demoURL} target="_blank" rel="noopener noreferrer">
//                                                 <FontAwesomeIcon icon={faLink} className="w-10 link link-accent" /> DEMO
//                                             </a>
//                                         </button>
//                                     </div>
                                    // <div className='flex sm:hidden justify-around items-center'>
                                    //     <a className="dark:text-white text-black  border border-Bcolor rounded" href={product.clientURL} target="_blank" rel="noopener noreferrer">
                                    //         ClientCode<FontAwesomeIcon icon={faFileCode} className="w-10 link link-accent" />
                                    //     </a>
                                    //     <a className="dark:text-white text-black  border border-Bcolor rounded" href={product.serverURL} target="_blank" rel="noopener noreferrer">
                                    //         ServerCode<FontAwesomeIcon icon={faServer} className="w-10 link link-accent" />
                                    //     </a>
                                    //     <a className="dark:text-white text-black border border-Bcolor rounded" href={product.demoURL} target="_blank" rel="noopener noreferrer">
                                    //         DEMO<FontAwesomeIcon icon={faLink} className="w-10 link link-accent" />
                                    //     </a>
                                    // </div>
//                                 </div>
//                             </div>