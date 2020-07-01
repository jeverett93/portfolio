// importing required packages, style file, and json array
import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import "../styles/Tech.css";
import tech_stack from '../tech_stack.json';

function Tech() {
    // setting default state of flip-card to a false boolean
    const [flip, setFlip] = useState(false)

    // on click, the card's state will become the opposite of its previous state
    const handleClick = e => {
        e.preventDefault()
        setFlip(!flip);
    }

    return (
        // card flip component/syntax
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            {/* Front end icons */}
            <div className="card tech" onClick={handleClick}>
                        <div className="img-container">
                            {tech_stack.filter(elem=> elem.type==="frontend").map(tech => (
                    <img className="stack" alt={tech.type} src={require(`../assets/tech_stack/${tech.image}`)} />
                    ))}
                </div>
                <p>Click to see my backend stack</p>
            </div>
            {/* Backend icons */}
            <div className="card tech" onClick={handleClick}>
                        <div className="img-container">
                        {tech_stack.filter(elem=> elem.type==="backend").map(tech => (
                          <img className="stack" alt={tech.type} src={require(`../assets/tech_stack/${tech.image}`)} />
                      ))}
                </div>
                <p>Click to see my frontend stack</p>
            </div>
        </ReactCardFlip>
    )
}

// exporting component to be used in other parts of the application
export default Tech