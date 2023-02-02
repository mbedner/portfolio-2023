import React from "react";

import { RiCheckboxCircleFill, RiStarFill } from "react-icons/ri";

const SingleTestimonial = () => {
  return (
    <div className="w-full p-5 bg-white shadow-sm rounded-xl border border-slate-300 overflow-hidden">
      <p className="font-bold text-slate-800">Person Name</p>
      <p className="text-slate-800 mb-1">Person title</p>
      <div className="flex gap-2 items-center">
        <div className="flex text-yellow-500 text-lg">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>
        <div className="bg-teal-100 px-2 pl-1 rounded-full text-teal-600 font-bold gap-1 inline-flex items-center justify-center">
          <span className="text-sm">
            <RiCheckboxCircleFill />
          </span>
          <span className="text-sm">Former Coworker</span>
        </div>
      </div>
      <p className="text-slate-500 pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default SingleTestimonial;
