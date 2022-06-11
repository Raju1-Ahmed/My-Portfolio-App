import React from 'react';
import {  faFileCode, faLink, faServer, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clothingWerehouse from '../../asset/portfulioImg/clothingWerehouse.png'
import TeslaReview from '../../asset/portfulioImg/tesla-review.png'
import homeshop from '../../asset/portfulioImg/Home-shop.png'
const Portfolio = () => {
    return (
        <div>

            <div className='my-10'>
                <h4 className='place-items-center mb-5  text-4xl font-bold text-cyan-900'>My Portfolio..</h4>
                <div className='grid grid-cols-1 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div class="card w-full image-full">
                        <figure><img src={clothingWerehouse} alt="clothingWerehouse" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Clothing Werehouse WebSide</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="">
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClintCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="">
                                        <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full image-full">
                        <figure><img src={TeslaReview} alt="TeslaReview" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">TeslaReview Webside!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="">
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClintCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="">
                                        <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full image-full">
                        <figure><img src={homeshop} alt="homeshop" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions ">
                                <button class="btn justify-start">
                                    <a href="">
                                        <FontAwesomeIcon icon={faFileCode} className='w-10 link link-accent'></FontAwesomeIcon> ClintCode</a>
                                </button>
                                <button class="btn justify-center">
                                    <a href="">
                                        <FontAwesomeIcon icon={faServer} className='w-10 link link-accent'></FontAwesomeIcon> ServerCode</a>
                                </button>
                                <button class="btn justify-end">
                                    <a href="">
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