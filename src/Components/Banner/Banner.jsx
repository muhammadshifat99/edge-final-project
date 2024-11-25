import React from 'react';
import bannerImage from '../../assets/banner.jpg'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>
            <div className='mx-4 px-2 pb-2 border-x border-b rounded-b-2xl'>
                <div className='bg-[#9538E2] rounded-b-xl flex flex-col justify-center items-center pt-4 md:pt-8 pb-32 md:pb-64'>
                    <h1 className='text-white font-bold  text-center text-3xl md:text-5xl  md:max-w-5xl mx-auto'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='text-white pt-4 pb-6 text-center md:max-w-2xl max-w-96 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <NavLink to={'/dashboard'}><button className='text-[#9538E2] btn-ghost hover:text-white py-2 px-8 font-bold md:text-lg bg-white rounded-full'>Shop Now</button></NavLink>
                </div>
            </div>
            <div className='md:h-96 h-32'>
            <div className='md:h-64 relative flex justify-center  '>
                <div className='absolute bg-transparent mt-5 border max-w-80 md:max-w-4xl mx-auto p-4 rounded-xl backdrop-blur-5xl -top-28 md:-top-60'>
                    <img className='rounded-lg' src={bannerImage} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;