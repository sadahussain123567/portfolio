"use client";
import React, { useState, useEffect } from "react";
import Skills from "./Skills";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); 
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fullText = `I'm Saddam Hussain, a front-end web developer with a strong interest in making websites that are both aesthetically pleasing and easy to use. I have set out to turn my passion for coding into useful digital solutions. I've developed my HTML, CSS, and JavaScript skills during and after my academic career, with a special interest in frameworks like React.js. My dedication to studying and utilizing the newest web technologies is demonstrated by my projects, which include an intuitive to-do list application, a dynamic weather app, and a responsive calculator. I enjoy challenges that force me to be creative and innovative in my problem-solving. Every project I work on improves my technical skills and reaffirms my commitment to producing clear, effective code that improves user experience. Right now, I'm excited to help.`;

  const shortText = fullText.slice(0, 93) + ".....";

  return (
    <section className="max-w-screen-xl mx-auto px-6 pt-[120px] sm:pt-[140px]">
      {/* Main Flex Row */}
      <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-16">
        
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 max-w-[500px] flex-col gap-[1.2rem]"
        >
          <h2 className="font-bold text-3xl sm:text-[2.5rem] bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
            About
          </h2>

          <p className="text-justify text-base sm:text-[1.2rem] leading-relaxed">
            {isMobile && !showMore ? shortText : fullText}
          </p>

          {isMobile && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600 mt-2 hover:underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}

          {/* Skills Section */}
          <div>
            <h2 className="text-3xl sm:text-[2.5rem] mt-8 bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
              Skills
            </h2>
            <div className="flex items-center justify-center lg:justify-start mt-[10px] flex-wrap gap-6">
              <Skills src="/html.png" />
              <Skills src="/css.png" />
              <Skills src="/js.png" />
              <Skills src="/Typescript.png" />
              <Skills src="/tailwind.png" />
              <Skills src="/React.png" />
              <Skills src="/nextjs.png" />
            </div>
          </div>
        </motion.div>

        {/* Right Image Block */}
        <div className="flex-1 max-w-[380px] flex justify-center lg:justify-end">
          <Image
            src="/image1.png"
            alt="Profile Picture"
            width={380}
            height={380}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
