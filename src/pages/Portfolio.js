import React from "react";
import Footer from "../components/Footer"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"

function Portfolio() {
    return (
        <div className="container">
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Portfolio
