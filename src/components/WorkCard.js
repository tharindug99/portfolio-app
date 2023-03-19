import "./WorkCardstyles.css"
import { NavLink } from "react-router-dom";
import React from 'react'
import ProjectCardData from "./WorkCardData";

const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="image"></img>
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">
              <p>{props.text}</p>
              <div className="project-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="Url.com" className="btn">Source</NavLink>
              </div>
            </div>
          </div>
  )
}

export default WorkCard