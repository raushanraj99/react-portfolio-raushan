import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Skills from '../pages/Skills/Skills'
import Gallery from '../pages/Gallery/Gallery'
import PageNotFound from '../pages/PageNotFound'
import Projects from '../pages/Projects/Projects'

function Routers() {
  return (
    <div>
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/skills" element={<Skills />} />
         {/* <Route path="/gallery" element={<Gallery />} /> */}
         <Route path="/about" element={<About />} />
         <Route path="/Project" element={<Projects />} />
         <Route path='*' element={<PageNotFound/>} />
      </Routes>
   </div>
  )
}

export default Routers