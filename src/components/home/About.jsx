import Image from "next/image";
import { RiLinkedinBoxFill } from "react-icons/ri";
import profImg from "../../../public/assets/home/img-placeholder.png";
import figma from "../../../public/assets/home/tools/figma.png";
import xd from "../../../public/assets/home/tools/xd.png";
import ai from "../../../public/assets/home/tools/ai.png";
import ps from "../../../public/assets/home/tools/ps.png";
import wp from "../../../public/assets/home/tools/wp.png";
import tw from "../../../public/assets/home/tools/tw.png";
import react from "../../../public/assets/home/tools/react.png";

const About = ({ heading, bodyText }) => {
  return (
    <section className="bg-white overflow-hidden md:py-20 py-14" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="md:flex-row flex-col-reverse flex justify-center text-left lg:pt-5 lg:pb-8 items-center container m-auto gap-12">
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none">
            <Image
              alt="profile pic"
              src={profImg}
              className="md:w-5/6 w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl mb-4 capitalize">
              {heading}
            </h2>
            <p className="text-slate-500">{bodyText}</p>
            <div className="flex md:pt-6 gap-2 flex-wrap pt-4">
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <Image src={figma} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <Image src={xd} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <Image src={ai} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <Image src={ps} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <Image src={wp} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <Image src={tw} alt="figma" className="h-6 w-auto" />
              </div>
              <div className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center">
                <Image src={react} alt="figma" className="h-6 w-auto" />
              </div>
            </div>
            <div className="mt-10 flex">
              <a
                className="w-full sm:w-auto border border-indigo-500 bg-indigo-400 shadow-inset rounded-lg text-white font-semibold transition flex items-center justify-center gap-2 leading-6 hover:bg-indigo-500 hover:border-indigo-600 py-3 px-6 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
                href="https://www.linkedin.com/in/mark-bedner-12413294/"
              >
                <RiLinkedinBoxFill className="text-indigo-100 text-lg" />
                My Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
