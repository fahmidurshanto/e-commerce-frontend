import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/CarryCraft.png";
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="trendify logo"
                className="h-12 md:h-12 lg:h-16"
              />
            </Link>
          </div>

          {/* hamburger button for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* navigation links for desktop */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">HOME</Link>
            <Link to="/collection" className="text-gray-800 hover:text-gray-600">COLLECTION</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">ABOUT</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600">CONTACT</Link>
          </div>

          {/* search, profile and cart section */}
          <div className='text-3xl hidden md:flex justify-end items-center gap-4'>
            <CiSearch className='cursor-pointer hover:text-gray-500' />
            <Link to="/profile" className='hover:text-gray-500'><CgProfile /></Link>
            <Link to="/cart" className='hover:text-gray-500'><PiShoppingCartSimpleLight /></Link>
          </div>
        </div>

        {/* mobile menu with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="flex flex-col space-y-2 mt-2">
                <Link to="/" className="text-gray-800 hover:text-gray-600">HOME</Link>
                <Link to="/collection" className="text-gray-800 hover:text-gray-600">COLLECTION</Link>
                <Link to="/about" className="text-gray-800 hover:text-gray-600">ABOUT</Link>
                <Link to="/contact" className="text-gray-800 hover:text-gray-600">CONTACT</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;