import React from "react";
import { motion } from "framer-motion";
import diagram from "../assets/diagram.jpeg";

export default function InstallationDiagram() {
  return (
    <section
      id="installation"
      className="relative overflow-hidden bg-black pt-10 text-gray-300 px-6 sm:px-10 md:px-20"
    >
      {/* ✨ Golden lighting background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[180px] rounded-full"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          Installation Overview
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Effortless setup, engineered for compatibility. Our fully external
          system integrates seamlessly with your clutch pedal — no internal
          modification needed.
        </p>
      </motion.div>

      {/* Diagram Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Animated glowing border */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(234,179,8,0)",
                "0 0 35px rgba(234,179,8,0.15)",
                "0 0 0 rgba(234,179,8,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl"
          />
          <img
            src={diagram}
            alt="Installation Diagram"
            className="rounded-3xl shadow-2xl border border-gray-800 hover:border-yellow-500/40 transition-all duration-500 w-full"
          />
        </div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-8 max-w-2xl text-center text-base leading-relaxed"
        >
          The installation process is completely <span className="text-yellow-500 font-semibold">external</span>, ensuring your vehicle remains unaltered while adding advanced automation.  
          Simply mount the actuator, connect the control module, and calibrate the clutch sensor — you’re ready to drive smarter.
        </motion.p>
      </motion.div>

      {/* Animated Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-[2px] bg-yellow-500/40 mt-20"
      />
    </section>
  );
}
