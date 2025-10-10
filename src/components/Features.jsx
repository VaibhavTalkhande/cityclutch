import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const features = [
  {
    icon: "Car",
    title: "Smooth gear shifting & Jerk free driving in Traffic",
    desc: "Automatic Clutch release function above 10kmph of Speed, while Up Shifting Gear 2nd, 3rd.... & above (For Better milage)",
  },
  {
    icon: "Gauge",
    title: "Automatic Clutch release function",
    desc: "Automatically releases clutch above 10kmph during upshifts for better performance & fuel efficiency.",
  },
  {
    icon: "Mountain",
    title: "Hill Assit Feature.",
    desc: "(Can hold upto 20° to 25° of upslope)",
  },
  {
    icon: "Route",
    title: "Highway Automatic quick clutch release function",
    desc: "(to over come the lagging) in fast Drive",
  },
  {
    icon: "Activity",
    title: "Automatic car crawling Function in 1st Gear.",
    desc: "(Just put your car in 1st gear, it’ll Start moveing forward automatically)",
  },
  {
    icon: "Wrench",
    title: "Complete external fitting.",
    desc: "No internal modification required — fully external & easy to install.",
  },
  {
    icon: "Repeat",
    title: "CITYCLUTCH can be Installed in Any type of Manual Transmission cars",
    desc: "Universal compatibility — install CityClutch on any manual vehicle easily.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-black text-gray-300 py-24 px-6 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-[200px] rounded-full"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
          CityClutch Key Features
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Explore the advanced features of{" "}
          <span className="text-yellow-500 font-semibold">CityClutch</span> —
          designed for smoother, smarter, and safer driving.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {features.map((f, idx) => {
          const IconComp = Icons[f.icon] || Icons["Settings"];
          const isLastCard = idx === features.length - 1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 40px rgba(234,179,8,0.2)",
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative bg-gradient-to-b from-gray-900/80 to-gray-950 border border-gray-800 hover:border-yellow-500/40 rounded-3xl p-8 backdrop-blur-lg text-center flex flex-col items-center justify-center transition-all duration-500 w-full max-w-[320px] aspect-square ${
                isLastCard
                  ? "lg:col-span-3 mx-auto" // center align last single card
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="bg-yellow-500/20 p-4 rounded-full mb-5 group-hover:bg-yellow-500/30 transition">
                <IconComp className="w-10 h-10 text-yellow-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-3 group-hover:text-yellow-500 transition">
                {f.title}
              </h3>

              {/* Description */}
              {f.desc && (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

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
