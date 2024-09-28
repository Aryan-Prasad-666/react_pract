import React from "react";

function Card(props) {
    return (
        <div className="photocard">
            <h1>Hello i am {props.name}</h1>
            <h3>card {props.age}</h3>
        </div>
    )
}

export default Card