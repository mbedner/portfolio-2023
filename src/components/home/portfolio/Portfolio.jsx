import Card from "./Card";
import { motion } from "framer-motion";

const Portfolio = ({ projects, image }) => {
  return (
    <div
      className="bg-slate-50 overflow-hidden md:py-20 py-14 relative"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1,
            delayChildren: 0.75,
          }}
          className="flex justify-center text-center container m-auto"
        >
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl max-w-3xl mb-4 capitalize">
            A bit of my Recent Work
          </h2>
        </motion.div>
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
          className="grid lg:grid-cols-3 sm:grid-cols-2 md:pt-10 pt-6 gap-8 relative"
        >
          {projects &&
            projects.map((project) => (
              <Card
                project={project}
                key={project.id}
                thumbnail={project.project.thumbnail}
                mark={project.project.company.companyMark}
              />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
