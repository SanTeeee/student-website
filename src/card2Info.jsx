import React from "react";


function Card2Info(props){
    return (
        <div className="card2Wrapper">
            <div className="cardItself">
                <div className="imageWithIcon">
                    <img src={props.avatar}/>
                    <div className="iconic">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-regular fa-eye"></i>
                    </div>
                </div>
                <span>
                    <p>{props.paragraph}</p>
                    <div>
                    <img src={props.rating}/> 
                    <p>4.9</p>
                    </div>
                    
                </span>
                <h4>{props.h4}</h4>
                <p>{props.desc}</p>
                <div>
                    <i class="fa-solid fa-download"></i>
                    <p>15 Sales</p>

                </div>
                <div className="money">
                    <p>$16.48</p>
                    <p>$6.48</p>
                </div>
                <a href="#">
                    Learn More
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                </a>

            </div>
        </div>
    )
}

export default Card2Info;