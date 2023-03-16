import "./Footerstyles.css";
import React from 'react';
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome 
                    size={20} 
                    style= {{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>128/255, Samanala Thenna</p>
                        <p>Wateraka, Padukka</p>
                    </div>
                </div>

                <div className="phone">
                    <FaPhone
                    size={18}
                    style={{color:"#fff", marginRight:"2rem"}}/>
                 <div>
                        <p>(+94) 715482499</p>
                        
                    </div>
                </div>

                <div className="email">
                    <FaMailBulk
                    size={18}
                    style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>tharindunirmala99@gmail.com</p>
                        
                    </div>
                </div>

            </div>


            <div className="right">
                <div>
                    <h4>About Me</h4>
                    <p>I am a enthustiastic developer, specialising in React</p>
                </div>

            <div className="social">    
                <div className="facebook">
                    <FaFacebook
                    size={30}
                    style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaInstagram
                    size={30}
                    style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaLinkedin
                    size={30}
                    style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
            </div>

            
            </div>
        </div>
    </div>
  )
}

export default Footer