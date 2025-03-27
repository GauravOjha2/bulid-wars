import { useState } from 'react'
import NavBar from './Components/NavBar'
import Herosection from './Components/Herosection'
import AboutSection from './Components/About'
import NextSection from './Components/Section2'

function App() {

  return (
    <>
      <NavBar />
      <Herosection />
      <AboutSection />
      <NextSection />
    </>
  )
}

export default App
