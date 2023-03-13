import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="px-40 sm:px-5 py-24">
        <h2 className="flex items-center pb-10 text-3xl sm:text-xl font-bold after:relative after:block after:top-px after:w-72 sm:after:w-40 after:h-px after:bg-gray-500 after:ml-4 before:content-['04.'] before:font-serif before:text-3xl before:mr-2 before:font-mono before:text-purple-900 dark:text-gray-900 sm:before:text-xl">
        Contact
      </h2>
      <div className='text-center dark:text-gray-900'>
      <h3 className='text-5xl font-bold sm:text-2xl'>Get In Touch</h3>
      <p className='max-w-xl my-5 mx-auto'>Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
      <a href="mailto:d.rakibulislamkhan@gmail.com" className='border border-blue-600 px-4 py-3 rounded'>Say Hello</a>
      </div>
    </section>
  )
}
