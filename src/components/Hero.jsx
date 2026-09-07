import React from "react";
import reactImage from "../assets/icons/react.svg";
import tailwindImage from "../assets/icons/tailwind-css.svg";
import githubImage from "../assets/icons/github.svg";
import nodejsImage from "../assets/icons/nodejs.svg";
import postgresqlImage from "../assets/icons/postgresql.svg";
import gitImage from "../assets/icons/git.svg";
import mongoImage from "../assets/icons/mongodb.svg";
import heroImage from "../assets/hero.png";
import { motion } from "motion/react";
import Marquee from "@/components/8starlabs-ui/marquee";

const Hero = () => (
  <section
    id="about"
    className="absolute top-0 pt-32 pb-20 px-4 transition-colors duration-300"
  >
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8 flex justify-center">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
        Hi, i am Rajeev
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
        I’m a full-stack developer passionate about building fast, scalable web
        applications that solve real-world problems
      </p>
      <div className="flex flex-col border-y m-6 ">
        <div className=" p-2">Tech Stack: MERN</div>
        <Marquee className={"m-6 "}>
          <div className="text-white px-4 py-2 rounded-lg">
            <img src={reactImage} alt="React" className="h-10 w-10" />
          </div>
          <div className="text-white px-4 py-2 rounded-lg">
            <img src={tailwindImage} alt="Tailwind CSS" className="h-10 w-10" />
          </div>
          <div className="text-white px-4 py-2 rounded-lg">
            <img src={githubImage} alt="Tailwind CSS" className="h-10 w-10" />
          </div>
          <div className="text-white px-4 py-2 rounded-lg">
            <img src={nodejsImage} alt="Tailwind CSS" className="h-10 w-10" />
          </div>
          <div className="text-white px-4 py-2 rounded-lg">
            <img
              src={postgresqlImage}
              alt="Tailwind CSS"
              className="h-10 w-10"
            />
          </div>
          <div className="text-white px-4 py-2 rounded-lg">
            <img src={mongoImage} alt="Tailwind CSS" className="h-10 w-10" />
          </div>
          <div className="text-white px-4 py-2 rounded-lg">
            <img src={gitImage} alt="Tailwind CSS" className="h-10 w-10" />
          </div>
        </Marquee>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
        >
          View Projects
        </motion.a>
        <a
          href="#contact"
          className="px-8 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
