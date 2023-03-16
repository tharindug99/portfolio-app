import React from 'react'
import { Link } from 'react-router-dom';
import "./Myimage.css"
import IntroImg from "../assets/intro-bg.jpg"


const Myimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="Intro-Background"/>
        </div>

        <div className="Content">
            <p>Hi, I am Tharindu Godage</p>
            <h1>A React Developer</h1>

            <Link to="/project" className="btn">Projects
            </Link>
            <Link to="/contact" className="btn btn-light">Contact
            </Link>
        </div>
    
    </div>
  )
}

export default Myimage