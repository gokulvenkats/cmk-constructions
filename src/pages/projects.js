import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Projects() {
  return (
    <Layout>
      <Seo title="Projects" />
      <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">
        Our Projects
      </h2>
      {/* <!-- SPACER / --> */}
      <div class="w-full h-12 border-black bg-white flex justify-end">
        <div class="w-64 bg-gray-800"></div>
      </div>
      {/* <!-- / SPACER --> */}
      <div className="w-full flex items-center justify-start relative">
        <div className="w-auto md:w-3/12"></div>

        <div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
          <Link
            to="/"
            className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24"
          >
            <h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">
              The Portfolio
            </h3>
            <p className="text-lg md:text-xl font-serif text-gray-400">
              Completed Builds
            </p>
          </Link>

          <img
            src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=1200"
            className="absolute top-0 left-0 block w-full h-full object-cover"
            alt="project"
            layout="fill"
          />
        </div>

        <div className="w-1/12 absolute top-0 right-0 h-full bg-gray-800"></div>
      </div>
      {/* <!-- SPACER / --> */}
      <div class="w-full h-24 border-black bg-white flex justify-end">
        <div class="w-64 bg-gray-800"></div>
      </div>
      {/* <!-- / SPACER --> */}
      <div class="w-full flex items-center justify-start relative">
        <div class="w-auto md:w-3/12"></div>

        <div class="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
          <a
            href="#"
            class="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24"
          >
            <h3 class="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">
              Our Properies
            </h3>
            <p class="text-lg md:text-xl font-serif text-gray-400">
              Complete Collection
            </p>
          </a>

          <img
            src="https://images.unsplash.com/photo-1545060894-7b45236d00b3?w=1200"
            class="absolute top-0 left-0 block w-full h-full object-cover"
            alt="nxj"
          />
        </div>

        <div class="w-1/12 absolute top-0 right-0 h-full bg-gray-800"></div>
      </div>
    </Layout>
  );
}
