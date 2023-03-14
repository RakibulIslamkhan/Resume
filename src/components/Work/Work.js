import {
  ArrowTopRightOnSquareIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function Work() {
  return (
    <section id="work" className="px-40 sm:px-5 py-20">
      <h2 className="flex items-center pb-10 text-3xl sm:text-xl font-bold after:relative after:block after:top-px after:w-72 sm:after:w-16 after:h-px after:bg-gray-500 after:ml-4 before:content-['03.'] before:font-serif before:text-3xl before:mr-2 before:font-mono before:text-purple-900 dark:text-gray-900 sm:before:text-xl">
        Some Things I’ve Built
      </h2>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 sm:grid-cols-1 -m-4 gap-4">
          <div className="w-full sm:w-full after:w-0 after:h-px after:relative after:block after:border-t-2 after:border-purple-600 after:transition-all after:duration-1000 after:ease-in-out hover:after:w-full after:top-0">
            <div className="flex relative">
              <Image src="/three-sc.png" alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" width={500} height={500} />
              <div className="px-6 py-8 relative z-10 w-full h-80 bg-[#112240cf] opacity-0 hover:opacity-100 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-purple-600" />
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="font-bold text-lg mb-4">
                  Find your inner peace with yoga
                </h2>
                <p className="leading-relaxed text-sm">
                  a single page application with a dashboard for users to see
                  all. Use technologies like HTML, CSS, Bootstrap, etc. Full
                  mobile responsive.
                </p>
                <div className="font-mono text-xs flex gap-3 mt-4">
                  <span>HTML5</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full after:w-0 after:h-px after:relative after:block after:border-t-2 after:border-purple-600 after:transition-all after:duration-1000 after:ease-in-out hover:after:w-full after:top-0">
            <div className="flex relative">
              <Image src="/one-sc.png" alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" width={500} height={500} />
              <div className="px-6 py-8 relative z-10 w-full h-80 bg-[#112240cf] opacity-0 hover:opacity-100 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-purple-600" />
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="font-bold text-lg mb-4">
                  Experience Adventure in Style with TourX
                </h2>
                <p className="leading-relaxed text-sm">
                  a single page application with a dashboard for users to see
                  all. Use technologies like HTML, CSS, Bootstrap, etc. Full
                  mobile responsive.
                </p>
                <div className="font-mono text-xs flex gap-3 mt-4">
                  <span>React Js</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full after:w-0 after:h-px after:relative after:block after:border-t-2 after:border-purple-600 after:transition-all after:duration-1000 after:ease-in-out hover:after:w-full after:top-0">
            <div className="flex relative">
              <Image src="/two-sc.png" alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" width={500} height={500} />
              <div className="px-6 py-8 relative z-10 w-full h-80 bg-[#112240cf] opacity-0 hover:opacity-100 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-purple-600" />
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="font-bold text-lg mb-4">
                  Feel the Difference with AirMotion
                </h2>
                <p className="leading-relaxed text-sm">
                  a single page application with a dashboard for users to see
                  all. Use technologies like HTML, CSS, Bootstrap, etc. Full
                  mobile responsive.
                </p>
                <div className="font-mono text-xs flex gap-3 mt-4">
                  <span>React Js</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full after:w-0 after:h-px after:relative after:block after:border-t-2 after:border-purple-600 after:transition-all after:duration-1000 after:ease-in-out hover:after:w-full after:top-0">
            <div className="flex relative">
              <Image src="/five-sc.png" alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" width={500} height={500} />
              <div className="px-6 py-8 relative z-10 w-full h-80 bg-[#112240cf] opacity-0 hover:opacity-100 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-purple-600" />
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="font-bold text-lg mb-4">
                  Care that Keeps You Healthy with Medicare
                </h2>
                <p className="leading-relaxed text-sm">
                  a single page application with a dashboard for users to see
                  all. Use technologies like HTML, CSS, Bootstrap, etc. Full
                  mobile responsive.
                </p>
                <div className="font-mono text-xs flex gap-3 mt-4">
                  <span>React Js</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full after:w-0 after:h-px after:relative after:block after:border-t-2 after:border-purple-600 after:transition-all after:duration-1000 after:ease-in-out hover:after:w-full after:top-0">
            <div className="flex relative">
              <Image src="/popcorn.png" alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" width={500} height={500} />
              <div className="px-6 py-8 relative z-10 w-full h-80 bg-[#112240cf] opacity-0 hover:opacity-100 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-purple-600" />
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="font-bold text-lg mb-4">
                  Find your inner peace with yoga
                </h2>
                <p className="leading-relaxed text-sm">
                  a single page application with a dashboard for users to see
                  all. Use technologies like HTML, CSS, Bootstrap, etc. Full
                  mobile responsive.
                </p>
                <div className="font-mono text-xs flex gap-3 mt-4">
                  <span>Next Js</span>
                  <span>Javascript</span>
                  <span>CSS</span>
                  <span>MUI</span>
                  <span>Netlify</span>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full after:w-0 after:h-px after:relative after:block after:border-t-2 after:border-purple-600 after:transition-all after:duration-1000 after:ease-in-out hover:after:w-full after:top-0">
            <div className="flex relative">
              <Image src="/hotelsiteapp.png" alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" width={500} height={500} />
              <div className="px-6 py-8 relative z-10 w-full h-80 bg-[#112240cf] opacity-0 hover:opacity-100 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-purple-600" />
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="font-bold text-lg mb-4">
                  Relax and Recharge with Us at Our Hotel
                </h2>
                <p className="leading-relaxed text-sm">
                  a single page application with a dashboard for users to see
                  all. Use technologies like HTML, CSS, Bootstrap, etc. Full
                  mobile responsive.
                </p>
                <div className="font-mono text-xs flex gap-3 mt-4">
                  <span>React Js</span>
                  <span>CSS</span>
                  <span>MUI</span>
                  <span>Swiper</span>
                  <span>Netlify</span>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
