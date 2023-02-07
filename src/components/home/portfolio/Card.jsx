import Link from "next/link";

const Card = ({ project, image }) => {
  return (
    <div className="w-full bg-white shadow-sm rounded-xl border border-slate-300 overflow-hidden">
      <div className="w-full bg-slate-100 aspect-video">
        {image && (
          <img
            src={image.sourceUrl}
            alt=" "
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="p-4 relative flex flex-col justify-between">
        <div className="w-12 h-12 shadow-lg rounded-full absolute -top-6 bg-white flex items-center justify-center overflow-hidden">
          {/* <Image
            // src={proj.img} alt={proj.name}
            alt=" "
            className="h-6 w-auto"
          /> */}
        </div>
        <div>
          <h3 className="text-slate-800 text-xl font-extrabold md:mb-2 mb-1 mt-4 capitalize">
            {project.title}
          </h3>
          <p className="text-slate-500 line-clamp-2">
            {project.project.introduction}
          </p>
        </div>
        <div>
          <Link
            href={`${project.uri}`}
            className="w-full sm:w-auto flex justify-center items-center border border-slate-300 bg-white shadow-sm rounded-lg text-slate-800 font-semibold transition gap-2 text-sm leading-6 hover:bg-slate-50 hover:border-slate-400 py-2 px-4 sm:inline-flex mt-6 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
