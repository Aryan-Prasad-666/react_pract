import React from "react";
import './Card.css'

function Card({cardname}){

    return(
        <>
            <div className="Card">
                <h3>{cardname}</h3>
                
            </div>
        </>
    )
}

export default Card