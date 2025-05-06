import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { TbMenuDeep } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

import gotrip_logo1 from '../assets/gotrip_logo1.svg'
import gotrip_logo2 from '../assets/gotrip_logoImage2.svg'
import SideMenuBar from './SideMenuBar'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const handleMenuClick = () => {
    setIsSideMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsSideMenuOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 transition-colors z-50 duration-300 ${isAuthPage ? 'bg-white shadow-md' : isScrolled ? 'bg-[#051036]' : 'bg-blue-500'}`}>
      <div className="w-[95%] mx-auto flex items-center justify-between py-4">
      
          <NavLink className="text-white font-medium text-3xl" to="/">
            Sarbatra Travels
          </NavLink>
          <ul className={`max-[1120px]:hidden flex items-center gap-5 ${isAuthPage ? 'text-black' : "text-white" } text-md font-light`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Categories</NavLink></li>
            <li><NavLink to="destinations">Destinations</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Page</NavLink></li>
            <li><NavLink to="/">Booking</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
          <div className={`flex items-center gap-5 ${isAuthPage ? 'text-black' : "text-white" } text-md font-light`}>
            <button className='md:block hidden'>USD</button>
            <button className='md:block hidden'>United States</button>
            <button className={`md:block hidden border px-8 py-3 rounded-sm ${isAuthPage ? 'border-black' : "border-white" } `}> <NavLink  to="/login">Sign In / Register</NavLink></button>
            <div className='max-[1120px]:flex items-center gap-5 hidden'>
              <CgProfile className='w-8 h-8 cursor-pointer'/>
              <TbMenuDeep className='w-10 h-10 cursor-pointer' onClick={handleMenuClick}/>
            </div>
            <SideMenuBar isOpen={isSideMenuOpen} onClose={handleCloseMenu} />
          </div>
        
      </div>
      
    </nav>
  )
}

export default NavBar