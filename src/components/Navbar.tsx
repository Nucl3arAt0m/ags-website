"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "services", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section === "home" ? "top" : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#top", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact Us", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#top" 
          className="flex items-center group transition-transform hover:scale-105"
        >
          <img 
            src="/logo.png" 
            alt="AGS Services Logo" 
            className="h-12 w-auto object-contain rounded-sm"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`relative font-semibold text-sm uppercase tracking-wider transition-colors duration-300 group ${
                activeLink === link.id || (!activeLink && link.id === "home") 
                  ? "text-white" 
                  : scrolled ? "text-soft-blush/80 hover:text-white" : "text-white hover:text-soft-blush"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                activeLink === link.id || (!activeLink && link.id === "home") ? "w-full" : "w-0"
              }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-white" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-dark shadow-2xl flex flex-col py-4 px-6 border-t border-white/10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-4 border-b border-white/5 text-lg font-semibold transition-colors ${
                activeLink === link.id || (!activeLink && link.id === "home") ? "text-white" : "text-soft-blush/70 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
