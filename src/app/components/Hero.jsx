"use client";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen pb-10 bg-[#f1f1f1] rounded-b-[5rem] md:rounded-b-[10rem] p-4 md:p-6">
      <div className="flex justify-center w-full">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center md:mt-24 mt-20 text-center">
        {/* Profile Picture + Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative"
        >
          <img
            src="/img.jpg"
            className="h-24 w-24 border-4 border-white rounded-full object-cover"
            alt="Profile of Têê Jäy"
          />
          <div className="text-neutral-600 -translate-y-16 translate-x-16 -rotate-12 top-[6rem] right-[-5rem] bg-white text-xs py-1 rounded-full shadow-xs">
            Têê Jäy 👋
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-3xl md:text-4xl  px-3 font-semibold text-neutral-700"
        >
          Building Digital Products,
          <br />
          Brands, and Experiences.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 max-w-xl text-sm px-5 text-neutral-600"
        >
          Hey there 👋 I’m Ariyo Eyitayo Emmanuel (Têê Jäy) — a frontend developer
          and UI/UX designer based in Nigeria who loves turning ideas into beautiful, useful
          websites.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm hover:bg-neutral-800 transition"
        >
          See My Work
          <img src="/ArrowLineUpRight.png" alt="Arrow icon" className="h-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
