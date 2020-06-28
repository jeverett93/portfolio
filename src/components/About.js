import React from "react";
import ReactCardFlip from 'react-card-flip';
import "../styles/About.css";

function About() {
   return (
   <div>
        <div className="row">
            <div className="col-12">
                <div className="heading fixed-top sticky-top">
                    <h1 className="page-title">Josh Everett</h1>
                </div>
            </div>
        </div>
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
                    <a href="portfolio\resume\JE_WEB_DEV_RESUME.pdf" rel="noopener">View Resume</a>
                </p>
            </div>
        </div>
        <div className="row img-row">
            
            <div className="col-6 offset-3">
                <img src="portfolio\images\profile picture.jpg" className="profile-img" alt="me"
                />
            </div>
        </div>
    </div>
    )
}

export default About