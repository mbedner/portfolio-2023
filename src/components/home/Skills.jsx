import { RiPenNibLine, RiLayout3Line, RiFlagLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = ({ skills, skillsCopy }) => {
  return (
    <section className="relative overflow-hidden md:py-20 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
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
          className="flex flex-col text-left md:justify-start container m-auto"
        >
          <div className="md:flex md:flex-1 flex-col md:pb-12 pb-8">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl max-w-3xl mb-4 capitalize">
              {skillsCopy.headline}
            </h2>
            <p className="max-w-3xl text-slate-500">{skillsCopy.bodyText}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.65, delay: 0.2 }}
              className="flex md:flex-col gap-4 flex-1"
            >
              <div className="mt-1 h-14 w-14 shrink-0 bg-white border border-slate-300 shadow-sm md:mb-1 rounded-xl text-indigo-500 flex justify-center items-center text-3xl">
                <RiPenNibLine />
              </div>
              <div className="shrink">
                <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1">
                  {skills.skillHeading1}
                </h3>
                <p className="text-slate-500">{skills.skillBody1}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.65, delay: 0.4 }}
              className="flex md:flex-col gap-4 flex-1"
            >
              <div className="mt-1 h-14 w-14 shrink-0 bg-white border border-slate-300 shadow-sm md:mb-1 rounded-xl text-indigo-500 flex justify-center items-center text-3xl">
                <RiLayout3Line />
              </div>
              <div className="shrink">
                <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1">
                  {skills.skillHeading2}
                </h3>
                <p className="text-slate-500">{skills.skillBody2}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.65, delay: 0.6 }}
              className="flex md:flex-col gap-4 flex-1"
            >
              <div className="mt-1 h-14 w-14 shrink-0 bg-white border border-slate-300 shadow-sm md:mb-1 rounded-xl text-indigo-500 flex justify-center items-center text-3xl">
                <RiFlagLine />
              </div>
              <div className="shrink">
                <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1">
                  {skills.skillHeading3}
                </h3>
                <p className="text-slate-500">{skills.skillBody3}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
