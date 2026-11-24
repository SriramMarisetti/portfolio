import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-content">
          <div className="loader-logo">
            <span className="loader-bracket">&lt;</span>
            <span className="loader-name">SM</span>
            <span className="loader-bracket">/&gt;</span>
          </div>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
          <p className="loader-text">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
