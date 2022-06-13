import React from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSoccerBall, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobile from '../../asset/logo/mobile.png'

const Contract = () => {
    return (
        <div id='contract' className='pb-5'>
            <h4 className='text-4xl font-bold text-cyan-900 text-center my-12'>contract With Me...</h4>
            <div class="flex flex-col mb-5 w-full lg:flex-row">
                <div class="grid flex-grow   card rounded-box place-items-center">
                    <div class="card flex-shrink-0  w-full max-w-sm">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Your email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Your Message" class="input input-bordered input-lg w-full max-w-xs" />

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid flex-grow shadow-2xl bg-base-100 py-10 mt-5 card rounded-box place-items-center">
            <h4 className='text-4xl font-bold  text-center'>Social..</h4>

                    <div>
                        {/* <div class="ml-7 border-0 badge sm:bg-base-100  badge-lg"><img src={mobile} className='mr-3 mt-2' alt="" />  <p className=' '>Call..Me</p>
                        </div> */}
                        <div>
                            <a href=""><FontAwesomeIcon icon={faPhone} className='w-10 link link-accent'></FontAwesomeIcon>+88 01733624622</a>
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
                </div>
            </div>
        </div>
    );
};

export default Contract;