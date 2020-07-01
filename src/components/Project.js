import React from "react";
import "../styles/Project.css";


function Project() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Some Projects I've Done:</h1>
                </div>
            </div>
            <div className="row portfolio-row">
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Directions App</h5>
                        <a href="https://jeverett93.github.io/directions-weather/" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-img" src={require("../assets/images/directionsappimage.jpg")} alt="directions app"
                            />
                        </a>
                        <p className="card-text">An application that allows a user to
                        enter their starting location and destination to generate directions and weather.</p>
                        <a href="https://github.com/jeverett93/directions-weather" target="_blank" rel="noopener noreferrer">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Weather Dashboard</h5>
                        <a href="https://jeverett93.github.io/weatherdashboard/" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-img" src={require("../assets/images/weatherdashboardimage.jpg")} alt="weather dashboard"
                            />
                        </a>
                        <p className="card-text">An application that allows a user to
                        search for a city and get current and future conditions for that city.</p>
                        <a href="https://github.com/jeverett93/weatherdashboard" target="_blank" rel="noopener noreferrer">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">ReadMe Generator - CLI</h5>
                        <img className="portfolio-img" src={require("../assets/images/readmegenimg.jpg")} alt="readme generator"
                        />
                        <p className="card-text">A command line application that allows
                        a user generate a new readme for a project.</p>
                        <a href="https://github.com/jeverett93/readmegenerator" target="_blank" rel="noopener noreferrer">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row portfolio-row">
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Stickler's Paradise</h5>
                        <a href="https://sticklersparadise.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-img" src={require("../assets/images/sticklersparadiseimage.jpg")} alt="stickler's paradise"
                            />
                        </a>
                        <p className="card-text">An application that allows a user to
                        access and create game rules.</p>
                        <a href="https://github.com/jeverett93/rules" target="_blank" rel="noopener noreferrer">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Good Burger</h5>
                        <a href="https://welcometothegoodburger.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-img" src={require("../assets/images/goodburger-icon.png")} alt="welcome to the goodburger"
                            />
                        </a>
                        <p className="card-text">An application that allows users to
                        add, update, and delete burgers they want to eat.</p>
                        <a href="https://github.com/jeverett93/welcometogoodburger" target="_blank" rel="noopener noreferrer">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Note Taker</h5>
                        <a href="https://safe-cliffs-22536.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-img" src={require("../assets/images/notetakerimage.jpg")} alt="note taker app"
                            />
                        </a>
                        <p className="card-text">An application that can be used to
                        write, save, and delete notes.</p>
                        <a href="https://github.com/jeverett93/note-taker" target="_blank" rel="noopener noreferrer">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>To see more projects, visit my <a href="https://github.com/jeverett93" target="_blank" rel="noopener noreferrer">Github</a>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Project