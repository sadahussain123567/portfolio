"use client";
import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="max-w-screen-xl m-auto p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full mt-[60px] gap-20">
          {/* Animated Left Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-1 flex-col gap-[1.2rem]"
          >
            <h2 className="text-2xl">
              Hi, I&apos;m{" "}
              <span className="font-bold text-3xl bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text inline-block">
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

            <p className="text-[1.2rem] mt-[10px]">
              An enthusiastic front-end web developer who is passionate about
              building aesthetically pleasing and user-friendly online
              experiences.
            </p>

            <div>
              <ul className="flex items-center gap-8 mt-[10px]">
                <li>
                  <Link href="https://www.facebook.com/sadam.jatoi.16503">
                    <Facebook className="text-white hover:text-black" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/saddam-hussain-baa6982b9/">
                    <Linkedin className="text-white hover:text-black" />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/sadahussain123567">
                    <Github className="text-white hover:text-black" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Instagram className="text-white hover:text-black" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex gap-8">
              <button className="p-[10px] outline-none ring-1 ring-gray-200 hover:bg-gray-600 hover:text-black hover:ring-black mt-[15px] mr-[10px] rounded-lg text-lg">
                <Link href="/My Resume.pdf">Download CV</Link>
              </button>
              <button className="p-[10px] outline-none ring-1 ring-gray-200 hover:bg-gray-600 hover:text-black hover:ring-black mt-[15px] mr-[10px] rounded-lg text-lg">
                <Link href="/about">About Me</Link>
              </button>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <div className="flex-1 items-center justify-center">
            <Image
              src="/about.png"
              alt="Profile Picture"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
