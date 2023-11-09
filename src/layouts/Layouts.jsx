import React from 'react'
import Routers from '../Router/Routers'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layouts() {
  return (
    <div>
      <Header/>
         <Routers/>
        <Footer />
    </div>
  )
}

export default Layouts