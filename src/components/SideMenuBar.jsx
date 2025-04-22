import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import gotrip_logo from '../assets/gotrip_logoImage2.svg'
import { LiaFacebookF, LiaTwitter, LiaInstagram, LiaLinkedinIn } from "react-icons/lia";

const SideMenuBar = ({ isOpen, onClose }) => {
  return (
    <>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-all duration-300"
          onClick={onClose}
        />
      )}
     
      <div 
        className={`overflow-y-auto w-[400px] h-screen fixed top-0 left-0 bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
      >
       <div className='flex items-center justify-between p-6 '>
        <img src={gotrip_logo} alt="logo" className='w-37' />
        <IoClose className='w-9 h-9 cursor-pointer text-black' onClick={onClose} />
       </div>
       <ul className='text-black text-md font-medium grid gap-5 py-7 pl-7 border-y border-gray-400' >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Categories</NavLink></li>
        <li><NavLink to="/">Destinations</NavLink></li>
        <li><NavLink to="/">Blog</NavLink></li>
        <li><NavLink to="/">Page</NavLink></li>
        <li><NavLink to="/">Booking</NavLink></li>
        <li><NavLink to="/">Contact</NavLink></li>
       </ul>
       <div className='px-5 py-10 grid gap-3'>
        <p className='text-sm font-light text-black grid gap-1' >Toll Free Customer Care <NavLink className="text-lg font-medium text" to="/">+977 123 456 789</NavLink></p>
        <p className='text-sm font-light text-black grid gap-1' >Need live support? <NavLink className="text-lg font-medium" to="/">hi@sarbatra.com</NavLink></p>
       <div className='grid items-center gap-2'>
       <p className='text-lg font-semibold text-black grid gap-1'>Follow us on social media</p>
       <div className='flex items-center gap-2'>
                            <NavLink><LiaFacebookF  className='w-4 h-4 text-black'/></NavLink>
                            <NavLink><LiaTwitter  className='w-5 h-5 text-black'/></NavLink>
                            <NavLink><LiaInstagram  className='w-5 h-5 text-black'/></NavLink>
                            <NavLink><LiaLinkedinIn  className='w-5 h-5 text-black'/></NavLink>
        </div>
       </div>
       </div>
       <div>
        <button className="text-black mb-10 mx-5 border w-[350px] px-8 py-3 rounded-sm"> <NavLink  to="/login">Sign In / Register</NavLink></button>
       </div>
      </div>
    </>
  )
}

export default SideMenuBar