import React from "react";
import heroImage from "../assets/hero.png";
import { motion } from "motion/react";

const Hero = () => (
  <section id="about" className="pt-32 pb-20 px-4 transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 1 },
        }}
        className="mb-8 flex justify-center"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
        Building digital experiences with{" "}
        <span className="text-blue-600 dark:text-blue-400">precision</span> and{" "}
        <span className="text-indigo-600 dark:text-indigo-400">care</span>.
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
        I’m a full-stack developer passionate about building fast, scalable web
        applications that solve real-world problems
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
        >
          View Projects
        </a>
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
