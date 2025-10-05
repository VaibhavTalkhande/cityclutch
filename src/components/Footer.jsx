import React from "react";
import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo1.jpeg";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 font-sans overflow-hidden">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-transparent"></div>

      <div className="relative z-10 pt-14 px-6 sm:px-10 md:px-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Logo + About */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="4TEL'S Automation Logo" className="h-20 mb-5 object-contain" />
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              <span className="font-semibold text-yellow-500">4TEL’S Automation</span> is revolutionizing the driving
              experience with advanced automotive technology. Our flagship product, 
              <span className="text-yellow-500 font-medium"> CityClutch</span>, brings the comfort of automatic driving 
              to manual transmission cars — smooth, efficient, and smart.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500 relative after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-yellow-400 transition-colors">Features</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="#installation" className="hover:text-yellow-400 transition-colors">Installation</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact + Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-yellow-500 relative after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-yellow-500">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-yellow-500" /> info@4telsautomation.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-yellow-500" /> +91 98765 43210
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-500" /> Pune, Maharashtra, India
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-5 justify-center md:justify-start">
              {[
                { Icon: Linkedin, url: "https://linkedin.com" },
                { Icon: Instagram, url: "https://instagram.com" },
                { Icon: Facebook, url: "https://facebook.com" },
                { Icon: Youtube, url: "https://youtube.com" },
              ].map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-yellow-500/20 hover:bg-yellow-500 hover:text-black transition transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12"></div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto py-5 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-yellow-500">4TEL’S Automation</span>. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a>
            <a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
          </div>

          <div>
            Made with ❤️ by <span className="text-yellow-500 font-semibold">QuickFusion Innovations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
