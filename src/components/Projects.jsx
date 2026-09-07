import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";
import { FaCode, FaKey } from "react-icons/fa";
import coffeeAndChai from "../assets/projectImages/coffee&Chai.png";
import genz from "../assets/projectImages/GenZ-Store.png";

const tagIcons = {
  React: SiReact,
  tailwindcss: SiTailwindcss,
  "framer-motion": SiFramer,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  "Rest api": FaCode,
  "jwt-auth": FaKey,
  Supabase: SiSupabase,
};

const tagColors = {
  React: "text-[#61DAFB]",
  tailwindcss: "text-[#06B6D4]",
  "framer-motion": "text-[#0055FF]",
  nodejs: "text-[#339933]",
  express: "text-[#ffffff]",
  mongodb: "text-[#47A248]",
  "Rest api": "text-[#009688]",
  "jwt-auth": "text-[#D32F2F]",
  Supabase: "text-[#3FCF8E]",
};

const ProjectCard = ({
  title,
  description,
  frontendTags,
  backendTags,
  image,
  link,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <a href={link}>
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0  duration-300" />
      </div>
    </a>
    <div className="p-8">
      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center text-blue-600 dark:text-blue-400">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="space-y-4">
        {frontendTags.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Frontend
            </p>
            <div className="flex flex-wrap gap-2">
              {frontendTags.map((tag) => {
                const Icon = tagIcons[tag];
                const colorClass = tagColors[tag];
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-white text-sm font-medium rounded-full"
                  >
                    {Icon && <Icon className={`w-4 h-4 ${colorClass}`} />}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        {backendTags.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Backend
            </p>
            <div className="flex flex-wrap gap-2">
              {backendTags.map((tag) => {
                const Icon = tagIcons[tag];
                const colorClass = tagColors[tag];
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-white text-sm font-medium rounded-full"
                  >
                    {Icon && <Icon className={`w-4 h-4 ${colorClass}`} />}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20   transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ProjectCard
          title="GenZ Clothing Store"
          description="A full-stack e-commerce application built complete with secure JWT/session authentication, email (OTP) verification, a full cart & wishlist flow, and Razorpay payment integration."
          frontendTags={["React", "tailwindcss", "framer-motion"]}
          backendTags={["nodejs", "express", "mongodb", "Rest api", "jwt-auth"]}
          image={genz}
          link="https://gen-z-clothing-store-six.vercel.app/"
        />
        <ProjectCard
          title="Authentication System"
          description="A jwt token and session based secure user authentication & authorization system"
          frontendTags={[]}
          backendTags={["nodejs", "express", "mongodb", "Rest api", "jwt-auth"]}
          image={coffeeAndChai}
          link="https://github.com/Rajx05/Authentication-Backend"
        />
      </div>
    </div>
  </section>
);

export default Projects;
