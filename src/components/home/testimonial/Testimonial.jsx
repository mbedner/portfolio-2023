import { motion } from "framer-motion";
import {
  RiMailOpenFill,
  RiStarFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
  return (
    <section className="border-t border-slate-200">
      <div className=" overflow-hidden md:py-20 py-14 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1,
              delayChildren: 0.75,
              delay: 0.25,
            }}
            className="flex lg:justify-between m-auto lg:flex-row flex-col"
          >
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl max-w-3xl mb-4 capitalize">
              What others say about working with me
            </h2>
            <div>
              <a
                className="w-full sm:w-auto border border-slate-300 bg-white shadow-sm rounded-lg text-slate-800 font-semibold transition flex items-center justify-center gap-2 leading-6 hover:bg-slate-50 hover:border-slate-400 py-3 px-6 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
                href="mailto:bednermb3420@gmail.com"
              >
                <RiMailOpenFill className="text-slate-400 text-lg" />
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1,
              delayChildren: 0.75,
              delay: 0.5,
            }}
            className="lg:grid lg:grid-cols-7 gap-12 mt-12"
          >
            <div className="lg:col-span-4 flex items-left flex-col lg:justify-center justify-start lg:mb-0 mb-6 lg:p-0 p-5 bg-white lg:shadow-none shadow-sm lg:rounded-none rounded-xl lg:border-none border border-slate-300">
              <p className="lg:text-xl text-slate-500 lg:pt-0 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="lg:mt-6 lg:order-last order-first">
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
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6">
              <SingleTestimonial />
              <SingleTestimonial />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
