import React from "react";


function Card3Info(props){
    return (
        <div className="card3InfoWrapper">
            <div className="loveBackgroundWrapper">
                <i class="fa-solid fa-heart"></i>
            </div>
            <h2>{props.firstHeading}</h2>
            <p className="gray">{props.firstPara}</p>
            <h1>{props.money}
                <p>{props.secPara}</p>
            </h1>
            
            <p>{props.thirdPara}</p>
            <a href="#">
                <button>Try for free</button>
            </a>
            <div className="checkList">
                <span><i class="fa-solid fa-circle-check"></i>
                Unlimited product updates
                </span>

                <span><i class="fa-solid fa-circle-check"></i>
                Unlimited product updates
                </span>

                <span><i class="fa-solid fa-circle-check"></i>
                Unlimited product updates
                </span>

                <span><i class="fa-solid fa-circle-check grey"></i>
                1GB Cloud storage
                </span>

                <span><i class="fa-solid fa-circle-check grey"></i>
                Email and community support
                </span>

                
                
            </div>
            <div className="abs">
                <p>New</p>
            </div>
        </div>
    )
}

export default Card3Info;