// importing required package, style file, and Tech component
import React from 'react'
import "../styles/About.css";
import Tech from './Tech'

function About() {
    return (
        <div>
            <div className="row">
                {/* header */}
                <div className="col-12">
                    <div className="heading fixed-top sticky-top">
                        <h1 className="page-title">Josh Everett</h1>
                    </div>
                </div>
            </div>
            {/* Bio */}
            <div className="row">
                <div className="col-12">
                    <p className="bio-text">Web Developer with a background in Social Services and Community Organizing.
                    Graduate of Vanderbilt University
                    with a certificate in Full Stack Web Development. Holding a myriad of experience working with
                    diverse groups of
                    people and aim to leverage that experience to build web and mobile applications that serve a wide
                    swath of
                    people.</p>
                    <p className="bio-text">
                        <a href={require("../assets/resume/JE_WEB_DEV_RESUME.pdf")} target="_blank" rel="noopener noreferrer">View Resume</a>
                    </p>
                </div>
            </div>
            {/* Profile Pic */}
            <div className="row img-row">
                <div className="col-6">
                    <img src={require("../assets/images/profile picture.jpg")} className="profile-img" alt="me"
                    />
                </div>
                {/* Rendering Tech Component */}
                <div className="col-6">
                <Tech/>
                </div>
            </div>
        </div>
    )
}

// exporting component to be used in other parts of the application 
export default About