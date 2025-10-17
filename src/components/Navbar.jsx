import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo1.jpeg";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const productsRef = useRef(null);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Prevent mobile scroll
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setIsMobileProductsOpen(false);
  };

  const productCategories = [
    { name: "CityClutch iMT", href: "#features" },
    { name: "Installation Kit", href: "#installation" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="4TEL’S Logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#features" className="hover:text-yellow-400 transition">Features</a>

          {/* Dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              CityClutch
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isProductsOpen ? "rotate-180 text-yellow-400" : ""
                }`}
              />
            </button>

            {isProductsOpen && (
              <div className="absolute left-0 mt-3 bg-gray-900/95 border border-gray-700 rounded-xl shadow-lg p-4 z-50 min-w-[200px]">
                {productCategories.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-yellow-500/10 hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#projects" className="hover:text-yellow-400 transition">Our Product</a>
          <a href="#installation" className="hover:text-yellow-400 transition">Installation</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu (Full Screen, Scroll Locked) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg text-gray-200 z-40 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center p-5 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
          <button onClick={closeMenu}>
            <X className="w-7 h-7 text-gray-300" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col gap-6 p-8 text-lg font-medium h-[calc(100vh-80px)] overflow-y-auto">
          <a href="#home" onClick={closeMenu} className="hover:text-yellow-400">Home</a>
          <a href="#features" onClick={closeMenu} className="hover:text-yellow-400">Features</a>

          {/* Products Accordion */}
          <div>
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="flex items-center justify-between w-full hover:text-yellow-400"
            >
              CityClutch
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isMobileProductsOpen ? "rotate-180 text-yellow-400" : ""
                }`}
              />
            </button>

            {isMobileProductsOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-gray-700 pl-4">
                {productCategories.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-sm text-gray-400 hover:text-yellow-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#projects" onClick={closeMenu} className="hover:text-yellow-400">Our Projects</a>
          <a href="#installation" onClick={closeMenu} className="hover:text-yellow-400">Installation</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-yellow-400">Contact</a>

          {/* Footer Text */}
          <div className="mt-auto text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} 4TEL’S Automation</p>
            <p className="text-yellow-500 mt-1">Drive Smarter, Live Smarter ⚙️</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
