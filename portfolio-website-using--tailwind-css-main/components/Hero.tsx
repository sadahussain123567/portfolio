"use client";
import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pt-[120px] sm:pt-[140px]">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-16">
        
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 max-w-[500px] flex-col gap-[1.2rem]"
        >
          <h2 className="text-xl sm:text-2xl">
            Hi, I&apos;m{" "}
            <span className="font-bold text-2xl sm:text-3xl bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text inline-block">
              <Typewriter
                words={["SADDAM HUSSAIN"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-base sm:text-[1.2rem] mt-[10px] leading-relaxed">
            An enthusiastic front-end web developer who is passionate about
            building aesthetically pleasing and user-friendly online
            experiences.
          </p>

          {/* Social Links */}
          <ul className="flex items-center gap-6 sm:gap-8 mt-[10px]">
            <li>
              <Link href="https://www.facebook.com/sadam.jatoi.16503">
                <Facebook className="text-white hover:text-cyan-300" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/saddam-hussain-baa6982b9/">
                <Linkedin className="text-white hover:text-cyan-300" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/sadahussain123567">
                <Github className="text-white hover:text-cyan-300" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Instagram className="text-white hover:text-cyan-300" />
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-6 sm:gap-8 mt-6">
            <button className="px-5 sm:px-6 py-2 rounded-lg text-base sm:text-lg ring-1 ring-gray-200 hover:bg-gray-600 hover:text-black hover:ring-black transition">
              <Link href="/My Resume.pdf">Download CV</Link>
            </button>
            <button className="px-5 sm:px-6 py-2 rounded-lg text-base sm:text-lg ring-1 ring-gray-200 hover:bg-gray-600 hover:text-black hover:ring-black transition">
              <Link href="/about">About Me</Link>
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <div className="flex-1 max-w-[380px] flex justify-center lg:justify-end">
          <Image
            src="/About.png"
            alt="Profile Picture"
            className="rounded-full object-cover"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
