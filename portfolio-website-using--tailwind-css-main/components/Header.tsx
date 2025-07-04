"use client";
import React, { useState } from "react";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <header className="border-b border-gray-700 bg-gradient-to-r from-[#083a3e] to-[#06352f] ">
        <div className="max-w-screen-xl m-auto p-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/favicon.png" alt="logo" width={50} height={50} />
              <span className="font-bold">SADDAM</span>
            </div>

            {/* Hamburger Menu */}
            <div className="absolute top-7 right-3 sm:hidden">
              <Menu onClick={() => setIsActive(!isActive)} />
            </div>

            {/* Mobile Menu */}
            {isActive && (
              <div className="absolute top-14 left-0 w-full h-screen   bg-gradient-to-r from-[#083a3e] to-[#06352f] sm:hidden flex items-center justify-center">
                <ul className="flex flex-col items-center  gap-4 p-4 text-white">
                  <li>
                    <Link
                      className="text-white text-[1.2rem] font-extrabold hover:text-xl"
                      href="/"
                      onClick={handleCloseMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white text-[1.2rem] font-extrabold hover:text-xl"
                      href="/about"
                      onClick={handleCloseMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white text-[1.2rem] font-extrabold hover:text-xl"
                      href="/contact"
                      onClick={handleCloseMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden sm:flex">
              <ul className="flex justify-between items-center gap-16">
                <li>
                  <Link
                    className="text-white text-[1.2rem] font-medium hover:text-2xl"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-[1.2rem] font-medium hover:text-2xl"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-[1.2rem] font-medium hover:text-2xl"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
