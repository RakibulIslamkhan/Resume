import React, { useState } from "react";

import { Tab } from "@headlessui/react";
import { Player } from "@lottiefiles/react-lottie-player";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Experience() {
  let [categories] = useState({
    Popcorn: [
      {
        id: 1,
        title: "Frontend Developer",
        company: "@ Popcorn IT",
        date: "September 2022 - January 2023",
        work: [{
          id: 1,
          workText: "I worked on the frontend part of the project using React.js and Material Ui."
        },
        {
          id: 2,
          workText: "I also worked on the HTML, Css, and Javascript part of the project. There have learn a new technology Next Js."
        },
      ],
      companyLink: "https://popcorn.com.bd/",
      },
    ],
    Fiverr: [
      {
        id: 2,
        title: "Web Developer",
        company: "@ Fiverr",
        date: "January 2021 - January 2022",
        work: [{
          id: 1,
          workText: "I worked on the frontend part of the project using React.js, HTML, CSS, and Javascript."
        },
        {
          id: 2,
          workText: "I also worked on the Bootstrap part of the project."
        },
        ],
        companyLink: "https://www.fiverr.com/",
      },
    ],
    // Upwork: [
    //   {
    //     id: 3,
    //     title: "Frontend Developer",
    //     company: "@ Upwork",
    //     date: "December 2022 - Present",
    //     work: [{
    //       id: 1,
    //       workText: "I worked on the frontend part of the project using React.js and Tailwind CSS."
    //     },
    //     {
    //       id: 2,
    //       workText: "I also worked on the database part of the project using MongoDB and Mongoose."
    //     },
    //     ],
    //     companyLink: "https://www.fiverr.com/",
    //   },
    // ],
    SeoClerk: [
      {
        id: 4,
        title: "Content Writer",
        company: "@ SeoClerk",
        date: "March 2021 - Present",
        work: [{
          id: 1,
          workText: "As a content writer, I focused on creating engaging and informative written content for various mediums, such as websites, blogs, social media, and marketing materials. I worked on crafting compelling messages that effectively communicated the brand's voice and values to the target audience."
        },
        {
          id: 2,
          workText: "I used my strong writing skills and knowledge of SEO best practices to create high-quality, keyword-rich content that improved the website's search engine rankings and drove more traffic to the site. Additionally, I continually reviewed and updated existing content to ensure that it remained relevant and up-to-date."
        },
        ],
        companyLink: "https://www.fiverr.com/",
      },
    ],
  });

  return (
    <section id="experience" className="px-40 sm:px-5">
      <h2 className="flex items-center pb-10 text-3xl sm:text-xl font-bold after:relative after:block after:top-px after:w-72 sm:after:w-40 after:h-px after:bg-gray-500 after:ml-4 before:content-['02.'] before:font-serif before:text-3xl before:mr-2 before:font-mono before:text-purple-900 dark:text-gray-900 sm:before:text-xl">
        Experience
      </h2>
      <div className="flex sm:flex-col items-center justify-between">
      <div className="w-full max-w-2xl px-2 py-1 sm:px-0 flex sm:flex-col gap-4 sm:gap-8 relative dark:text-gray-900">
        <Tab.Group>
          <Tab.List className="sm:flex flex flex-col sm:flex-row">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-0.5 text-sm font-medium leading-5 text-gray-500 border-l-2 sm:border-b-2 sm:border-l-0 border-solid border-[#233554] h-10 px-4 hover:bg-[#112240] text-left font-mono relative dark:hover:bg-black dark:hover:text-white", "ring-white ring-opacity-60 focus:text-blue-500 dark:text-gray-900",
                    selected
                      ? 'text-white before:border-l-[3px] sm:before:border-l-[0px] sm:before:border-b-[3px] before:border-solid before:border-purple-600 before:h-full before:absolute before:top-0 sm:before:top-[2px] before:-left-0.5 before:w-1 sm:before:w-full before:z-10 '
                      : 'text-blue-100'
                  )
                }
              >
                <span>{category}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
              >
                {posts.map((post) => (
                  <div key={post.id}>
                    <h3 className="text-gray-300 text-xl mb-2 dark:text-gray-900">
                      <span>{post.title} </span>
                      <a
                        href={post.companyLink}
                        target="_blank"
                        className="text-purple-600 after:w-0 after:h-px after:relative after:block after:border-b after:border-purple-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full inline-block"
                      >
                        {post.company}
                      </a>
                    </h3>
                    <span className="font-mono text-xs">{post.date}</span>
                    <ul className="text-md font-mono mt-5 text-justify">
                    {post?.work?.map((work) => (
                      <li key={work.id} className="relative pl-6 before:text-lg before:leading-5 before:content-['▹'] before:absolute before:text-purple-900 before:left-0 my-4">
                        {work.workText}
                      </li>
                    ))}
                    </ul>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div>
        <Player autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_xvmprung.json"
          style={{ height: "400px", width: "400px",}} />
      </div>
      </div>
    </section>
  );
}
