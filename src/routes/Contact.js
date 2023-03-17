import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Myimage2 from '../components/Myimage2'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Myimage2 heading="Contact me"
      text="Lets have a chat.."/>
      <Footer/>
    </div>
  )
}

export default Contact