import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';


const Dashboard = () => {
    const location = useLocation()

    return (
        <section>
            <div className='bg-[#9538E2] flex flex-col justify-center items-center py-6'>
                <h1 className='text-white font-bold  text-center text-2xl md:text-3xl  md:max-w-5xl mx-auto'>Dashboard</h1>
                <p className='text-white pt-4 pb-6 text-center md:max-w-2xl max-w-96 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex justify-center items-center gap-6'>
                   <NavLink to={'/dashboard'}><button className={`py-2 px-10 border border-white rounded-full text-lg font-semibold ${location.pathname === '/dashboard'? 'bg-white text-[#9538E2]' : 'text-[#fff]'}`}>Cart</button></NavLink>
                    <NavLink to={'/dashboard/wishlist'}><button className={`py-2 px-8 border border-white rounded-full text-lg font-semibold ${location.pathname === '/dashboard/wishlist'? 'bg-white text-[#9538E2]' : 'text-[#fff]'}`}>Wishlist</button></NavLink>
                </div>
            </div>
            <div className='min-h-40'>
               <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Dashboard;