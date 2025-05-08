import React from "react";

const About = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <div
        id="about"
        className="min-h-screen py-32 flex flex-col md:flex-row justify-center items-center md:px-20 px-7 bg-white rounded-b-[10rem]"
      >
        <div className="md:w-1/2">
          <img src="img.jpg" className="md:h-96 h-60 rounded-full" alt="" />
        </div>
        <div className="md:w-1/2 space-y-3 text-center md:text-left mt-10 md:mt-0">
          <h3 className="text-3xl font-semibold text-gray-900">Who Am I?</h3>
          <p className="text-sm text-gray-600">
            I’m Ariyo Eyitayo Emmanuel ( Têê Jäy ✌️) — a frontend developer, UI/UX designer, and
            creative thinker passionate about crafting web experiences that are
            both functional and beautiful. With 4+ years of experience building
            responsive, accessible interfaces using HTML, CSS, JavaScript,
            React, Next.js, and Tailwind, I focus on clean design, smooth
            motion, and purposeful interactivity. I'm also the co-founder of
            Phanthom, a growing teen-led tech community where we collaborate,
            learn, and build real solutions that matter. Whether I’m designing
            systems, building products, or leading creative direction, I bring
            energy, empathy, and innovation to every project. I'm always open to
            exciting collaborations — let’s connect and create something great
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
