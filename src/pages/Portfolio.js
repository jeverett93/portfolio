// importing required package and components
import React from "react";
import Footer from "../components/Footer"
import About from "../components/About"
import Project from "../components/Project"
import Contact from "../components/Contact"

function Portfolio() {
    return (
        // rendering all components
        <div className="container">
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}

// exporting page to be used in other parts of the application
export default Portfolio
