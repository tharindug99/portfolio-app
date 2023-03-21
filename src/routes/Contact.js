import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Myimage2 from '../components/Myimage2'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Myimage2 heading="Contact me"
      text="Lets have a chat.."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact