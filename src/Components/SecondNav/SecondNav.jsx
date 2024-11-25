import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";

const SecondNav = () => {
    return (
        <div className=''>
            <div className="flex items-center justify-between bg-[#fff] p-4">
                <div className="md:pl-20">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='mx-4 text-black '><NavLink to={'/'}>Home</NavLink></li>
                            <li className='mx-4 text-black '><NavLink to={'/statictis'}>Statistics</NavLink></li>
                            <li className='mx-4 text-black '><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <a className="text-2xl text-black font-semibold">Gadget Heaven</a>
                </div>
                <div className="hidden lg:flex">
                    <ul className="lg:flex">
                        <li className='mx-4 text-black '><NavLink to={'/'}>Home</NavLink></li>
                        <li className='mx-4 text-black '><NavLink to={'/statictis'}>Statistics</NavLink></li>
                        <li className='mx-4 text-black '><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="md:pr-20 flex gap-4">
                    <NavLink><RiShoppingCartLine className='p-2 bg-white text-4xl border-2 rounded-full'></RiShoppingCartLine></NavLink>
                    <NavLink><MdOutlineFavoriteBorder className='p-2 text-red-600 bg-white text-4xl border-2 rounded-full'></MdOutlineFavoriteBorder></NavLink>
                </div>
            </div>
        </div>
    );
};

export default SecondNav;