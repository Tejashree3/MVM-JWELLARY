import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, animate } from "framer-motion";
import logo from "../assets/logo.png";
import { ROUTES, NAV_LINKS } from "../constant";

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

const navVariants = {
  initial: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: "1.5rem",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  sticky: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "0rem",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const innerVariants = {
  initial: {
    maxWidth: "80rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  sticky: {
    maxWidth: "100%",
    paddingLeft: "0rem",
    paddingRight: "0rem",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top only if already on Home.
  const scrollToTop = (e) => {
    if (location.pathname === ROUTES.HOME) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = (e) => {
    if (location.pathname === ROUTES.HOME) {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const targetY =
          aboutSection.getBoundingClientRect().top + window.pageYOffset;
        animate(window.pageYOffset, targetY, {
          duration: 1.5,
          onUpdate: (latest) => window.scrollTo(0, latest),
        });
      }
    } else {
     
      
      navigate(ROUTES.HOME);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const links = [
    { name: "Home", path: ROUTES.HOME, onClick: scrollToTop },
    { name: "Gifting", path: ROUTES.GIFTING },
    { name: "Collections", path: ROUTES.COLLECTIONS },
    { name: "Gallery", path: ROUTES.GALLERY },
    { name: "Blog", path: ROUTES.BLOG },

    { name: "About", path: ROUTES.ABOUT, onClick: scrollToAbout },
    { name: "Contact Us", path: ROUTES.CONTACT },
  ];

  return (
    <motion.nav
      initial={false}
      animate={isSticky ? "sticky" : "initial"}
      variants={navVariants}
      className="z-10 transition-all duration-600"
    >
      <motion.div
        initial={false}
        animate={isSticky ? "sticky" : "initial"}
        variants={innerVariants}
        className="bg-gray-200 shadow-md mx-auto transition-all duration-600"
      >
        <div className="container flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link to={ROUTES.HOME}>
              <img className="h-10 w-auto" src={logo} alt="Your Company" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={link.onClick}
                className="relative text-primary font-medium text-lg transition duration-300 hover:text-blue-600"
              >
                {link.name}
                {location.pathname === link.path && (
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
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

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
              {links.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsOpen(false);
                      // Run custom onClick if provided (e.g. scroll behavior)
                      if (link.onClick) link.onClick();
                    }}
                    className="block text-primary font-medium text-lg py-2 transition duration-300 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
