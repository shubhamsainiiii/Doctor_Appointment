import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='px-4 sm:px-6 md:mx-10'>
            <hr className='border-gray-400' />
            <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-8 sm:gap-10 md:gap-14 my-8 sm:my-10 mt-10 sm:mt-32 md:mt-10 text-sm'>

                {/* ---------- Left Section ---------- */}
                <div className='text-center sm:text-left'>
                    <img className='mb-4 sm:mb-5 w-32 sm:w-36 md:w-40 mx-auto sm:mx-0' src={assets.logo} alt="Company Logo" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6 text-center sm:text-left text-justify'>
                        Prescripto is your trusted healthcare companion, connecting you with verified doctors and medical professionals. Book appointments easily, manage your health records, and get quality healthcare services at your convenience. Your health, our priority.
                    </p>
                </div>

                {/* ---------- Center Section ---------- */}
                <div className='text-center sm:text-left'>
                    <p className='text-lg sm:text-xl font-medium mb-4 sm:mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>
                            <Link to="/" className='hover:text-gray-800 cursor-pointer transition-colors'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className='hover:text-gray-800 cursor-pointer transition-colors'>
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className='hover:text-gray-800 cursor-pointer transition-colors'>
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className='hover:text-gray-800 cursor-pointer transition-colors'>
                                Privacy policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ---------- Right Section ---------- */}
                <div className='text-center sm:text-left'>
                    <p className='text-lg sm:text-xl font-medium mb-4 sm:mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>
                            <a href="tel:+917691888950" className='hover:text-gray-800 cursor-pointer transition-colors'>
                                +91-7691888950
                            </a>
                        </li>
                        <li>
                            <a href="mailto:prescripto@gmail.com" className='hover:text-gray-800 cursor-pointer transition-colors break-all sm:break-normal'>
                                prescripto@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* ---------- Copyright Text ---------- */}
            <div>
                <p className='py-4 sm:py-5 text-xs sm:text-sm text-center text-gray-600'>
                    Copyright © {new Date().getFullYear()} - All Right Reserved.
                </p>
            </div>

        </div>
    )
}

export default Footer