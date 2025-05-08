"use client";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen pb-10 bg-[#f1f1f1] rounded-b-[10rem] p-4 md:p-6">
      <div className="flex justify-center w-full">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center md:mt-24 mt-16 text-center">
        {/* Profile Picture + Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.0 }}
          className="relative"
        >
          <img
            src="/img.jpg"
            className="h-24 w-24 border-4 border-white rounded-full object-cover"
            alt="Profile of Têê Jäy"
          />
          <div className="text-gray-600 -translate-y-16 translate-x-16 -rotate-12 top-[6rem] right-[-5rem] bg-white text-xs px-2 py-1 rounded-full shadow">
            Têê Jäy 👋
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.2 }}
          className="mt-6 text-3xl md:text-5xl px-3 font-semibold text-gray-900"
        >
          Building Digital Products,
          <br />
          Brands, and Experiences.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, delay: 1.4 }}
          className="mt-4 max-w-xl text-sm px-5 text-gray-600"
        >
          Hey there 👋 I’m Ariyo Eyitayo Emmanuel (Têê Jäy) — a frontend developer
          and UI/UX designer who loves turning ideas into beautiful, useful
          websites. I care about clean design, smooth interactions, and making
          things that feel good to use. If it’s creative, meaningful, and helps
          people, I’m all in.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.6 }}
          className="mt-6 inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
        >
          See My Work
          <img src="/ArrowLineUpRight.png" alt="Arrow icon" className="h-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
