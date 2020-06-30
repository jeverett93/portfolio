import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import tech_stack from '../tech_stack.json';

function Tech() {
    const [flip, setFlip] = useState(false)

    const handleClick = e => {
        e.preventDefault()
        console.log("clicked:", e.target,"----", flip)
        setFlip(!flip);
    }

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="card" onClick={handleClick}>
                        <div className="img-container">
                    <img alt="front-end" src={tech_stack.image} />
                </div>
                <p>See the backend</p>
            </div>

            <div className="card" onClick={handleClick}>
                        <div className="img-container">
                    <img alt="back-end" src={tech_stack.image} />
                </div>
                <p>See the frontend</p>
            </div>
        </ReactCardFlip>
    )
}

export default Tech