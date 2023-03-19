import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Myimage2 from '../components/Myimage2'
import PricingCards from '../components/PricingCards'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Myimage2 heading="My Projects"
      text="Some of my recent works"/>
      <Work/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project