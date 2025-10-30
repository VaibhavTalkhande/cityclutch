import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-gray-300 pt-10 px-5 sm:px-8 md:px-12 lg:px-20"
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

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
        {/* LEFT SECTION: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-500 mb-6 leading-snug">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-10 text-base sm:text-lg leading-relaxed max-w-xl mx-auto sm:mx-0">
            Have questions or want to learn more about{" "}
            <span className="text-yellow-500 font-medium">CityClutch</span>?  
            We’re here to help you experience next-level driving comfort.
          </p>

          {/* Contact List */}
          <ul className="space-y-6 text-gray-300 text-sm sm:text-base">
            {/* Phone */}
            <li className="flex flex-col sm:flex-row sm:items-start sm:gap-3">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2 sm:mb-0">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-yellow-500">Phone:</span>
              </div>
              <a
                href="tel:+917058003780"
                className="hover:text-yellow-400 transition break-all"
              >
                +91 7058003780
              </a>
            </li>

            {/* Email */}
            <li className="flex flex-col sm:flex-row sm:items-start sm:gap-3">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2 sm:mb-0">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-yellow-500">Email:</span>
              </div>
              <a
                href="mailto:info@4telsautomation.com"
                className="hover:text-yellow-400 transition break-all"
              >
                info@4telsautomation.com
              </a>
            </li>

            {/* Manufacturing Address */}
            <li className="flex flex-col sm:flex-row sm:items-start sm:gap-3">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2 sm:mb-0">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-yellow-500">
                  Manufacturing:
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/City+Clutch/@23.252473,72.633006,800m/data=!3m1!1e3!4m6!3m5!1s0x395c2bf5e0456a47:0x6ef3596be8994f4e!8m2!3d23.2524731!4d72.6330063!16s%2Fg%2F11g6x8wrbk?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                B-165, GIDC Electronic Estate,<br />
                Sector 25, Gandhinagar, Gujarat 382016
              </a>
            </li>

            {/* Distributor Address */}
            <li className="flex flex-col sm:flex-row sm:items-start sm:gap-3">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2 sm:mb-0">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-yellow-500">
                  Distributor:
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/4Tels+Modification,+Sitamani+Champa+Road,+KORBA,+CHHATTISGARH,+495678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                4Tels Modification, Sitamani Champa Road,<br />
                Korba, Chhattisgarh – 495678
              </a>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT SECTION: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-full"
        >
          <motion.form
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-gray-900/80 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-800 hover:border-yellow-500/40 transition-all duration-500"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Name
                </label>
                <motion.input
                  whileFocus={{ borderColor: "#FACC15", scale: 1.01 }}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 text-gray-200 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Email
                </label>
                <motion.input
                  whileFocus={{ borderColor: "#FACC15", scale: 1.01 }}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 text-gray-200 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-2 text-gray-400">
                Message
              </label>
              <motion.textarea
                whileFocus={{ borderColor: "#FACC15", scale: 1.01 }}
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 text-gray-200 resize-none transition-all duration-300 text-sm sm:text-base"
              ></motion.textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.07, backgroundColor: "#FACC15" }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 text-sm sm:text-base"
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
        className="h-[2px] bg-yellow-500/50 mt-24"
      />
    </section>
  );
}
