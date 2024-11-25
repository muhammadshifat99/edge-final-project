import React from 'react';

const Footer = () => {
    return (
        <div className='pt-12 pb-4 md:pb-0 md:px-32 bg-[#06091A]'>
            <div>
                <h1 className='text-2xl text-white text-center font-bold mb-3'>Gadget Heaven</h1>
                <p className='text-center text-[#FFFFFF99] mb-4'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className="grid md:grid-cols-3 gap-3 text-center pt-5 md:p-10">
                <nav className=''>
                    <h6 className="text-lg font-bold text-[#fff]">Services</h6>
                    <div className='flex gap-4 md:gap-1 md:flex-col items-center justify-center'>
                    <a className="link link-hover text-[#FFFFFF99]">Branding</a>
                    <a className="link link-hover text-[#FFFFFF99]">Design</a>
                    <a className="link link-hover text-[#FFFFFF99]">Marketing</a>
                    <a className="link link-hover text-[#FFFFFF99]">Advertisement</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-[#fff]">Company</h6>
                    <div className='flex gap-4 md:gap-1 md:flex-col items-center justify-center'>
                    <a className="link link-hover text-[#FFFFFF99]">About us</a>
                    <a className="link link-hover text-[#FFFFFF99]">Contact</a>
                    <a className="link link-hover text-[#FFFFFF99]">Jobs</a>
                    <a className="link link-hover text-[#FFFFFF99]">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-[#fff]">Legal</h6>
                    <div className='flex gap-4 md:gap-1 md:flex-col items-center justify-center'>
                    <a className="link link-hover text-[#FFFFFF99]">Terms of use</a>
                    <a className="link link-hover text-[#FFFFFF99]">Privacy policy</a>
                    <a className="link link-hover text-[#FFFFFF99]">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Footer;