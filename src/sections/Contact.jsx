import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const InputField = ({ label, type = "text", name, as = "input" }) => {
    const Component = as;
    return (
      <div className="relative w-full group">
        <Component
          type={type}
          name={name}
          required
          value={formData[name]}
          onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
          rows={as === "textarea" ? 5 : undefined}
          className="w-full bg-surfaceLight/30 border border-white/10 rounded-xl px-4 pt-8 pb-4 text-white text-sm outline-none transition-all duration-300 focus:border-primary/50 focus:bg-surfaceLight/50 focus:ring-1 focus:ring-primary/50 peer placeholder-transparent"
          placeholder={label}
        />
        <label 
          className="absolute left-4 top-4 text-xs text-gray-500 uppercase tracking-wider transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-primary peer-focus:scale-90 peer-focus:font-semibold peer-valid:-translate-y-2 peer-valid:text-gray-400 peer-valid:scale-90"
        >
          {label}
        </label>
      </div>
    );
  };

  return (
    <section id="contact" className="relative w-full py-24 min-h-[80vh] flex items-center bg-black/60">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-outfit font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">
            Let's build <br/> something <span className="text-primary italic">great</span>
          </h2>
          <p className="text-gray-400 font-light text-lg mb-8 max-w-md">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-surfaceLight/30">
                <Send size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Email</p>
                <p className="text-sm font-medium mt-1 hover:text-white transition-colors cursor-pointer">srsoumya5678@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface border border-white/5 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle glow behind form */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] z-0"></div>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col space-y-6">
            <InputField label="Name" name="name" />
            <InputField label="Email Address" type="email" name="email" />
            <InputField label="Message" name="message" as="textarea" />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3 overflow-hidden relative group bg-white text-black transition-all hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </motion.div>
                ) : isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-600"
                  >
                    <CheckCircle2 size={20} />
                    <span>Message Sent!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
