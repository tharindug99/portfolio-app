import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Myimage2 from '../components/Myimage2'
import PricingCards from '../components/PricingCards'
import WorkCard from '../components/WorkCard'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Myimage2 heading="My Projects"
      text="Some of my recent works"/>
      <WorkCard/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project