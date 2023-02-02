import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-300 p-2 text-center text-white flex md:gap-2 items-center justify-center md:flex-row flex-col relative">
      <span className="flex md:gap-2 gap-1">
        <span>👋</span> I'm available for hire. Hit me up if you want to chat!
      </span>
      <a
        href="mailto:bednermb3420@gmail.com"
        className="underline focus:outline-none focus:border-purple-50 focus:ring-4 focus:ring-purple-300 rounded"
      >
        Contact Now
      </a>
    </div>
  );
};

export default Banner;
