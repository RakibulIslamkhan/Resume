import React from 'react'

export default function Footer() {
  return (
    <footer className='text-center py-5 font-mono text-xs dark:text-gray-900'>
      <span>Designed & Built by </span>
      <span>
        <a href="#" className='text-purple-600 after:w-0 after:h-px after:relative after:block after:border-b after:border-purple-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>@ Rakibul Islam Khan</a>
      </span>
    </footer>
  )
}
