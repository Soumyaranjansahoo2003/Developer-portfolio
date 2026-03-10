import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Tech StartUp",
    year: "2025 - Present",
    description: "Assisting in building responsive web components for the main dashboard. Collaborating with the design and backend teams to implement modern UI features using React and Tailwind CSS.",
  },
  {
    role: "Open for New Opportunities",
    company: "Actively seeking a full-time role",
    year: "2026",
    description: "Continuously building and deploying full-stack MERN applications. Focused on learning scalable architecture, clean code practices, and modern state management.",
  },
  {
    role: "Master of Computer Applications (MCA)",
    company: "United School of Business Management",
    year: "2024 - 2026",
    description: "Studied advanced software engineering, database management systems, and complete MERN stack development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-24 min-h-[80vh] flex items-center bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            My <span className="text-accent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/20 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-background border-4 border-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-white font-outfit">{exp.role}</h3>
                <span className="text-sm font-medium text-accent whitespace-nowrap bg-accent/10 px-3 py-1 rounded-full w-fit">
                  {exp.year}
                </span>
              </div>
              <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h4>
              <p className="text-gray-500 font-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
