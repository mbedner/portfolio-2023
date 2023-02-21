import { motion } from "framer-motion";

const Overview = ({ intro, tools }) => {
  return (
    <section className="bg-slate-50 overflow-hidden md:py-20 py-14 relative ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.25,
        }}
        className="md:grid md:grid-cols-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative container md:gap-20 flex flex-col gap-8"
      >
        <div className="col-span-2">
          <div className="border-b border-slate-200 text-slate-500 pb-3 capitalize">
            Tools used on this project
          </div>
          <div className="flex md:pt-6 gap-2 flex-wrap pt-4">
            {tools?.map((tool) => (
              <div
                className="w-12 h-12 shadow rounded-full bg-white border border-slate-200 box-border flex justify-center items-center"
                key={tool.id}
              >
                <img
                  src={tool.sourceUrl}
                  className="h-6 w-auto select-none pointer-events-none"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <h2 className="text-3xl font-black leading-9 tracking-tight text-slate-800 md:text-4xl mb-4 capitalize">
            Project Overview
          </h2>
          <p className="text-slate-500">{intro}</p>
          <div className="w-full border border-slate-300 bg-slate-100 rounded-lg mt-12 overflow-hidden aspect-video">
            {/* <img className="object-cover w-full h-full" /> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Overview;
