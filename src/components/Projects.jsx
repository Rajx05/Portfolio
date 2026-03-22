import React from "react";

const ProjectCard = ({ title, description, tags, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="relative h-48 w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
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
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-white text-sm font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="E-commerce Platform"
          description="A fully responsive modern shopping experience built with React and Tailwind."
          tags={["React", "Tailwind", "Supabase"]}
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        />
        <ProjectCard
          title="Task Management System"
          description="A productivity tool focused on seamless workflow and team collaboration."
          tags={["TypeScript", "React", "Supabase"]}
          image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
        />
        <ProjectCard
          title="Weather Analytics Dashboard"
          description="Real-time data visualization for meteorological patterns worldwide."
          tags={["D3.js", "React", "API"]}
          image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80"
        />
      </div>
    </div>
  </section>
);

export default Projects;
