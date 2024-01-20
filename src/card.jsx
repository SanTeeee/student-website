import React from "react";
import frame from "./Frame.png";
import xmlid from "./XMLID_307_.png"
import CardInfo from "./cardInfo"
function Card(){
    return(
        <div className="cardInfoWrapper">

            <CardInfo
                icon={frame}
                heading="Expert instruction"
                description="The gradual 
                accumulation and 
                small-scale.."
            />
            <CardInfo
                icon={xmlid}
                heading="Lifetime access"
                description="The gradual 
                accumulation and 
                small-scale.."
            />
        </div>
    )
}export default Card;