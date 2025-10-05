import React from "react";
import { motion } from "framer-motion";
import { Car, Mountain, Route, Settings } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Smooth Gear Shifting",
    desc: "Experience jerk-free, automatic clutch control for a smoother and more comfortable driving experience — perfect for city traffic.",
  },
  {
    icon: Mountain,
    title: "Hill Assist",
    desc: "Climb slopes confidently with automatic hill-hold technology that prevents rollback up to 25° incline.",
  },
  {
    icon: Route,
    title: "Highway Auto Function",
    desc: "Enjoy long drives effortlessly — automatic clutch release ensures seamless gear transitions at higher speeds.",
  },
  {
    icon: Settings,
    title: "Fully External Fitting",
    desc: "No internal modifications required. CityClutch is designed for easy installation across any manual transmission car.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-black text-gray-300 py-24 px-6 sm:px-10 md:px-20"
    >
      {/* Background lighting gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-[200px] rounded-full"></div>

      {/* ✨ Floating Golden Particles */}
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

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          Intelligent Technology, Simplified Driving
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Discover how <span className="text-yellow-500 font-semibold">CityClutch</span> transforms your manual car into an intelligent
          driving companion — blending comfort, performance, and innovation.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              whileHover={{
                scale: 1.06,
                y: -5,
                boxShadow: "0 10px 40px rgba(234,179,8,0.15)",
              }}
              className="group relative bg-gradient-to-b from-gray-900/80 to-gray-950 border border-gray-800 hover:border-yellow-500/40 rounded-3xl p-8 backdrop-blur-lg transition-all duration-500"
            >
              {/* Subtle pulsing light glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(234,179,8,0)",
                    "0 0 25px rgba(234,179,8,0.15)",
                    "0 0 0 rgba(234,179,8,0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute inset-0 rounded-3xl"
              />

              {/* Floating Icon */}
              <motion.div
                whileHover={{ rotate: 8 }}
                className="flex justify-center mb-6 relative z-10"
              >
                <div className="bg-yellow-500/20 p-4 rounded-full group-hover:bg-yellow-500/30 transition">
                  <Icon className="w-10 h-10 text-yellow-500" />
                </div>
              </motion.div>

              <h3 className="text-center text-xl font-semibold mb-3 text-gray-100 group-hover:text-yellow-500 transition">
                {feature.title}
              </h3>
              <p className="text-center text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
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
