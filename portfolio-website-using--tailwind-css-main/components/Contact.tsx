import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full w-full]">
      <h1 className="text-[2.5rem] bg-gradient-to-tl from-[#a5d0d3] to-[#21a392] text-transparent bg-clip-text">
        Contact Form
      </h1>
      <form
        action=""
        className="flex flex-col gap-4 p-[10px] ring-2 rounded-[10px] ring-gray-600"
      >
        <div className="flex flex-col sm:flex-row gap-4 my-[10px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="p-[10px] text-[1rem] bg-transparent ring-1 rounded-lg"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="p-[10px] text-[1rem] bg-transparent ring-1 rounded-lg"
          />
        </div>
        <textarea
          name=""
          id=""
          rows={5}
          placeholder="Enter Your Message"
          className="p-[10px] text-[1rem] bg-transparent ring-1 rounded-lg"
        ></textarea>
        <div className="flex justify-center items-center">
          <button className="p-[10px] ring-2 ring-gray-700 rounded-xl text-lg ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
