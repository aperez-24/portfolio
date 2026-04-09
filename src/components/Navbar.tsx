"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["about", "projects", "contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#131318]/90 backdrop-blur-xl border-b border-[#4a4455]/30 shadow-[0_0_30px_rgba(124,58,237,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-[#e4e1e9] hover:text-[#a78bfa] transition-colors"
        >
          Adrián Pérez
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-[#ccc3d8] font-['JetBrains_Mono'] text-sm uppercase tracking-widest hover:text-violet-400 transition-all duration-300"
            >
              {section}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#7c3aed] text-white px-4 py-1.5 rounded-lg font-bold text-sm hover:bg-[#a78bfa] transition-colors"
          >
            Contact me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#e4e1e9]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#131318]/95 backdrop-blur-xl border-t border-[#4a4455]/20 px-8 py-6 flex flex-col gap-6">
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className="text-[#ccc3d8] font-['JetBrains_Mono'] text-sm uppercase tracking-widest hover:text-violet-400 transition-colors"
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}