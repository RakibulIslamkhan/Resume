import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Footer from '@/components/Footer/Footer'
import HeroSection from '@/components/HeroSection/HeroSection'
import Navigation from '@/components/Navigation/Navigation'
import Technology from '@/components/Technology/Technology'
import Work from '@/components/Work/Work'
import React from 'react'


export default function Home() {
  return (
    <>
      <Navigation/>
      <HeroSection/>
      <About/>
      {/* <Technology/> */}
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}
