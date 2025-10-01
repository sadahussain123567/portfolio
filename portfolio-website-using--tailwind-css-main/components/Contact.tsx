"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full w-full px-4 pt-[80px] sm:pt-[120px] pb-12">
      {/* Heading */}
      <h1 className="font-bold text-[2rem] sm:text-[2.5rem] bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text mb-6 text-center">
        Contact Form
      </h1>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-4 p-4 sm:p-6 ring-2 rounded-[10px] ring-gray-600 w-full max-w-2xl"
      >
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 text-[1rem] bg-transparent ring-1 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 text-[1rem] bg-transparent ring-1 rounded-lg w-full"
          />
        </div>

        {/* Message */}
        <textarea
          rows={5}
          placeholder="Enter Your Message"
          className="p-3 text-[1rem] bg-transparent ring-1 rounded-lg"
        ></textarea>

        {/* Button */}
        <div className="flex justify-center items-center">
          <button className="px-6 py-2 ring-2 ring-gray-700 rounded-xl text-lg hover:bg-[#21a392] hover:text-white transition">
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
