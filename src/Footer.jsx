import React from "react"
import "./App.css"
import {AiFillGithub, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai"

export default function Footer(){
    return (
        <div className="footer-box">
            <a href="https://github.com/MaikaGear" target={"_blank"}><AiFillGithub size={50} color="#4ab7e4"/></a>
            <a href="https://www.instagram.com/maikagear/" target={"_blank"}><AiFillInstagram size={52} color="#4ab7e4"/></a>
            <a href="https://twitter.com/MilkityMilkers" target={"_blank"}><AiFillTwitterCircle size={51} color="#4ab7e4"/></a>
        </div>
    )
}