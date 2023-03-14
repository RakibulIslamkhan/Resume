/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import gsap from 'gsap';
const navigation = [
  { name: "About", href: "#about" },
  // { name: "Technology", href: "#technology"},
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();

  useImperativeHandle(ref, () => {               
    // return our API
    return {
      moveTo(x, y) {
        gsap.to(el.current, { x, y, delay });
      }
    };
  }, [delay]);
  
  return <div className={`circle ${size} sm:hidden md:hidden`} ref={el}></div>;
})
export default function Navigation() {
  const circleRefs = useRef([]);
  // reset on re-renders
  circleRefs.current = [];
  
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2));
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    window.addEventListener("pointermove", onMove);
    
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  
  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref);
    }    
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);
  useEffect(() => setMounted(true), []);
  const themeToggle = () => {
    if (!mounted) return null;
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <header className="bg-[rgba(10, 25, 47, 0.85)] fixed top-0 w-full z-50 backdrop-blur border-b border-[#acacac36] dark:bg-white dark:border-white">
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
      <div className="px-6 py-4 mt-2 lg:px-12">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 sm:h-8 w-auto"
                src={currentTheme === "light" ? "/logo-dark.png" : "/logo-light.png"}
                alt=""
              />
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:flex gap-5">
              {currentTheme === "dark" ? (
                <MoonIcon
                  className="h-6 w-6 text-black  cursor-pointer"
                  onClick={themeToggle}
                />
              ) : (
                <SunIcon
                  className="h-6 w-6 text-gray-400 cursor-pointer"
                  onClick={themeToggle}
                />
              )}
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 dark:text-black"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex gap-6 sm:hidden items-center">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  before={`0${index + 1}.`}
                  className="text-sm font-semibold leading-6 text-white hover:text-purple-600 before:content-[attr(before)] before:font-mono before:mr-2 before:text-purple-600 transition ease-in delay-50 duration-300 dark:text-black"
                >
                  {item.name}
                </a>
              ))}
              {currentTheme === "dark" ? (
                <MoonIcon
                  className="h-6 w-6 text-black  cursor-pointer"
                  onClick={themeToggle}
                />
              ) : (
                <SunIcon
                  className="h-6 w-6 text-gray-400 cursor-pointer"
                  onClick={themeToggle}
                />
              )}
            </div>
            <div className="sm:hidden flex-1 ml-6 md:justify-end">
              <a
                href="https://drive.google.com/file/d/1rNNGcqWRt7vkqyUhGWxbvIrr7DcFWQPa/view?usp=share_link"
                target={"_blank"}
                className="text-sm font-semibold leading-6 text-white dark:text-black px-4 py-2 border border-gray-500 rounded-lg"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0a192f] px-6 py-6 sm:ring-1 sm:ring-gray-900/10 dark:border-white dark:bg-white">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                className="h-12 sm:h-8 w-auto"
                src={currentTheme === "light" ? "/logo-dark.png" : "/logo-light.png"}
                alt=""
              />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div>
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-[#495670] dark:text-black text-center"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1rNNGcqWRt7vkqyUhGWxbvIrr7DcFWQPa/view?usp=share_link"
                    target={"_blank"}
                    className="text-sm font-semibold leading-6 text-white dark:text-black px-4 py-2 border border-gray-500 rounded-lg w-full text-center"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
}
