import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Player } from "@lottiefiles/react-lottie-player";
import FadeIn from "@/components/Animation/FadeIn";

export default function HeroSection() {
  // let mouseX = 0;
  // let mouseY = 0;
  // const cursorRef = useRef(null);
  // useEffect(() => {
  //   gsap.to({}, 0.011, {
  //     repeat: -1,
  //     onComplete: () => {
  //       gsap.killTweensOf(cursorRef.current);
  //     },
  //     onRepeat: () => {
  //       gsap.set(cursorRef.current, {
  //         css: {
  //           left: mouseX,
  //           top: mouseY,
  //         },
  //       });
  //     },
  //   });
  //   const onMouseMove = (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //   };
  //   document.addEventListener("mousemove", onMouseMove);

  //   return () => document.removeEventListener("mousemove", onMouseMove);
  // }, []);
  return (
    <>
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main className="mt-40 sm:mt-28">
        {/* <div
          ref={cursorRef}
          className="fixed pointer-events-none w-10 h-10 rounded-full border-2 border-blue-500 z-50 origin-center transition duration-150 ease-out -ml-5 -mt-5 will-change-transform sm:hidden visible"
        ></div> */}
        <div
          aria-orientation="verticle"
          className="w-10 fixed bottom-0 left-10 sm:hidden visible"
        >
          <ul className="flex flex-col gap-5 items-center after:block after:h-40 after:w-px after:bg-gray-light after:mx-auto after:my-0 dark:text-gray-900 dark:after:bg-black">
            <li className="hover:-translate-y-2 hover:text-purple-900 transition ease-in delay-300 duration-500">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li className="hover:-translate-y-2 hover:text-purple-900 transition ease-in delay-300 duration-500">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
            <li className="hover:-translate-y-2 hover:text-purple-900 transition ease-in delay-300 duration-500">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
            <li className="mb-4 hover:-translate-y-2 hover:text-purple-900 transition ease-in delay-300 duration-500">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-codepen"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                  <line x1="12" y1="2" x2="12" y2="8.5"></line>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div
          aria-orientation="verticle"
          className="w-10 fixed bottom-0 right-10 sm:hidden visible"
        >
          <div className="flex flex-col gap-5 items-center after:block after:h-40 after:w-px after:bg-gray-light after:mx-auto after:my-0 dark:after:bg-black">
            <a
              href="mailto:d.rakibulislamkhan@gmail.com"
              className="write-mode hover:-translate-y-2 hover:text-purple-900 transition ease-in delay-300 duration-500 dark:text-gray-900"
            >
              d.rakibulislamkhan@gmail.com
            </a>
          </div>
        </div>
        <section className="flex px-40 sm:px-5 items-center panel center justify-between">
          <div>
            <div>
              <FadeIn
                vars={{ y: -200, duration: 2, ease: "power2.out", delay: 0.5 }}
              >
                <h3 className="text-2xl sm:text-xl mb-8 text-purple-600">
                  Hi, my name is
                </h3>
              </FadeIn>
            </div>
            <div>
              <FadeIn
                vars={{ y: -200, duration: 3, ease: "power2.out", delay: 1 }}
              >
                <h1 className="text-6xl sm:text-3xl mb-8 font-bold dark:text-gray-900">
                  Rakibul Islam Khan. 
                  {/* <span><svg viewBox="0 0 200 50">
                    <text x="50%" y="35%" dy=".35em" text-anchor="middle">
                      Islam
                    </text>
                  </svg></span>  */}
                </h1>
              </FadeIn>
            </div>
            <div>
              <FadeIn
                vars={{ y: -200, duration: 3, ease: "power2.out", delay: 2 }}
              >
                <h1 className="text-5xl sm:text-3xl font-bold pb-8 text-gray-500 dark:text-gray-500">
                  I build things for the web.
                </h1>
              </FadeIn>
            </div>
            <div>
              <p className="text-lg font-light max-w-xl text-justify mb-12 dark:text-gray-900">
                I&apos;m a frontend developer specializing in crafting engaging
                and user-friendly digital experiences. Currently, I&apos;m
                focused on developing accessible and intuitive products at{" "}
                <a
                  href="https://popcorn.com.bd/"
                  target="_blank"
                  className="text-purple-600 after:w-0 after:h-px after:relative after:block after:border-b after:border-purple-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full inline-block"
                >
                  Popcorn IT
                </a>
                , where we prioritize human-centered design principles.
              </p>
            </div>
            <div className="border border-purple-600 w-40 px-3 py-4 rounded hover:border-purple-900 transition ease-in delay-150 duration-300 dark:text-gray-900">
              <a
                href="/Rakibul Islam Khan CV.pdf"
                download
                className="flex items-center gap-3"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
          <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jjsrh4we.json"
          style={{ height: "400px", width: "400px",}}
        ></Player>
        </div>
        </section>
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_lnnxad6l.json"
          style={{ height: "50px", width: "50px", marginTop: "2rem" }}
        ></Player>
      </main>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
