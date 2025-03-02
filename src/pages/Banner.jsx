import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../assets/banner-1.png"
import Ribben from "./Ribben";
const images = [
banner1,
banner1
];


export default function ImageSlider() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setPage((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <>
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.img
          key={page}
          src={images[page]}
          className="absolute w-full h-full object-cover"
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>


      <button
        onClick={() => paginate(-1)}
        className="absolute xl:left-110 left-10 top-1/2 -translate-y-1/2 bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
      >
        ❮
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-10 xl:right-110 top-1/2 -translate-y-1/2 bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
      >
        ❯
      </button>
    </div>
<Ribben/>
    </>
  );
}
