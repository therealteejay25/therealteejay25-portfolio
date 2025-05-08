"use client";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-16 md:px-16 bg-[#f1f1f1]"
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-semibold text-center text-gray-900">
        Working in real-time while <br /> on my fun journey.
      </h1>

      {/* Divider with Badge */}
      <div className="my-8 w-full flex flex-col items-center">
        <div className="h-[1px] w-full max-w-5xl bg-gray-300"></div>
        <div className="bg-white mt-[-1rem] w-fit px-6 py-1 text-sm text-gray-700 rounded-full shadow hover:rotate-0 transition-all -rotate-12">
          My Projects
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
        {[
          {
            title: "Base Wall Of Fame",
            desc: "A showcase platform for celebrating the achievements of outstanding BASE builders and their projects.",
            img: "base.png",
            code: "https://github.com/your-username/base-wall",
            live: "https://base-wall.vercel.app",
          },
          {
            title: "Lixt",
            desc: "A smart to-do list app with category filtering, Google sign-in, and cloud sync powered by Firebase.",
            img: "lixt.png",
            code: "https://github.com/your-username/lixt",
            live: "https://lixt-main.vercel.app",
          },
          {
            title: "Zurvey",
            desc: "A clean feedback collection tool demo that lets users quickly create surveys and visualize responses.",
            img: "zurvey.png",
            code: "https://github.com/your-username/zurvey",
            live: "https://zurvey.vercel.app",
          },
        ].map((project, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl space-y-4 shadow-lg shadow-gray-200"
          >
            <img
              className="h-40 rounded-xl w-full object-cover"
              src={project.img}
              alt={project.title}
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </div>
            <div className="flex w-full justify-between gap-2 flex-wrap">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white py-2 px-6 text-sm rounded-lg flex items-center gap-2"
              >
                <img src="githubw.svg" className="h-5" alt="GitHub" />
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white py-2 px-6 text-sm rounded-lg flex items-center gap-2"
              >
                <img src="web.svg" className="h-5" alt="Demo" />
                Live
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Design Gallery Section */}
      <div className="mt-24 w-full max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
          className="text-gray-900 text-3xl font-semibold mb-2"
        >
          Design Gallery
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
          className="text-sm text-gray-600 mb-6"
        >
          Take a look at some of my favorite UI/UX and graphic design works.
          Always exploring and experimenting with new styles!
        </motion.p>

        {/* Bento Grid Gallery */}
        <div className="sm:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 auto-rows-[150px] gap-4">
          {[
            { src: "nike.png", alt: "Nike App", span: "col-span-1 row-span-1" },
            {
              src: "bread.png",
              alt: "Bakery Website",
              span: "col-span-1 row-span-2",
            },
            { src: "portfolio.png", alt: "Portfolio UI", span: "col-span-1" },
            {
              src: "studi (3).png",
              alt: "Study App",
              span: "col-span-1 row-span-2",
            },
            {
              src: "noodles.png",
              alt: "Noodles UI",
              span: "col-span-1 row-span-2",
            },
            {
              src: "btc.png",
              alt: "Crypto Design",
              span: "col-span-1 row-span-1",
            },
            {
              src: "VidUi.png",
              alt: "Flour Package",
              span: "col-span-1 row-span-2",
            },
            {
              src: "portfolio2.png",
              alt: "Portfolio V2",
              span: "col-span-1 row-span-1",
            },
            {
              src: "flour.png",
              alt: "Flour Package",
              span: "col-span-1 row-span-1",
            },
            {
              src: "jordan.png",
              alt: "Jordan UI",
              span: "col-span-2 row-span-1",
            },
          ].map((img, idx) => (
            <motion.img
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 + idx * 0.1 },
              }}
              className={`object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300 ${img.span}`}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
