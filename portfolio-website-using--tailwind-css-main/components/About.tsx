import React from "react";
import Skills from "./Skills";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="max-w-screen-xl m-auto p-4">
        <div className="lg:flex-row flex-col flex items-center justify-between mt-2 gap-20">
          <div className="flex-1 flex-col gap-[1.2rem]">
            <h2 className="text-[2.5rem] bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
              About
            </h2>
            <p className="text-justify text-[1.2rem]">
              I&apos;m Saddam Hussain, a front-end web developer with a strong
              interest in making websites that are both aesthetically pleasing
              and easy to use. I have set out to turn my passion for coding into
              useful digital solutions. I&apos;ve developed my HTML, CSS, and
              JavaScript skills during and after my academic career, with a
              special interest in frameworks like React.js. My dedication to
              studying and utilizing the newest web technologies is demonstrated
              by my projects, which include an intuitive to-do list application,
              a dynamic weather app, and a responsive calculator. I enjoy
              challenges that force me to be creative and innovative in my
              problem-solving. Every project I work on improves my technical
              skills and reaffirms my commitment to producing clear, effective
              code that improves user experience. Right now, I&apos;m excited to
              help
            </p>
            <div>
              <h2 className="text-[2.5rem] mt-8 bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
                Skills
              </h2>
              <div className="flex items-center justify-between mt-[10px]">
                <Skills src="/html.png" />
                <Skills src="/css.png" />
                <Skills src="/js.png" />
                <Skills src="/Typescript.png" />
                <Skills src="/tailwind.png" />
                <Skills src="/React.png" />
                <Skills src="/nextjs.png" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/image1.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
