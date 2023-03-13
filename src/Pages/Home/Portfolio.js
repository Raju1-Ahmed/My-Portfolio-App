import React from 'react';
import { faFileCode, faLink, faServer, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import autoParts from '../../asset/portfulioImg/auto-parts_1.png'
import ClothingWerehouse from '../../asset/portfulioImg/clothingWerehouse.png'
import limboflaw from '../../asset/portfulioImg/Happy-Cart.png'

const Portfolio = () => {
    return (
        <div id='portfolio'>
            <h4 className='place-items-center mb-4 text-bold text-5xl text-zinc-100'>My Portfolio</h4>
            <div className='border drop-shadow-2xl rounded bg-current p-2 mx-3 mb-5'>
                <div class="lg:flex  lg:flex-row sm:flex-col ">
                    <div data-aos="fade-left" className="basis-2/5"><img src={autoParts} className='' alt="autoParts" /></div>
                    <div data-aos="fade-right" className="basis-full lg:ml-3  rounded-lg">
                        <h2 className='text-center text-zinc-900 text-2xl'>Auto Parts</h2>
                        <p className='text-zinc-900 text-left text-base'>Here you will find all the necessary parts for a microcar user can order services and need to payment and then user payment will successful user Can Delete their order and also they can give a review and see their order status. </p>
                        <div className='grid grid-cols-3 lg:gap-4 gap-3 mt-[40px] m-2'>
                            <button class="btn">
                                <a href="https://github.com/Raju1-Ahmed/creative-agency-clint" target="_blank">
                                    <FontAwesomeIcon icon={faFileCode} className='w-10  link link-accent'></FontAwesomeIcon> ClientCode</a>
                            </button>
                            <button class="btn">
                                <a href="https://github.com/Raju1-Ahmed/creative-agency-server" target="_blank">
                                    <FontAwesomeIcon icon={faServer} className='w-10  link link-accent'></FontAwesomeIcon> ServerCode</a>
                            </button>
                            <button class="btn">
                                <a href="https://creative-agency-a0c6f.web.app" target="blank">
                                    <FontAwesomeIcon icon={faLink} className='w-10 link link-accent'></FontAwesomeIcon>Live</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;