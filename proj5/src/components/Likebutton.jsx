import './Likebutton.css'
import { useState } from 'react';

export default function Likebutton(){
    let [like, setLike] = useState("#fff");

    function changeColor(){
        if(like==="#fff"){
            setLike("red");
        }else{
            setLike("#fff");
        }
    }

    return(
        <>
            <div className="Likebutton">
                <button className="like" onClick={changeColor} style={{backgroundColor:like}}></button>    
            </div>        
        </>
    )
}