import React,{ Component } from "react"
import LogoImg from "./job.jpg"
import "./logo.css"

class Logo extends Component{
    render() {
        return<div className="logo-container">
            <img src={LogoImg} alt="logo.png"/>
        </div>
    }
}

export default Logo