import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/CarryCraft.png";
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    },
    hover: {
      scale: 1.05,
      color: "#4B5563",
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      color: "#6B7280",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [-2, 2, -2],
      transition: { duration: 0.5 }
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Animated logo */}
          <motion.div
            whileHover="hover"
            variants={logoVariants}
          >
            <Link to="/">
              <motion.img
                src={logo}
                alt="trendify logo"
                className="h-12 md:h-12 lg:h-16"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </motion.div>

          {/* Hamburger button with animation */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </motion.div>

          {/* Desktop navigation with staggered animation */}
          <div className="hidden md:flex space-x-4">
            {/* {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, index) => ( */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover="hover"
              >
                <Link 
                  to={`/`} 
                  className="text-gray-800 hover:text-gray-600"
                >
                  HOME
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover="hover"
              >
                <Link 
                  to={`/collection`} 
                  className="text-gray-800 hover:text-gray-600"
                >
                  COLLECTION
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover="hover"
              >
                <Link 
                  to={`/about`} 
                  className="text-gray-800 hover:text-gray-600"
                >
                  ABOUT
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover="hover"
              >
                <Link 
                  to={`/contact`} 
                  className="text-gray-800 hover:text-gray-600"
                >
                  CONTACT
                </Link>
              </motion.div>
          </div>

          {/* Animated icons section */}
          <motion.div 
            className='text-3xl hidden md:flex justify-end items-center gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
              <CiSearch className='cursor-pointer' />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover" whileTap="tap">
              <Link to="/profile"><CgProfile /></Link>
            </motion.div>
            <motion.div 
              variants={iconVariants} 
              whileHover={{ ...iconVariants.hover, y: -2 }}
              whileTap="tap"
            >
              <Link to="/cart"><PiShoppingCartSimpleLight /></Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile menu with enhanced animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: "auto",
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { ease: "easeInOut", duration: 0.2 }
              }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="flex flex-col space-y-2 mt-2 pb-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { x: 50, opacity: 0 },
                      visible: { x: 0, opacity: 1 }
                    }}
                  >
                    <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;