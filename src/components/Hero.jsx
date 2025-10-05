import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/logo3.jpeg";

export default function Hero() {
  // Parallax scroll effect for the image and glow
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* ✨ Dynamic Gold Glow Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black z-0"
      ></motion.div>

      <motion.div
        style={{ y }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[140px] rounded-full z-0"
      ></motion.div>

      {/* 🌟 Floating Golden Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute bg-yellow-500/40 rounded-full"
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Left: Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 relative z-10 text-center md:text-left"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-yellow-500 mb-6"
        >
          CityClutch <br className="hidden md:block" /> iMT Conversion Device
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0"
        >
          Transform your manual car into a smarter ride. Experience smooth,
          intelligent, and effortless clutch automation for every journey.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#features"
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(234,179,8,0.5)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-yellow-500 text-black font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-yellow-500/30 hover:bg-yellow-400 transition-all"
        >
          Explore Features
        </motion.a>
      </motion.div>

      {/* Right: Product Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="flex-1 mt-12 md:mt-0 relative z-10"
      >
        <div className="relative">
          {/* Image */}
          <motion.img
            src={heroImage}
            alt="CityClutch Device"
            className="rounded-3xl shadow-2xl mx-auto w-[90%] md:w-[85%] border border-yellow-500/20"
            whileHover={{ scale: 1.03, rotate: 0.8 }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating Glow */}
          <div className="absolute -inset-5 bg-yellow-500/10 blur-3xl rounded-3xl -z-10"></div>

          {/* Gradient Reflection */}
          <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent rounded-b-3xl blur-md"></div>

          {/* Moving Gold Streaks (motion lines for dynamic effect) */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-[120px] h-[2px] bg-yellow-500/40 rounded-full"
              style={{ top: `${30 + i * 50}px`, left: `${20 + i * 80}px` }}
              animate={{ x: [0, 400, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1,
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
