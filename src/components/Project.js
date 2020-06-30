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
                        <a href="https://jeverett93.github.io/directions-weather/" rel="noopener">
                            <img className="portfolio-img" src="portfolio\images\directionsappimage.jpg" alt="directions app"
                            />
                        </a>
                        <p className="card-text">An application that allows a user to
                        enter their starting location and destination to generate directions and weather.</p>
                        <a href="https://github.com/jeverett93/directions-weather" rel="noopener">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Weather Dashboard</h5>
                        <a href="https://jeverett93.github.io/weatherdashboard/" rel="noopener">
                            <img className="portfolio-img" src="portfolio\images\weatherdashboardimage.jpg" alt="weather dashboard"
                            />
                        </a>
                        <p className="card-text">An application that allows a user to
                        search for a city and get current and future conditions for that city.</p>
                        <a href="https://github.com/jeverett93/weatherdashboard" rel="noopener">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">ReadMe Generator - CLI</h5>
                        <img className="portfolio-img" src="portfolio\images\readmegenimg.jpg" alt="readme generator"
                        />
                        <p className="card-text">A command line application that allows
                        a user generate a new readme for a project.</p>
                        <a href="https://github.com/jeverett93/readmegenerator" rel="noopener">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row portfolio-row">
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Stickler's Paradise</h5>
                        <a href="https://sticklersparadise.herokuapp.com/" rel="noopener">
                            <img className="portfolio-img" src="portfolio\images\sticklersparadiseimage.jpg" alt="stickler's paradise"
                            />
                        </a>
                        <p className="card-text">An application that allows a user to
                        access and create game rules.</p>
                        <a href="https://github.com/jeverett93/rules" rel="noopener">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Good Burger</h5>
                        <a href="https://welcometothegoodburger.herokuapp.com/" rel="noopener">
                            <img className="portfolio-img" src="portfolio\images\goodburger-icon.png" alt="welcome to the goodburger"
                            />
                        </a>
                        <p className="card-text">An application that allows users to
                        add, update, and delete burgers they want to eat.</p>
                        <a href="https://github.com/jeverett93/welcometogoodburger" rel="noopener">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3 bg-light">
                        <h5 className="card-title">Note Taker</h5>
                        <a href="https://safe-cliffs-22536.herokuapp.com/" rel="noopener">
                            <img className="portfolio-img" src="portfolio\images\notetakerimage.jpg" alt="note taker app"
                            />
                        </a>
                        <p className="card-text">An application that can be used to
                        write, save, and delete notes.</p>
                        <a href="https://github.com/jeverett93/note-taker" rel="noopener">
                            <div>View Code</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>To see more projects, visit my <a href="https://github.com/jeverett93" rel="noopener">Github</a>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Project