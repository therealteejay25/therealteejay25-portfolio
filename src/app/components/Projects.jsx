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
      <motion.h1
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.4 } }}
      className="text-2xl md:text-4xl font-semibold text-center text-neutral-700">
        Working in real-time <br /> to reach perfection
      </motion.h1>

      {/* Divider with Badge */}
      <motion.div
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.4 } }}
      className="my-8 w-full flex flex-col items-center">
        <div className="h-[1px] w-full max-w-5xl bg-neutral-300"></div>
        <div className="bg-white mt-[-1rem] w-fit px-6 py-1 text-sm text-neutral-700 rounded-full shadow hover:rotate-0 transition-all -rotate-12">
          My Projects
        </div>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
        {[
          {
            title: "Base Wall Of Fame",
            desc: "A showcase platform for celebrating the achievements of outstanding BASE builders and their projects.",
            img: "base.png",
            code: "https://github.com/therealteejay25/baseoffamemain",
            live: "https://basewalloffame.vercel.app",
          },
          {
            title: "Lixt",
            desc: "A smart to-do list app with category filtering, Google sign-in, and cloud sync powered by Firebase.",
            img: "lixt.png",
            code: "https://github.com/therealteejay25/lixt-main",
            live: "https://lixt-main.vercel.app",
          },
          {
            title: "Zurvey",
            desc: "A clean feedback collection tool demo that lets users quickly create surveys and visualize responses.",
            img: "zurvey.png",
            code: "https://github.com/therealteejay25/zurvey",
            live: "https://zurvey.vercel.app",
          },
        ].map((project, idx) => (
          <motion.div
          initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.4 } }} 
            key={idx}
            className="bg-white p-4 rounded-2xl space-y-4 shadow-lg shadow-neutral-200"
          >
            <img
              className="h-40 rounded-xl w-full object-cover"
              src={project.img}
              alt={project.title}
            />
            <div>
              <h3 className="text-xl font-semibold text-neutral-800">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-600">{project.desc}</p>
            </div>
            <div className="flex w-full justify-between gap-2 flex-wrap">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-700 text-white py-2 px-6 md:px-9 text-sm rounded-lg flex items-center gap-2"
              >
                <img src="githubw.svg" className="h-5" alt="GitHub" />
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-700 text-white py-2 px-6 md:px-9 text-sm rounded-lg flex items-center gap-2"
              >
                <img src="web.svg" className="h-5" alt="Demo" />
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Design Gallery Section */}
      <div className="mt-24 sm:flex flex-col w-full max-w-6xl">
        <h3
          initial={{ opacity: 0, x: -25 }}
          // whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0 } }}
          className="text-neutral-700 text-3xl font-semibold mb-2"
        >
          Design Gallery
        </h3>
        <p
          initial={{ opacity: 0, x: -25 }}
          // whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
          className="text-sm text-neutral-600 mb-10"
        >
          Take a look at some of my UI/UX and graphic design projects. <br />
          Always exploring and experimenting with new styles...
        </p>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 auto-rows-[125px] gap-4">
          {[
            { src: "nike.png", alt: "Nike App", span: "col-span-2 sm:col-span-1 row-span-1" },
            {
              src: "btc.png",
              alt: "Crypto Design",
              span: "col-span-1 md:row-span-2 row-span-1",
            },
            { src: "portfolio.png", alt: "Portfolio UI", span: "col-span-1" },
            {
              src: "studi (3).png",
              alt: "Study App",
              span: "col-span-2 md:col-span-1 row-span-2",
            },
            {
              src: "explore.png",
              alt: "Noodles UI",
              span: "col-span-1 md:row-span-2 row-span-1",
            },
              {
                src: "bread.png",
                alt: "Bakery Website",
                span: "col-span-1 row-span-1",
              },
            {
              src: "VidUi.png",
              alt: "Flour Package",
              span: "col-span-2 md:col-span-1 md:row-span-2 row-span-1",
            },
            {
              src: "portfolio2.png",
              alt: "Portfolio V2",
              span: "col-span-2 md:col-span-1 row-span-1",
            },
            {
              src: "wallpaper.png",
              alt: "Flour Package",
              span: "col-span-1 row-span-1",
            },
            {
              src: "jordan.png",
              alt: "Jordan UI",
              span: "col-span-3 md:col-span-2 row-span-1",
            },
          ].map((img, idx) => (
            <img
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              // whileInView={{
              //   opacity: 1,
              //   y: 0,
              //   transition: { duration: 1 + idx * 0.1 },
              // }}
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
