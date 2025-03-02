import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  closed: { opacity: 0, y: -15, transition: { duration: 0.7 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 w-full p-6 z-10">
      <div className="max-w-7xl bg-gray-200 shadow-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {["/", "/gifting", "/gallery", "/blog", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className="relative text-primary font-medium text-lg transition duration-300 hover:text-blue-600"
              >
                {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}

                {location.pathname === path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-[-2px] h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Toggle Menu"
              animate={isOpen ? "open" : "closed"}
              variants={iconVariants}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={wrapperVariants}
            className="md:hidden bg-gray-100 origin-top"
          >
            <div className="px-4 pb-3 space-y-2">
              {["/", "/gifting", "/gallery", "/blog", "/about", "/contact"].map((path) => (
                <motion.div key={path} variants={itemVariants}>
                  <Link
                    to={path}
                    className="block text-primary font-medium text-lg py-2 transition duration-300 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
