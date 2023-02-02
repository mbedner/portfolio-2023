import {
  RiMailOpenFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiBriefcase4Fill,
} from "react-icons/ri";

const Footer = ({ heading, bodyText }) => {
  return (
    <footer className="border-t border-slate-200">
      <div className="py-14 md:py-20 container mx-auto max-w-7xl flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 max-w-[640px] items-center justify-center text-center container flex-col">
          <h2 className="text-3xl md:text-4xl font-black font-sans text-slate-800 capitalize">
            {heading}
          </h2>
          <p className="font-sans text-slate-500">{bodyText}</p>

          <div className="mt-8 flex justify-center gap-3 w-full flex-col sm:flex-row">
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
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl py-4 border-t border-slate-200 md:py-6 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-2 leading-6 text-slate-500">
            <p className="font-bold">Mark Bedner</p>
            <span>—</span>
            <p className="text-sm">703.477.2608</p>
          </div>
          <div className="flex gap-1 md:ml-0 -ml-2">
            <a
              className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-1.5 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
              href="https://twitter.com/bedner_mark"
            >
              <RiTwitterFill className="text-slate-400 text-xl" />
            </a>
            <a
              className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-1.5 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
              href="https://www.linkedin.com/in/mark-bedner-12413294/"
            >
              <RiLinkedinBoxFill className="text-slate-400 text-xl" />
            </a>
            <a
              className="border border-transparent rounded-lg text-slate-800 font-semibold transition flex items-center gap-2 text-sm leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-1.5 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
              href="mailto:bednermb3420@gmail.com"
            >
              <RiMailOpenFill className="text-slate-400 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
