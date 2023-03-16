import React from 'react'
import NextIcon from '@/icons/next'
import ReactIcon from '@/icons/react'
import TailwindIcon from '@/icons/tailwindIcon'
import JsIcon from '@/icons/jsIcon'
import MuiIcon from '@/icons/muiIcon'
import HtmlIcon from '@/icons/htmlIcon'
import CssIcon from '@/icons/cssIcon'
import FirebaseIcon from '@/icons/firebaseIcon'
import BootstrapIcon from '@/icons/bootstrapIcon'
import FigmaIcon from '@/icons/figmaIcon'

export default function Technology() {
  return (
    <section id="technology" className="px-40 sm:px-5 py-10">
        <h2 className="flex items-center pb-10 text-3xl sm:text-xl font-bold after:relative after:block after:top-px after:w-72 sm:after:w-40 after:h-px after:bg-gray-500 after:ml-4 before:content-['02.'] before:font-serif before:text-3xl before:mr-2 before:font-mono before:text-purple-900 dark:text-gray-900 sm:before:text-xl">
        Technology
      </h2>
      <div className='grid grid-cols-4 items-center gap-4 py-10'>
        <NextIcon/>
        <ReactIcon/>
        <TailwindIcon/>
        <JsIcon/>
        <MuiIcon/>
        <HtmlIcon/>
        <CssIcon/>
        <BootstrapIcon/>
        <FirebaseIcon/>
        <FigmaIcon/>
      </div>
    </section>
  )
}
