import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-gray-300 py-24 px-6 sm:px-10 md:px-20"
    >
      {/* ✨ Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/10 via-black to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-[200px] rounded-full"></div>

      {/* 🌟 Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute bg-yellow-500/40 rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
            x: [0, Math.random() * 30 - 15, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Text + Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-lg">
            Have questions or want to learn more about{" "}
            <span className="text-yellow-500 font-medium">CityClutch</span>?  
            We’re here to help you experience next-level driving comfort.
          </p>

          <ul className="space-y-5 text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-500" /> info@4telsautomation.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-500" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-500" /> Pune, Maharashtra, India
            </li>
          </ul>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.form
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-gray-900/80 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-800 hover:border-yellow-500/40 transition-all duration-500"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-400">Name</label>
                <motion.input
                  whileFocus={{ borderColor: "#FACC15", scale: 1.01 }}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 text-gray-200 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-400">Email</label>
                <motion.input
                  whileFocus={{ borderColor: "#FACC15", scale: 1.01 }}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 text-gray-200 transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-2 text-gray-400">Message</label>
              <motion.textarea
                whileFocus={{ borderColor: "#FACC15", scale: 1.01 }}
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 text-gray-200 resize-none transition-all duration-300"
              ></motion.textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.07, backgroundColor: "#FACC15" }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-[2px] bg-yellow-500/50 mt-20"
      />
    </section>
  );
}
