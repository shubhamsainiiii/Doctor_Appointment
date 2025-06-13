import React, { useState, useEffect, useRef } from 'react';
import { assets } from './../assets/assets_frontend/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiArrowDown, FiArrowDownCircle, FiArrowDownLeft, FiArrowUp, FiChevronDown, FiDroplet, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      setToken(true);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 mx-4 sm:mx-6 md:mx-10 lg:mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20'>

      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-8 font-medium'>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/doctors'>DOCTORS</NavLink></li>
        <li><NavLink to='/about'>ABOUT</NavLink></li>
        <li><NavLink to='/contact'>CONTACT</NavLink></li>
      </ul>

      {/* Desktop Right Side */}
      <div className='hidden md:flex items-center gap-5'>
        {token ? (
          <div className='relative' ref={dropdownRef}>
            <div
              className='flex items-center gap-2 cursor-pointer'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img className='w-9 rounded-full' src={assets.profile_pic} alt="Profile" />
              <FiChevronDown className='size-5' />
              {/* <img className='w-3' src={assets.dropdown_icon} alt="Dropdown" /> */}
            </div>

            {dropdownOpen && (
              <div className='absolute right-0 top-12 min-w-[200px] bg-stone-100 rounded shadow-lg flex flex-col gap-4 p-4 z-50'>
                <p onClick={() => { navigate('/my-profile'); setDropdownOpen(false); }} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => { navigate('/my-appointments'); setDropdownOpen(false); }} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => { logout(); setDropdownOpen(false); }} className='hover:text-black cursor-pointer text-red-500'>Logout</p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light'
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className='md:hidden'>
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='fixed inset-x-4 top-16 mx-auto w-auto max-w-md bg-white shadow-xl p-6 rounded-lg md:hidden z-50'>
          <ul className='flex flex-col gap-5 text-base font-medium'>
            <NavLink to='/' onClick={() => setShowMenu(false)}>HOME</NavLink>
            <NavLink to='/doctors' onClick={() => setShowMenu(false)}>DOCTORS</NavLink>
            <NavLink to='/about' onClick={() => setShowMenu(false)}>ABOUT</NavLink>
            <NavLink to='/contact' onClick={() => setShowMenu(false)}>CONTACT</NavLink>

            {token ? (
              <>
                <NavLink to='/my-profile' onClick={() => setShowMenu(false)}>My Profile</NavLink>
                <NavLink to='/my-appointments' onClick={() => setShowMenu(false)}>My Appointments</NavLink>
                <button onClick={() => { logout(); setShowMenu(false); }} className='text-red-500 text-left'>Logout</button>
              </>
            ) : (
              <button
                onClick={() => { navigate('/login'); setShowMenu(false); }}
                className='bg-[#5f6FFF] text-white px-4 py-2 rounded-full'
              >
                Create Account
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
