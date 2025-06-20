import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { FiArrowRight } from 'react-icons/fi';

const Header = () => {
    return (
        <div className='bg-[#5f6FFF] rounded-lg mx-4 sm:mx-6 md:mx-10 lg:mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 m-5 overflow-hidden md:pt-10 lg:pt-5'>

            <div className='flex flex-col lg:flex-row items-center justify-between'>

                {/* ---------- Left Side ---------- */}
                <div className='flex flex-col mt-10 justify-center gap-6 w-full lg:w-1/2 text-center lg:text-left'>
                    <p className='text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-snug'>
                        Book Appointment <br /> With Trusted Doctors
                    </p>

                    <div className='flex flex-col lg:flex-row items-center gap-4 text-white text-sm font-light'>
                        <img className='w-24 sm:w-28' src={assets.group_profiles} alt="Group Profiles" />
                        <p>
                            Simply browse through our extensive list of trusted doctors,<br className='hidden md:block' /> schedule your appointment hassle-free.
                        </p>
                    </div>

                    <a
                        className='flex items-center justify-center lg:justify-start gap-2 bg-white px-6 py-3 rounded-full text-gray-600 text-md transition-all duration-400 font-semibold hover:scale-105 w-fit mx-auto lg:mx-0'
                        href="#speciality"
                    >
                        Book appointment
                        <FiArrowRight className='size-4' />
                    </a>
                </div>

                {/* ---------- Right Side ---------- */}
                <div className='w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
                    <img
                        className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] rounded-lg object-contain'
                        src={assets.header_img}
                        alt="Header Image"
                    />
                </div>

            </div>
        </div>
    );
}

export default Header;
