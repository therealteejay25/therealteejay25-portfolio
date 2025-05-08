"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="z-50 fixed w-[90vw] m-4 md:m-0 justify-between items-center p-[6px] rounded-full backdrop-blur-2xl max-w-[1000px] md:mx-auto left-0 right-0 flex">
        {/* Desktop - Email & CV */}
        <div className="hidden md:flex items-center gap-2 text-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
            className="flex items-center rounded-full bg-white/60 backdrop-blur-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.1 } }}
              className="py-1 px-3 text-sm"
            >
              therealteejay25@gmail.com
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.5 } }}
              className="py-2 border border-gray-100 cursor-pointer px-7 text-xs bg-white rounded-full"
            >
              Copy
            </motion.button>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.3, delay: 0.9 } }}
            className="py-2 border border-gray-100 cursor-pointer px-8 text-xs bg-white rounded-full"
          >
            CV
          </motion.button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex text-sm text-gray-700 mx-4 gap-2">
          {["About", "Projects", "Contact"].map((link, index) => (
            <React.Fragment key={link}>
              {index !== 0 && <span className="text-gray-400">/</span>}
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.4 + index * 0.1, delay: 0.1 + index * 0.4 } }}
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </motion.a>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.4 } }}
          className="md:hidden ml-auto text-sm text-gray-700 font-medium cursor-pointer px-4 py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <div><img src="X.png" className="h-6" alt="" /></div> : <div><img src="List.png" className="h-6" alt="" /></div>}
        </motion.span>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-[100vw] pt-24 flex flex-col justify-center-items-center bg-white shadow-xl z-[20] p-6 flex flex-col gap-6 text-gray-800 md:hidden"
          >
            {["About", "Projects", "Contact"].map((item, idx) => (
              <motion.a
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg text-center font-medium"
              >
                {item}
              </motion.a>
            ))}
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
            className="flex items-center border-gray-100 border rounded-full mx-auto bg-white/60 backdrop-blur-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.1, delay: 0.1 } }}
              className="py-1 px-3 text-sm"
            >
              therealteejay25@gmail.com
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.5 } }}
              className="py-2 border border-gray-200 cursor-pointer px-7 text-xs bg-white rounded-full"
            >
              Copy
            </motion.button>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.3, delay: 0.9 } }}
            className="py-2 border border-gray-200 w-60 mx-auto cursor-pointer px-8 text-xs bg-white rounded-full"
          >
            CV
          </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
