"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "therealteejay25@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2s
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="z-50 fixed w-[90vw] m-4 md:m-0 justify-between items-center p-[6px] rounded-full backdrop-blur-2xl max-w-[1000px] md:mx-auto left-0 right-0 flex">
        <a href="" className="sm:hidden">
          <img src="img.jpg" className="h-8 mx-2 w-8 rounded-full" alt="" />
        </a>
        {/* Desktop - Email & CV */}
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
        className="hidden md:flex items-center gap-2 text-gray-700">
          <div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
            className="flex items-center border-gray-100 border rounded-full mx-auto bg-white/60 backdrop-blur-xl"
          >
            <p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.1, delay: 0.1 },
              }}
              className="py-1 px-3 text-sm"
            >
              {email}
            </p>
            <button
              onClick={handleCopy}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, delay: 0.5 },
              }}
              className={`py-2 border border-gray-200 cursor-pointer px-7 text-xs bg-white rounded-full ${
                copied ? `text-green-500` : `text-black`
              }`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <button
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.3, delay: 0.9 },
            }}
            className="py-2 border border-gray-100 cursor-pointer px-8 text-xs bg-white rounded-full"
          >
            CV
          </button>
        </motion.div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex text-sm text-gray-700 mx-4 gap-2">
          {["About", "Projects", "Contact"].map((link, index) => (
            <React.Fragment key={link}>
              {index !== 0 && <span className="text-gray-400">/</span>}
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.3 + index * 0.1,
                    delay: 0.1 + index * 0.2,
                  },
                }}
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </motion.a>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.4 } }}
          className="md:hidden ml-auto text-sm text-gray-700 font-medium cursor-pointer px-3 py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div className="p-1 bg-neutral-200 rounded-full">
              <img src="X.png" className="h-6" alt="" />
            </div>
          ) : (
            <div className="p-1 bg-neutral-200 rounded-full">
              <img src="List.png" className="h-6" alt="" />
            </div>
          )}
        </span>
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
              <a
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text text-center text-gray-700 font-medium"
              >
                {item}
              </a>
            ))}
            <div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
              className="flex items-center border-gray-100 border rounded-full mx-auto bg-white/60 backdrop-blur-xl"
            >
              <p
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.1, delay: 0.1 },
                }}
                className="py-1 px-3 text-sm"
              >
                {email}
              </p>
              <button
                onClick={handleCopy}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2, delay: 0.5 },
                }}
                className={`py-2 border border-gray-200 cursor-pointer px-7 text-xs bg-white rounded-full ${
                  copied ? `text-green-500` : `text-black`
                }`}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <button
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.3, delay: 0.9 },
              }}
              className="py-2 border border-gray-200 w-60 mx-auto cursor-pointer px-8 text-xs bg-white rounded-full"
            >
              CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
