export default function Projects() {
  return (
    <div className="w-full flex items-center justify-start relative">
      <div className="w-auto md:w-3/12"></div>

      <div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
        <a
          href="#"
          className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24"
        >
          <h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">
            The Portfolio
          </h3>
          <p className="text-lg md:text-xl font-serif text-gray-400">
            Completed Builds
          </p>
        </a>

        <img
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=1200"
          className="absolute top-0 left-0 block w-full h-full object-cover"
          alt="project"
          layout="fill"
        />
      </div>

      <div className="w-1/12 absolute top-0 right-0 h-full bg-gray-800"></div>
    </div>
  );
}
