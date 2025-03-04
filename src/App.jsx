import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Home from "./mainpage/Home";
import About from "./pages/About/About";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import { ROUTES } from "./constant";
import Loader from "./pages/layout/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    const handleScroll = () => {
      setShowScroll(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <Loader />; 

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
      <Footer />

      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="scroll-top"
          initial={{ y: -450, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 450, opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </Router>
  );
}

export default App;
