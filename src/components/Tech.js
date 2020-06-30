import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import "../styles/Tech.css";
import tech_stack from '../tech_stack.json';

function Tech() {
    const [flip, setFlip] = useState(false)

    const handleClick = e => {
        e.preventDefault()
        setFlip(!flip);
    }

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="card tech" onClick={handleClick}>
                        <div className="img-container">
                            {tech_stack.filter(elem=> elem.type==="frontend").map(tech => (
                    <img className="stack" alt={tech.type} src={tech.image} />
                    ))}
                </div>
                <p>See my backend stack</p>
            </div>

            <div className="card tech" onClick={handleClick}>
                        <div className="img-container">
                        {tech_stack.filter(elem=> elem.type==="backend").map(tech => (
                          <img className="stack" alt={tech.type} src={tech.image} />
                      ))}
                </div>
                <p>See my frontend stack</p>
            </div>
        </ReactCardFlip>
    )
}

export default Tech