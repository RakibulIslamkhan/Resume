import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 30) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <section id="contact" className="px-40 sm:px-5 py-10 relative">
      <h2 className="flex items-center pb-10 text-3xl sm:text-xl font-bold after:relative after:block after:top-px after:w-72 sm:after:w-40 after:h-px after:bg-gray-500 after:ml-4 before:content-['04.'] before:font-serif before:text-3xl before:mr-2 before:font-mono before:text-purple-900 dark:text-gray-900 sm:before:text-xl">
        Contact
      </h2>
      <div className="text-center dark:text-gray-900">
        <h3 className="text-5xl font-bold sm:text-2xl">Get In Touch</h3>
        <p className="max-w-xl my-5 mx-auto">
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
        <a
          href="mailto:d.rakibulislamkhan@gmail.com"
          className="border border-blue-600 px-4 py-3 rounded"
        >
          Say Hello
        </a>
      </div>
      <button
        id="btn-back-to-top"
        ref={buttonRef}
        className={`fixed bottom-10 right-2 bg-gray-100 dark:bg-gray-900 rounded-full p-1 shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 ease-in-out`}
        style={{ display: showButton ? "block" : "none" }}
        onClick={backToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
          />
        </svg>
      </button>
    </section>
  );
}
