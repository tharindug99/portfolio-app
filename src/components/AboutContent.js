import "./AboutComtentstyles.css";
import {Link} from "react-router-dom";
import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.jpg";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I ?</h1>
            <p>I am a react front-end Developer.
                I create responsive secure websites for my clients
            </p>
            <Link to="/contact">
                <button className="btn">
                    Contact
                </button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">

                <div className="img-stack top">
                <img src = {Proj1} className="img" alt="true"/>
                </div>

                <div className="img-stack bottom">
                <img src = {Proj2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent