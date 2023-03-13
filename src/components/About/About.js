import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const imgRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 200, },
      { opacity: 1, y: 0, scrollTrigger: { trigger: imgRef.current }, delay: 0.5, duration: 2, ease: "power2.out" }
    );
  }, []);
  return (
    <section id="about" className="px-40 sm:px-5 py-24">
      <h2 className="flex items-center pb-10 text-3xl sm:text-xl font-bold after:relative after:block after:top-px after:w-72 sm:after:w-40 after:h-px after:bg-gray-500 after:ml-4 before:content-['01.'] before:font-serif before:text-3xl before:mr-2 before:font-mono before:text-purple-900 dark:text-gray-900 sm:before:text-xl">
        About Me
      </h2>
      <div className="flex items-center gap-8 sm:flex-col">
        <div>
          <p className="font-light max-w-2xl text-justify leading-7 mb-6 dark:text-gray-900">
            I&apos;m Rakibul Islam Khan, a front-end web developer with a
            passion for using my creativity to create new and innovative
            projects. I especially enjoy working with React.js, which allows me
            to bring its ideas to life by creating beautiful user interfaces.
            With the ultimate goal of becoming a full-stack web developer, I am
            dedicated to honing my skills and expanding my knowledge to achieve
            my aspirations.
          </p>
          <p className="mb-6 dark:text-gray-900">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-3 text-md max-w-md font-mono dark:text-gray-900">
            <li className="relative pl-6 before:text-lg before:leading-5 before:content-['▹'] before:absolute before:text-purple-900 before:left-0">
              HTML
            </li>
            <li className="relative pl-6 before:text-lg before:leading-5 before:content-['▹'] before:absolute before:text-purple-900 before:left-0">
              React Js
            </li>
            <li className="relative pl-6 before:text-lg before:leading-5 before:content-['▹'] before:absolute before:text-purple-900 before:left-0">
              CSS
            </li>
            <li className="relative pl-6 before:text-lg before:leading-5 before:content-['▹'] before:absolute before:text-purple-900 before:left-0">
              Next Js
            </li>
            <li className="relative pl-6 before:text-lg before:leading-5 before:content-['▹'] before:absolute before:text-purple-900 before:left-0">
              JavaScript (ES6+)
            </li>
            <li className="relative pl-6 before:text-lg before:leading-5 before:content-['▹'] before:absolute before:text-purple-900 before:left-0">
              Material UI
            </li>
          </ul>
        </div>
        <div className="relative after:border-2 after:border-purple-900 after:absolute after:w-full after:h-full after:top-5 after:left-5 after:-z-10" ref={imgRef}>
          <img
            src="https://i.postimg.cc/4dkB7Hg3/FB-IMG-1628652501140.jpg"
            alt=""
            className="h-80 w-80 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
