import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that displays current weather conditions and forecasts using external APIs with beautiful data visualization.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      link: "#",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white animate-fade-in">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover-lift animate-scale-in group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="h-48 md:h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 md:px-3 py-1 md:py-1 bg-gray-700 text-gray-300 rounded-full text-xs md:text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-block px-3 md:px-4 py-2 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 text-sm md:text-base transform hover:scale-105 hover:-translate-y-1 animate-glow"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
