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
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode, FaKey } from "react-icons/fa";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  <Card className="relative mx-auto w-full max-w-sm pt-0">
    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
    <img
      src={image}
      alt="Event cover"
      className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
    />
    <CardHeader>
      <CardTitle>
        <a className="flex gap-1 hover:text-blue-500" href={link}>
          {title} <FaExternalLinkAlt size={15} />
        </a>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div>Frontend: </div>
          <div>
            <ul className="flex gap-2">
              {frontendTags.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div>Backend: </div>
          <div>
            <ul className="flex gap-2">
              {backendTags.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CardFooter>
  </Card>
);

const Projects = () => (
  <section
    id="projects"
    className="py-20 my-12 md:my-24 transition-colors duration-300"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-col gap-16">
        <ProjectCard
          title="GenZ Clothing Store"
          description="A full-stack e-commerce application built complete with secure JWT/session authentication, email (OTP) verification, a full cart & wishlist flow, and Razorpay payment integration."
          frontendTags={[
            <SiReact size={20} title="react" />,
            <SiTailwindcss size={20} title="tailwindcss" />,
            <SiFramer size={20} title="framer-motion" />,
          ]}
          backendTags={[
            <SiNodedotjs size={20} color="" title="nodejs" />,
            <SiExpress size={20} title="express" />,
            <SiMongodb size={20} title="mongodb" />,
            <SiSupabase size={20} title="supabase" />,
            "Rest api",
            "jwt-auth",
          ]}
          image={genz}
          link="https://gen-z-clothing-store-six.vercel.app/"
        />
      </div>
    </div>
  </section>
);

export default Projects;
