"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  return (
    <header className="border-b border-gray-700 bg-gradient-to-r from-[#083a3e] to-[#06352f] z-50 relative">
      <div className="max-w-screen-xl m-auto p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/favicon.png" alt="logo" width={50} height={50} />
            <span className="font-bold text-white text-xl">SADDAM</span>
          </div>

          {/* Hamburger Menu */}
          <div className="absolute top-7 right-4 sm:hidden z-50">
            <Menu
              onClick={() => setIsActive(!isActive)}
              className="text-white cursor-pointer"
            />
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-14 left-0 w-full bg-gradient-to-r from-[#083a3e] to-[#06352f] sm:hidden z-40"
              >
                <ul className="flex flex-col items-center gap-4 p-6 text-white">
                  <li>
                    <Link
                      href="/"
                      onClick={handleCloseMenu}
                      className="text-[1.2rem] font-extrabold hover:text-cyan-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={handleCloseMenu}
                      className="text-[1.2rem] font-extrabold hover:text-cyan-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={handleCloseMenu}
                      className="text-[1.2rem] font-extrabold hover:text-cyan-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex">
            <ul className="flex justify-between items-center gap-16">
              <li>
                <Link
                  href="/"
                  className="text-white text-[1.2rem] font-medium transform transition-transform duration-200 hover:scale-110 hover:text-cyan-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white text-[1.2rem] font-medium transform transition-transform duration-200 hover:scale-110 hover:text-cyan-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white text-[1.2rem] font-medium transform transition-transform duration-200 hover:scale-110 hover:text-cyan-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
