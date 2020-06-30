import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import tech_stack from '../tech_stack.json';

function Tech() {
    const [flip, setFlip] = useState(false)

    const handleClick = e => {
        e.preventDefault()
        setFlip(!flip);
    }

    return (
        <ReactCardFlip flip={flip} flipDirection="horizontal">
            <div className="card">Front
                        <div className="img-container">
                    <img alt="front-end" src={tech_stack.image} />
                </div>
                <button onClick={handleClick}>See the backend</button>
            </div>

            <div className="card" onClick={handleClick}>Back
                        <div className="img-container">
                    <img alt="back-end" src={tech_stack.image} />
                </div>
                <button onClick={handleClick}>See the frontend</button>
            </div>
        </ReactCardFlip>
    )
}

export default Tech