import React from 'react'
import Navbar from './Navbar'
import Features from './Features'
import About from './About'
import Footer from './Footer'
import Hero from './Hero'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  )
}

export default Home