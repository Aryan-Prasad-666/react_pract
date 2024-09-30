import React, { useState } from "react";
import './card-style.css'

function Card(props){

    return(
        <>
        <button onClick={()=>
            {
                props.change(props.color.toLowerCase());
            }
        }>
            {props.color}
        </button>
        </>
    )
}

export default Card