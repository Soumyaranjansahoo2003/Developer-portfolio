import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Weather Dashboard App",
    description: "A comprehensive weather forecasting application using the OpenWeather API. Features interactive charts, location-based tracking, and a dynamic UI.",
    tags: ["React", "Chart.js", "TailwindCSS", "API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    repo: "#",
    live: "#",
  },
  {
    title: "E-Commerce Storefront",
    description: "A responsive e-commerce web application featuring a functional shopping cart, product filtering, and a clean, modern user interface.",
    tags: ["React", "JavaScript", "Redux", "CSS"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    repo: "#",
    live: "#",
  },
  {
    title: "Task Management Tool",
    description: "A productivity app with drag-and-drop task boards. Focuses on clean state management, user authentication, and fluid animations.",
    tags: ["React", "Firebase", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
    repo: "#",
    live: "#",
  },
  {
    title: "Personal Blog Platform",
    description: "A full-stack blog allowing users to create, edit, and read articles. Built with markdown support and a dark-mode first design.",
    tags: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    repo: "#",
    live: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-24 min-h-screen bg-black/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 flex flex-col h-full"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-64 overflow-hidden w-full">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:contrast-110"
                />
              </div>

              {/* Content Box */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold font-outfit mb-3">{project.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Butons */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.live} 
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.repo} 
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    <span>View Code</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
