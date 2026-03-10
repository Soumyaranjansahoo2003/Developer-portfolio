import React from "react";
import { motion } from "framer-motion";
import { Code2, MonitorPlay, Settings, Layers } from "lucide-react";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative w-full py-24 min-h-screen flex items-center bg-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-gray-400 text-lg font-light leading-relaxed"
          >
            <p>
              I am a passionate frontend developer and recent graduate eager to create beautiful user interfaces. With a strong eye for design, I love learning new technologies and bridging the gap between engineering and aesthetics.
            </p>
            <p>
              My goal is to craft highly accessible, fast, and responsive web experiences. I am actively looking for opportunities to grow, contribute to a team, and turn complex ideas into smooth, understandable applications.
            </p>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Status", value: "Fresher", icon: MonitorPlay },
              { label: "Completed Projects", value: "15+", icon: Layers },
              { label: "Core Technologies", value: "React/JS", icon: Code2 },
              { label: "Education", value: "B.Tech", icon: Settings },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="p-6 rounded-2xl bg-surfaceLight/30 border border-white/5 hover:border-primary/50 transition-colors group flex flex-col items-start"
                >
                  <Icon className="text-primary mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
