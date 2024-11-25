import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='h-[70vh] flex flex-col items-center justify-center'>
            <h1 className='text-9xl text-[#ffb8b8] font-bold mb-4'>404</h1>
            <h2 className='text-5xl font-semibold mb-2'>Uh-Oh!</h2>
            <p className='text-lg font-medium mb-4'>We Can't Find That Page</p>
            <NavLink to={'/'}><button className='py-2 px-10 border border-[#9538E2] bg-[#9538E2] btn-ghost text-lg font-semibold text-white hover:text-[#9538E2] rounded-full'>Go Back To Home</button></NavLink>
        </div>
    );
};

export default Errorpage;