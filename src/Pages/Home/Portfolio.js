import React from 'react';
import { faFileCode, faLink, faServer, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import autoParts from '../../asset/portfulioImg/auto-parts_1.png'
import ClothingWerehouse from '../../asset/portfulioImg/clothingWerehouse.png'
import limboflaw from '../../asset/portfulioImg/Happy-Cart.png'

const Portfolio = () => {
    return (
        <div>

            <div id='portfolio' className='my-10'>
                <h4 className='place-items-center mb-5  text-4xl font-bold text-cyan-900'>My Portfolio..</h4>
                <div className='grid grid-cols-1 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div class="card w-full image-full">
                        <figure><img src={ClothingWerehouse} alt="clothingWerehouse" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Creative-Agency</h2>
                            <p>This is an IT training center, here you are web development course software development and graphic development course find</p>
                            <p className='text-red-300 font-bold '>full-stack Project</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="https://github.com/Raju1-Ahmed/creative-agency-clint" target="_blank">
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClientCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="https://github.com/Raju1-Ahmed/creative-agency-server" target="_blank">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="https://creative-agency-a0c6f.web.app" target="blank">
                                        <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full image-full">
                        <figure><img src={autoParts} alt="autoParts" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Auto-Parts</h2>
                            <p>Here you will find all the necessary parts for a microcar user can order services and need to payment and then user payment will successful user Can Delete their order and also they can give a review and see their order status.</p>
                            <p className='text-red-300 font-bold '>full-stack Project</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="https://github.com/Raju1-Ahmed/manufacturer-website-client-side" target="_blank">
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClientCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="https://github.com/Raju1-Ahmed/-manufacturer-website-server-side" target="_blank">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="https://auto-parts-4d34e.web.app" target="_blank">
                                        <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full image-full">
                        <figure><img src={limboflaw} alt="limboflaw" /></figure>
                        <div class="card-body">
                        <h2 class="card-title">Happy-Cart</h2>
                            <p>This is an ecommerce website where you will find all your needs, awesome design, excellent responsive for mobile and PC devices,</p>
                            <p className='text-red-300 font-bold '>Just  front-end Project</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="https://github.com/Raju1-Ahmed/happycart" target="_blank">
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClientCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="" target="_blank">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="https://willowy-custard-d1df98.netlify.app/" target="_blank">
                                        <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;