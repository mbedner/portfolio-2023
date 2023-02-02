import Image from "next/image";
import shadow from "../../../public/assets/home/shadow.png";

const Companies = () => {
  return (
    <div>
      <div className="bg-white py-5 border-t border-b border-r-0 border-l-0 border-slate-200 shadow-[0 1px 3px rgba(15,23,42,0.08)] relative">
        <Image
          alt=""
          src={shadow}
          className="absolute bottom-[-20px] md:left-1/2 md:ml-[-570px] w-[1140px] -z-10 opacity-60 pointer-events-none select-none"
        />
        <div className="relative z-10 flex items-center justify-between container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left md:justify-start m-auto">
          <div className="relative flex items-center justify-between container m-auto text-slate-500 italic">
            <span className="w-40 leading-5 pr-4 border-r border-slate-300">
              A couple of stops in my career
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
