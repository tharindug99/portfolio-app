import React from 'react'
import Myimage from '../components/Myimage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Myimage2 from '../components/Myimage2'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Myimage/>
      <Myimage2 heading="My Projects"
      text="Some of my recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home