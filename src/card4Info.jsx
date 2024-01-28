import React from "react";

function Card4Info(props){
    return (
        <div className="card4Wrapper">
            <img src={props.avatar}/>
           
            <div className="anWrap">
                <p>{props.text}</p>
                <span className="starz">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
                <h3>{props.name}</h3>
                <p>{props.post}</p>
            </div>
        </div>
    )
}

export default Card4Info;