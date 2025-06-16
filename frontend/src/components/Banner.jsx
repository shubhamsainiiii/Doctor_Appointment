import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className='flex bg-[#5f6FFF] rounded-lg mx-4 sm:mx-6 px-6 sm:px-10 md:px-14 lg:px-12 my-12 sm:my-16 md:my-20 md:mx-10'>
            {/* ---------- Left Side ---------- */}
            <div className='flex-1 py-6 sm:py-8 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-3 sm:mt-4'>With 100+ Trusted Doctors</p>
                </div>
                <button
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                    className='bg-white text-xs sm:text-sm md:text-base text-gray-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full mt-5 sm:mt-6 hover:scale-105 transition-all duration-400 font-semibold cursor-pointer'
                >
                    Create account
                </button>
            </div>

            {/* ---------- Right Side ---------- */}
            <div className='w-1/2 sm:w-2/5 md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-[160px] sm:max-w-[180px] md:max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner