import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="w-full bg-blue-600">
        <div className="w-full h-full relative flex items-center justify-center py-24">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
            alt="design"
          />
          <div className="px-6 max-w-4xl relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
              We Make Your Dream Home, A Reality!
            </h1>
            <h2 className="text-lg md:text-2xl font-condensed text-white leading-tight mb-8">
              You would see you Dream Structure realised into a beautiful palace
              that you would ever LOVE.
            </h2>
            <Link
              to="/"
              className="inline-block bg-white font-condensed text-primary py-2 px-5 text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white"
            >
              Find out more
            </Link>
          </div>
        </div>
      </div>
      <div class="w-full px-6 py-12 bg-white">
        <div class="container max-w-4xl mx-auto text-center pb-10">
          <h3 class="text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 mb-12">
            What We Provide
          </h3>
          <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800 mb-8">
            We Construct Innovative Modern Homes, Individual Villa, Apartment
            and others. We strongly believe in Design, Quality & Comfort.
          </p>

          <a href="#" class="bg-black text-white px-4 py-3 no-underline">
            Browse our projects
          </a>
        </div>

        <div class="container max-w-4xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">
          <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800"
              class="w-full h-64 object-cover mb-6"
            />

            <h2 class="text-xl leading-tight mb-2">Architect</h2>
            <p class="mt-3 mx-auto text-sm leading-normal">
              Magnificent constructions that exhibits great look & comfort
            </p>
          </div>

          <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img
              src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800"
              class="w-full h-64 object-cover mb-6"
            />

            <h2 class="text-xl leading-tight mb-2">Builders</h2>
            <p class="mt-3 mx-auto text-sm leading-normal">
              Aesthetic, comfortable and functional homes and apartments
            </p>
          </div>

          <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
              class="w-full h-64 object-cover mb-6"
            />

            <h2 class="text-xl leading-tight mb-2">Consultant</h2>
            <p class="mt-3 mx-auto text-sm leading-normal">
              Solutions relating to constructions and legal compliances.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-10">
        <div className="flex flex-wrap max-w-3xl mx-auto">
          <div className="w-3/12 pr-6">
            <h2 className="sm:text-5xl text-2xl text-gray-900 leading-tight lowercase text-right font-bold">
              About
              <br />
              us
            </h2>
          </div>
          <div className="w-9/12">
            <p className="opacity-75 leading-relaxed mb-8">
              Cupidatat non sed exercitation deserunt nisi dolor in magna
              ullamco aute commodo labore laborum consequat laboris ut minim ad
              in non anim. Cupidatat non sed exercitation deserunt nisi dolor in
              magna ullamco aute commodo labore.
            </p>
            <Link
              to="/"
              className="bg-gray-900 text-white uppercase font-sans text-xs px-4 py-3"
            >
              Learn more{" "}
              <i className="ml-1 fa fa-chevron-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
