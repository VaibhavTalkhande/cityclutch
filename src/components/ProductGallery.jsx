import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/logo3.jpeg";
import p2 from "../assets/logo3.jpeg";
import p3 from "../assets/logo3.jpeg";

export default function ProductGallery() {
  const products = [
    { src: p1, title: "CityClutch – Intelligent Drive System" },
    { src: p2, title: "Clutch Sensor Integration Unit" },
    { src: p3, title: "Auto Clutch Control Module" },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black text-gray-300 py-24 px-6 sm:px-10 md:px-20"
    >
      {/* ✨ Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[200px] rounded-full"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          Product Gallery
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A closer look at the innovation behind{" "}
          <span className="text-yellow-500 font-semibold">CityClutch</span>.  
          Designed for performance, durability, and a next-gen driving experience.
        </p>
      </motion.div>

      {/* Product Grid */}
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
        className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{
              scale: 1.04,
              y: -6,
              boxShadow: "0 15px 40px rgba(234,179,8,0.2)",
            }}
            className="relative group rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500/40 transition-all duration-500 bg-gray-900/60 backdrop-blur-md"
          >
            {/* Product Image */}
            <img
              src={product.src}
              alt={product.title}
              className="w-full h-full object-contain rounded-3xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl flex flex-col justify-end p-6">
              <h3 className="text-lg font-semibold text-yellow-500">
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Premium build, precision-engineered components, and smart integration.
              </p>
            </div>

            {/* Floating Light Glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(234,179,8,0)",
                  "0 0 25px rgba(234,179,8,0.1)",
                  "0 0 0 rgba(234,179,8,0)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5,
              }}
              className="absolute inset-0 rounded-3xl"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
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
