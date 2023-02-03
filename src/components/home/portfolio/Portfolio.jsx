import Card from "./Card";

const Portfolio = ({ projects }) => {
  return (
    <div
      className="bg-slate-50 overflow-hidden md:py-20 py-14 relative"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center text-center container m-auto">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 md:text-4xl max-w-3xl mb-4 capitalize">
            A bit of my Recent Work
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:pt-10 pt-6 gap-8 relative">
          {projects &&
            projects.map((project) => (
              <Card project={project} key={project.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
