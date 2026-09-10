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
    className="place-self-center pt-10 w-full max-w-6xl max-h-dvh flex mt-15 pb-10 md:pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-1000"
  >
    <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center">
      <div className="mb-6 md:mb-8 flex justify-center">
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
          <img
            src={heroImage}
            alt="Profile"
            className="w-fit h-fit object-cover"
          />
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white transition-colors duration-1000 mb-4 md:mb-6 leading-tight">
        Hi, i am Rajeev
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 transition-colors duration-1000 mb-8 md:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
        I’m a full-stack developer passionate about building fast, scalable web
        applications that solve real-world problems
      </p>
      <div className="flex flex-col">
        <div className="p-2 text-3xl">Stack</div>
        <div className="flex items-center">
          <div className="text-xl lg:text-2xl">
            <h2>Frontend:</h2>
          </div>
          <div className="mx-4 md:hidden">
            <ul>
              <li className="flex">
                <img src={reactImage} alt="github" className="h-6 w-6" />
                <img src={tailwindImage} alt="github" className="h-6 w-6" />
                <img src={githubImage} alt="github" className="h-6 w-6" />
              </li>
            </ul>
          </div>
          <Marquee className={"hidden sm:flex m-4 sm:m-6 "} direction="right">
            <div className="px-4 py-2 rounded-lg">
              <img
                src={reactImage}
                alt="React"
                className="h-6 w-6 sm:h-10 sm:w-10"
              />
            </div>
            <div className="px-4 py-2 rounded-lg">
              <img
                src={tailwindImage}
                alt="Tailwind CSS"
                className="h-6 w-6 sm:h-10 sm:w-10"
              />
            </div>
          </Marquee>
        </div>

        <div className="flex items-center">
          <div className="text-xl sm:text-2xl">
            <h2> Backend: </h2>
          </div>
          <div className="mx-4 md:hidden">
            <ul>
              <li className="flex">
                <img src={nodejsImage} alt="github" className="h-6 w-6" />
                <img src={mongoImage} alt="github" className="h-6 w-6" />
                <img src={gitImage} alt="github" className="h-6 w-6" />
              </li>
            </ul>
          </div>
          <Marquee className={"hidden sm:flex m-4 sm:m-6 "} direction="right">
            <div className="px-4 py-2 rounded-lg">
              <img
                src={nodejsImage}
                alt="Tailwind CSS"
                className="h-6 w-6 sm:h-10 sm:w-10"
              />
            </div>
            <div className="px-4 py-2 rounded-lg">
              <img
                src={postgresqlImage}
                alt="Tailwind CSS"
                className="h-6 w-6 sm:h-10 sm:w-10"
              />
            </div>
            <div className="px-4 py-2 rounded-lg">
              <img
                src={mongoImage}
                alt="Tailwind CSS"
                className="h-6 w-6 sm:h-10 sm:w-10"
              />
            </div>
            <div className="px-4 py-2 rounded-lg">
              <img
                src={gitImage}
                alt="Tailwind CSS"
                className="h-6 w-6 sm:h-10 sm:w-10"
              />
            </div>
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
        >
          View Projects
        </motion.a>
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
