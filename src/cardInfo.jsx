import React from "react";


function CardInfo (props){
    return(
        <div className="cardWrapper">
            <div className="imgWrapper">
                <div className="imgBack"></div>
                <img src={props.icon}/>
            </div>
            <h1>{props.heading}</h1>
            <p>{props.description}</p>

        </div>
    )
}

export default CardInfo;