import Image from "next/image";
import computer from "../../../public/assets/home/computer2.png";
import arrow from "../../../public/assets/home/computer-arrow.png";

const LatestWork = () => {
  return (
    <div className="sm:flex items-center justify-center mx-auto max-w-7xl hidden sm:px-10 lg:px-12 relative">
      <div className="absolute right-24 -top-24 lg:block">
        <p className="text-sm text-indigo-600 relative left-0 top-[10px]">
          My Latest WIP
        </p>
        <Image
          src={arrow}
          alt="decorative arrow"
          className="relative -left-[4.5rem] select-none pointer-events-none"
        />
      </div>
      <Image
        src={computer}
        alt="latest work"
        className="select-none pointer-events-none"
        fetchpriority="high"
      />
    </div>
  );
};

export default LatestWork;
