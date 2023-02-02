import React from "react";
import Link from "next/link";

import {
  RiMailOpenFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiArrowLeftLine,
} from "react-icons/ri";

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl py-2 relative">
      <nav className="relative z-10 flex items-center justify-between container m-auto py-1 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-500 border border-transparent rounded-lg transition leading-6 hover:bg-slate-900/[0.01] hover:border-slate-400 py-1.5 px-3 sm:-mx-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
        >
          <RiArrowLeftLine />
          <span className="tracking-tight">Back</span>
        </Link>
        <div className="flex gap-1">
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
      </nav>
    </div>
  );
};

export default Header;
