import React from 'react';
import {  faFileCode, faLink, faServer, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import autoParts from '../../asset/portfulioImg/auto-parts_1.png'
import ClothingWerehouse from '../../asset/portfulioImg/clothingWerehouse.png'
import limboflaw from '../../asset/portfulioImg/limboflaw.png'

const Portfolio = () => {
    return (
        <div>

            <div id='portfolio' className='my-10'>
                <h4 className='place-items-center mb-5  text-4xl font-bold text-cyan-900'>My Portfolio..</h4>
                <div className='grid grid-cols-1 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div class="card w-full image-full">
                        <figure><img src={ClothingWerehouse} alt="clothingWerehouse" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Clothing Werehouse WebSide</h2>
                            <p>This is a cloth warehouse A platform to sell wholesale clothing   user can order services and  Can Delete their order and also they </p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-Raju1-Ahmed" target="_blank">
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClintCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-Raju1-Ahmed" target="_blank"> 
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="https://capable-platypus-3d6bf1.netlify.app/" target="_blank">
                                        <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full image-full">
                        <figure><img src={autoParts} alt="autoParts" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">TeslaReview Webside!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="https://github.com/programming-hero-web-course1/manufacturer-website-client-side-Raju1-Ahmed" target="_blank"> 
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClintCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="https://github.com/programming-hero-web-course1/manufacturer-website-server-side-Raju1-Ahmed" target="_blank">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="https://admirable-piroshki-75b93a.netlify.app/" target="_blank">
                                        <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full image-full">
                        <figure><img src={limboflaw} alt="limboflaw" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="https://github.com/programming-hero-web-course-4/independent-service-provider-Raju1-Ahmed" target="_blank"> 
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClintCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="" target="_blank">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="https://limboflow-23a68.web.app/" target="_blank">
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