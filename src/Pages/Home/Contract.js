import React from 'react';
import mobile from '../../asset/logo/mobile.png'

const Contract = () => {
    return (
        <div id='contract' className='bg-base-200'>
            <h4 className='text-4xl font-bold text-cyan-900 text-center my-12'>contract With Me...</h4>

            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    
                <div class="shadow-2xl rounded bg-base-100 text-center lg:text-center ">
                        <h1 class="text-5xl font-bold">Social..</h1>
                        <p class="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="shadow-2xl rounded bg-base-100 text-center lg:text-center ">
                    <div class="ml-7 bg-base-100 border-0 badge  badge-lg"><img  src={mobile} className='mr-3 mt-2'  alt="" />  <p className=' text-5xl font-bold'>Call..Me</p>
                        </div>
                        <p class="py-6  ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
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
            </div>
        </div>
    );
};

export default Contract;