"use client"
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <div
        id="about"
        className="min-h-screen py-32 flex flex-col sm:flex-row justify-center items-center sm:px-10 lg:px-20 px-7 bg-white rounded-b-[5rem] sm:rounded-b-[10rem]"
      >
        <div className="sm:w-1/2 flex justify-center items-center">
          <motion.img
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.4 } }}
          src="img.jpg" className="sm:h-72 h-60 rounded-full" alt="" />
        </div>
        <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.4 } }}
        className="sm:w-1/2 space-y-3 text-center sm:text-left mt-10 sm:mt-0">
          <h3 className="text-3xl font-semibold text-neutral-700">Who Am I?</h3>
          <p className="text-sm text-neutral-600">
            I’m Ariyo Eyitayo Emmanuel ( Têê Jäy ✌️) — a frontend developer,
            UI/UX designer, and creative thinker passionate about crafting web
            experiences that are both functional and beautiful. With 4+ years of
            experience building responsive, accessible interfaces using HTML,
            CSS, JavaScript, React, Next.js, and Tailwind, I focus on clean
            design, smooth motion, and purposeful interactivity. I'm also the
            co-founder of Phanthom, a growing teen-led tech community where we
            collaborate, learn, and build real solutions that matter. Whether
            I’m designing systems, building products, or leading creative
            direction, I bring energy, empathy, and innovation to every project.
            I'm always open to exciting collaborations — let’s connect and
            create something great together.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
