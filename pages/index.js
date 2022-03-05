import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          {/* <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>CMK Construction</title>
          <meta name="description" content="Construction Company" />
        </Head>
      </div>
      <div class="w-full bg-blue-600">
        <div class="w-full h-full relative flex items-center justify-center py-24">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200"
            class="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          />
          <div class="px-6 max-w-4xl relative z-10 text-center">
            <h1 class="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
              Excepteur sint occaecat cupidatat non
            </h1>
            <h2 class="text-lg md:text-2xl font-condensed text-white leading-tight mb-8">
              Pretium quam vulputate dignissim suspendisse in est ante
            </h2>
            <a
              href="#"
              class="inline-block bg-white font-condensed text-primary py-2 px-5 text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
      <div class="w-full py-40">
        <div class="flex flex-wrap max-w-3xl mx-auto">
          <div class="w-3/12 pr-6">
            <h2 class="text-5xl text-gray-900 leading-tight lowercase text-right font-bold">
              About
              <br />
              us
            </h2>
          </div>
          <div class="w-9/12">
            <p class="opacity-75 leading-relaxed mb-8">
              Cupidatat non sed exercitation deserunt nisi dolor in magna
              ullamco aute commodo labore laborum consequat laboris ut minim ad
              in non anim. Cupidatat non sed exercitation deserunt nisi dolor in
              magna ullamco aute commodo labore.
            </p>
            <a
              href="#"
              class="bg-gray-900 text-white uppercase font-sans text-xs px-4 py-3"
            >
              Learn more{" "}
              <i class="ml-1 fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
