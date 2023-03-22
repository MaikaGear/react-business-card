import React from "react"
import photo from "./assets/maika.jpeg"
import {MdEmail} from "react-icons/md"
import {BsLinkedin} from "react-icons/bs"
import "./App.css"



export default function Info(){
    return(
        <div className="info-box">
            <img src={photo} alt="an ai style photo of maika gear" />
            <div className="info-text-box">
                <h2>Maika Gear</h2>
                <h3>Front-end Developer</h3>
                <h4>Rancho Cucamonga, CA</h4>
            </div>
            <div className="info-buttons">
                <a className="btn email-btn" href="mailto:gearmaika@gmail.com" target={"_blank"}><MdEmail size={16} className="button-icon email-icon"/> <span>Email</span></a>
                <a className="btn linkedin-btn" href="https://www.linkedin.com/in/maika-gear-092089216/" target={"_blank"}><BsLinkedin size={15} className="button-icon linkedin-icon"/> <span className="linkedin-text">Linkedin</span></a>
            </div>
        </div>
    )
}
