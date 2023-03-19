import "./WorkCardstyles.css"
import { NavLink } from "react-router-dom";
import React from 'react'
import proj1 from "../assets/proj1.png";

const WorkCard = () => {
  return (
    <div className="project-card">
            <img src={proj1} alt="image"></img>
            <h2 className="project-title">Admin Dashboard</h2>
            <div className="project-details">
              <p>Project Details</p>
              <div className="project-btns">
                <NavLink to="Url.com" className="btn">View</NavLink>
                <NavLink to="Url.com" className="btn">Source</NavLink>
              </div>
            </div>
          </div>
  )
}

export default WorkCard