"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger + Close icon
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-gradient-to-r from-[#083a3e] to-[#06352f] text-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between z-50">
      {/* Left - Logo/Name */}
      <div className="flex items-center space-x-2">
        <div className="bg-lime-400 text-black font-bold w-8 h-8 flex items-center justify-center rounded-full">
          S
        </div>
        <span className="font-semibold text-lg">SADDAM HUSSAIN</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        <Link href="/" className="hover:text-lime-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-lime-400 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-lime-400 transition">
          Contact
        </Link>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        {isActive ? (
          <X
            onClick={() => setIsActive(false)}
            className="text-white w-6 h-6 cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setIsActive(true)}
            className="text-white w-6 h-6 cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-[#083a3e] to-[#06352f] rounded-b-2xl shadow-lg md:hidden z-40"
          >
            <ul className="flex flex-col items-center gap-6 p-6 text-white">
              <li>
                <Link
                  href="/"
                  onClick={handleCloseMenu}
                  className="text-[1.1rem] font-bold hover:text-lime-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={handleCloseMenu}
                  className="text-[1.1rem] font-bold hover:text-lime-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={handleCloseMenu}
                  className="text-[1.1rem] font-bold hover:text-lime-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
