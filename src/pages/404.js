import Banner from "@/components/global/Banner";
import Header from "@/components/global/Header";
import Link from "next/link";
import { RiArrowLeftLine, RiAlertFill } from "react-icons/ri";

export default function FourOhFour() {
  return (
    <>
      <Banner />
      <Header />
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative h-screen flex items-center justify-center">
        <div className="flex gap-12 max-w-[640px] items-center justify-center text-center container flex-col px-4 sm:px-6 lg:px-0 mx-auto -mt-40">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="mt-1 h-16 w-16 shrink-0 bg-indigo-100 border border-indigo-300 shadow-sm md:mb-1 rounded-xl text-indigo-500 flex justify-center items-center text-4xl">
              <RiAlertFill />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-7xl font-black font-sans text-slate-800">
                Uh-Oh
              </h1>
              <p className="font-sans text-xl text-slate-500">
                404 - Page Not Found
              </p>
            </div>
          </div>
          <Link
            className="w-full sm:w-auto border border-indigo-500 bg-indigo-400 shadow-inset rounded-lg text-white font-semibold transition flex items-center justify-center gap-2 leading-6 hover:bg-indigo-500 hover:border-indigo-600 py-3 px-6 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
            href="/"
          >
            <RiArrowLeftLine className="text-indigo-100 text-lg" />
            Take Me Home
          </Link>
        </div>
      </main>
    </>
  );
}
