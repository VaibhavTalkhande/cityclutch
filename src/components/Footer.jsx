import React from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo1.jpeg";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 font-sans overflow-hidden">
      {/* ✨ Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-transparent"></div>

      <div className="relative z-10 pt-14 px-5 sm:px-8 md:px-12 lg:px-20">
        {/* 🌟 Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">
          {/* Column 1: Logo + About */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <img
              src={logo}
              alt="4TEL’S Automation Logo"
              className="h-16 sm:h-20 mb-2 object-contain"
            />
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs sm:max-w-sm">
              <span className="font-semibold text-yellow-500">
                4TEL’S Automation
              </span>{" "}
              revolutionizes driving with advanced automotive technology.
              <span className="text-yellow-500 font-medium"> CityClutch</span>{" "}
              brings the smooth comfort of automatic driving to manual
              transmission cars — intelligent, efficient, and effortless.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h3 className="text-lg font-semibold mb-3 text-yellow-500 relative after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "Features", href: "#features" },
                { name: "Gallery", href: "#gallery" },
                { name: "Installation", href: "#installation" },
                { name: "Contact", href: "#contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info + Socials */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <h3 className="text-lg font-semibold text-yellow-500 mb-3 relative after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-yellow-500">
              Get In Touch
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {/* Email */}
              <li className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <Mail className="w-4 h-4 text-yellow-500 mx-auto sm:mx-0" />
                <a
                  href="mailto:info@4telsautomation.com"
                  className="hover:text-yellow-400 transition break-all"
                >
                  info@4telsautomation.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <Phone className="w-4 h-4 text-yellow-500 mx-auto sm:mx-0" />
                <a
                  href="tel:+917058003780"
                  className="hover:text-yellow-400 transition"
                >
                  +91 7058003780
                </a>
              </li>

              {/* Manufacturing Unit */}
              <li className="flex flex-col sm:flex-row justify-center sm:justify-start gap-2 text-center sm:text-left">
                <MapPin className="w-4 h-4 text-yellow-500 mx-auto sm:mx-0" />
                <a
                  href="https://www.google.com/maps/place/B-165,+GIDC+Electronic+Estate,+Sector+25,+Gandhinagar,+Gujarat+382016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  <span className="text-yellow-500 font-semibold block sm:inline">
                    Manufacturing Unit:
                  </span>{" "}
                  B-165, GIDC Electronic Estate,
                  <br className="sm:hidden" />
                  Sector 25, Gandhinagar, Gujarat 382016
                </a>
              </li>

              {/* Distributor */}
              <li className="flex flex-col sm:flex-row justify-center sm:justify-start gap-2 text-center sm:text-left">
                <MapPin className="w-4 h-4 text-yellow-500 mx-auto sm:mx-0" />
                <a
                  href="https://www.google.com/maps/search/4Tels+Modification,+Sitamani+Champa+Road,+KORBA,+CHHATTISGARH,+495678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  <span className="text-yellow-500 font-semibold block sm:inline">
                    Distributor:
                  </span>{" "}
                  4Tels Modification, Sitamani Champa Road,
                  <br className="sm:hidden" />
                  Korba, Chhattisgarh – 495678
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-5 justify-center sm:justify-start flex-wrap">
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
        <div className="max-w-7xl mx-auto py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs sm:text-sm text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-yellow-500">
              4TEL’S Automation
            </span>
            . All rights reserved.
          </p>

          <p>
            Made with ❤️ by{" "}
            <span className="text-yellow-500 font-semibold">
              QuickFusion Innovations
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
