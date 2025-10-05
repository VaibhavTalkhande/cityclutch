import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGallery from "./components/ProductGallery";
import InstallationDiagram from "./components/InstallationDiagram";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-gray-200 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <InstallationDiagram />
      <ProductGallery />
      <Contact/>
      <Footer />
    </div>
  );
}
