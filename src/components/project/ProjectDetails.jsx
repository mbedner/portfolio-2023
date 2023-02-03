import { motion } from "framer-motion";

const ProjectDetails = ({ challenge, approach, outcome }) => {
  return (
    <section className="bg-white overflow-hidden md:py-20 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.25,
          }}
          className="md:flex-row flex-col-reverse flex justify-center text-left items-center container mx-auto gap-12 md:pb-20 pb-12"
        >
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none w-full">
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg overflow-hidden aspect-video">
              {/* <img
                  src={singleProject.challengeImage.asset.url}
                  alt={singleProject.challengeImage.alt}
                  className="object-cover w-full h-full"
                /> */}
            </div>
          </div>
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-3xl font-black leading-9 tracking-tight text-slate-800 md:text-4xl mb-4 capitalize">
              The challenge
            </h2>
            <p className="text-slate-500">{challenge}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.25,
          }}
          className="md:flex-row flex-col flex justify-center text-left items-center container mx-auto gap-12 md:py-20 py-14"
        >
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-3xl font-black leading-9 tracking-tight text-slate-800 md:text-4xl mb-4 capitalize">
              The approach
            </h2>
            <p className="text-slate-500">{approach}</p>
          </div>
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none w-full">
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg overflow-hidden aspect-video">
              {/* <img
                  src={singleProject.approachImage.asset.url}
                  alt={singleProject.approachImage.alt}
                  className="object-cover w-full h-full"
                /> */}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.25,
          }}
          className="md:flex-row flex-col-reverse flex justify-center text-left items-center container mx-auto gap-12 md:pt-20 pt-12 "
        >
          <div className="md:flex-1 md:flex md:mt-0 items-center justify-center pointer-events-none select-none w-full">
            <div className="w-full border border-slate-300 bg-slate-100 rounded-lg overflow-hidden aspect-video">
              {/* <img
                  src={singleProject.outcomeImage.asset.url}
                  alt={singleProject.outcomeImage.alt}
                  className="object-cover w-full h-full"
                /> */}
            </div>
          </div>
          <div className="flex md:flex-1 flex-col">
            <h2 className="text-3xl font-black leading-9 tracking-tight text-slate-800 md:text-4xl mb-4 capitalize">
              The outcome
            </h2>
            <p className="text-slate-500">{outcome}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
