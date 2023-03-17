import "./PricingCardStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
const PricingCards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
            <p className="BTC">$100</p>
            <p>-3 Pages-</p>
            <p>-Responsive Design-</p>
            <p>-Featured-</p>
          <Link to="/contact"
          className="btn">Purchase Now</Link>  
          
        </div>

        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
            <p className="BTC">$150</p>
            <p>-5 Pages-</p>
            <p>-Responsive Design-</p>
            <p>-Featured-</p>
          <Link to="/contact"
          className="btn">Purchase Now</Link>  
          
        </div>

        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
            <p className="BTC">$200</p>
            <p>-10 Pages-</p>
            <p>-Responsive Design-</p>
            <p>-Featured-</p>
          <Link to="/contact"
          className="btn">Purchase Now</Link>  
          
        </div>
      </div>
    </div>
  )
} 

export default PricingCards