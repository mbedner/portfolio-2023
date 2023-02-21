import React from "react";
import { RiMailOpenFill, RiBriefcase4Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero = ({ heading, subheading, bodyText }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const text = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-14 md:py-20 flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex gap-6 max-w-[640px] items-center justify-center text-center container flex-col px-4 sm:px-6 lg:px-0"
      >
        <div className="flex gap-3 flex-col items-center justify-center">
          <motion.span
            className="font-sans font-medium text-indigo-600"
            variants={text}
          >
            {subheading}
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-black font-sans text-slate-800"
            variants={text}
          >
            {heading}
          </motion.h1>
        </div>
        <motion.p className="font-sans text-xl text-slate-500" variants={text}>
          {bodyText}
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-3 w-full flex-col sm:flex-row"
          variants={text}
        >
          <a
            className="w-full sm:w-auto border border-indigo-500 bg-indigo-400 shadow-inset rounded-lg text-white font-semibold transition flex items-center justify-center gap-2 leading-6 hover:bg-indigo-500 hover:border-indigo-600 py-3 px-6 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
            href="mailto:bednermb3420@gmail.com"
          >
            <RiMailOpenFill className="text-indigo-100 text-lg" />
            Contact Me
          </a>
          <a
            className="w-full sm:w-auto border border-slate-300 bg-white shadow-sm rounded-lg text-slate-800 font-semibold transition flex items-center justify-center gap-2 leading-6 hover:bg-slate-50 hover:border-slate-400 py-3 px-6 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
            href="#projects"
          >
            <RiBriefcase4Fill className="text-slate-400 text-lg" />
            See Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
