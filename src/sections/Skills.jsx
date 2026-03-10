import React from "react";
import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-24 min-h-[80vh] flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 font-light max-w-2xl mx-auto text-lg">
            Technologies I've been working with seamlessly to build robust digital products.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative flex items-center justify-center p-6 bg-surfaceLight/40 rounded-2xl border border-white/5 overflow-hidden cursor-pointer"
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="flex flex-col items-center gap-3 relative z-10 w-24">
                  <Icon 
                    className="w-12 h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_currentColor]"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
