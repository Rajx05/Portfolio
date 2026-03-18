import React from 'react';

const ProjectCard = ({ title, description, tags }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center text-blue-600 dark:text-blue-400">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm font-medium rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
        <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="E-commerce Platform" 
          description="A fully responsive modern shopping experience built with React and Tailwind."
          tags={['React', 'Tailwind', 'Node.js']}
        />
        <ProjectCard 
          title="Task Management System" 
          description="A productivity tool focused on seamless workflow and team collaboration."
          tags={['TypeScript', 'React', 'Supabase']}
        />
        <ProjectCard 
          title="Weather Analytics Dashboard" 
          description="Real-time data visualization for meteorological patterns worldwide."
          tags={['D3.js', 'React', 'API']}
        />
      </div>
    </div>
  </section>
);

export default Projects;
