import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-12 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-2xl font-outfit font-bold tracking-tighter text-white">
            SS<span className="text-primary">.</span>
          </a>
          <p>&copy; {new Date().getFullYear()} Soumya Ranjan Sahoo. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-white transition-colors flex items-center gap-2"
        >
          <span>Back to top</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
