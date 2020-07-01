import React from 'react'
import "../styles/Contact.css";

function Contact() {
    return (
        <div>
        <div className="row contact-row">
            <div className="col-md-12">
                <h2 className="contact-head">Contact Me</h2>
            </div>
        </div>
        <div className="row icon-row">
            <div className="offset-md-3 col-md-2">
                <a href="https://www.linkedin.com/in/joshua-everett-087a4649/" rel="noopener">
                    <img className="icons" src={require("../assets/images/linkedin-logo-icon.png")} alt="linkedin icon" />
                </a>
            </div>
            <div className="col-md-2">
                <a href="https://github.com/jeverett93" rel="noopener">
                    <img className="icons" src={require("../assets/images/github icon.svg")} alt="github icon" />
                </a>
            </div>
            <div className="col-md-2">
                <a href="mailto:josheverett93@gmail.com" rel="noopener">
                    <img className="icons" src={require("../assets/images/Gmail_logo.jpg")} alt="email icon" />
                </a>
            </div>
        </div>
        </div>
    )
}

export default Contact