import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { LiaDollarSignSolid } from "react-icons/lia";
import { LiaLinkedinIn,  LiaFacebookF, LiaInstagram, LiaTwitter } from "react-icons/lia";

import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
        <div className='bg-[#0d2857] py-10 flex'>
            <div className='container lg:flex grid gap-8 items-center lg:justify-between justify-center mx-auto'>
                <div className='flex  lg:w-[40%] w-[100%] items-center gap-6'>
                    <IoNewspaperOutline className='w-20 h-20 text-white ' />
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-medium text-white'>Your Travel Journey Starts Here</h1>
                        <p className='text-white text-sm font-light leading-6 '>Sign up and we`'ll send the best deals to you</p>
                    </div>
                </div>
                <form className='flex lg:mx-0 mx-auto items-center gap-2 lg:w-[40%] w-[100%]'>
                    <input type="email" className='w-full bg-white py-4 px-2 rounded-sm' placeholder='Enter your email' />
                    <button type="submit" className='bg-[#3554d1] text-white text-md font-bold py-4 px-5 rounded-sm'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className=' container mx-auto lg:flex grid gap-5 md:grid-cols-3  sm:grid-cols-2  items-start lg:justify-between sm:justify-center px-5 py-10'>
            {/* contact us */}
            <ul className='grid gap-2'>
                <li className='text-lg font-medium'>Contact Us</li>
                <li className='text-sm font-light grid gap-1'>Toll Free Customer Care 
                    <NavLink className='text-blue-600 font-semibold text-lg hover:underline' to="/">+977 123 456 789</NavLink>
                </li>
                <li className='text-sm font-light grid gap-1'>Need live support?
                    <NavLink className='text-blue-600 font-semibold text-lg hover:underline' to="/">Click here</NavLink>
                </li>
            </ul>
            {/* Company */}
            <ul className='grid gap-2'>
                <li className='text-lg font-medium'>Company</li>
                <li className='text-sm font-light'><NavLink to="/">About Us</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Careers</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Blog</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Press</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Gift Cards</NavLink></li>
            </ul>
            {/* Support */}
            <ul className='grid gap-2'>
                <li className='text-lg font-medium'>Support</li>
                <li className='text-sm font-light'><NavLink to="/">Contact</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Legal Notices</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Privacy Policy</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Terms and Conditions</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Sitemap</NavLink></li>
            </ul>
            {/* Other Services */}
            <ul className='grid gap-2'>
                <li className='text-lg font-medium'>Other Services</li>
                <li className='text-sm font-light'><NavLink to="/">Car hire</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Activity Finder</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Tour List</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Flight finder</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Cruise Ticket</NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Holiday Rental </NavLink></li>
                <li className='text-sm font-light'><NavLink to="/">Travel Agents</NavLink></li>
            </ul>
            {/* Mobile */}
            <ul className='grid gap-2'>
                <li className='text-lg font-medium'>Mobile</li>
                <li className=' text-sm font-light border border-gray-400 px-5 py-3 flex items-center gap-2'>
                    <FaApple className='w-6 h-6'/>
                    <NavLink to="/">
                    <p>Download it on</p>
                    <p className='text-md font-medium'>App Store</p></NavLink>
                </li>
                <li className=' text-sm font-light border border-gray-400 px-3 py-3 flex items-center gap-2'>
                    <FaGooglePlay className='w-6 h-6'/>
                    <NavLink to="/">
                    <p>Get it on</p>
                    <p className='text-md font-medium'>Google Play</p></NavLink>
                </li>
            </ul>
        </div>
        <div className='md:flex grid gap-3 items-center justify-between px-5 py-10 border-t border-gray-400'>
            <div className='md:flex grid items-center gap-2'>
                <p className='text-sm font-light'>© 2025 by ib-themes All rights reserved.</p>
                <ul className='flex items-center gap-2 text-sm font-light'>
                    <li><NavLink to="/">Privacy</NavLink></li>
                    <li><NavLink to="/">Terms</NavLink></li>
                    <li><NavLink to="/">Site Map</NavLink></li>
                </ul>
            </div>
            <div className='md:flex grid items-center md:gap-10 gap-4 text-md font-light'>
                <div className='flex items-center gap-2'>
                    <p className='flex items-center gap-2 underline'><BsGlobe2 />English (US)</p>
                    <p className='flex items-center gap-2 underline'><LiaDollarSignSolid />USD</p>
                </div>
                <div className='flex items-center gap-2'>
                    <NavLink><LiaFacebookF  className='w-4 h-4'/></NavLink>
                    <NavLink><LiaTwitter  className='w-5 h-5'/></NavLink>
                    <NavLink><LiaInstagram  className='w-5 h-5'/></NavLink>
                    <NavLink><LiaLinkedinIn  className='w-5 h-5'/></NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer