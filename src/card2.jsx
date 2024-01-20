import React from "react";
import Card2Info from "./card2Info";
import Image1 from "./product-cover-124 sec-.png"
import Image2 from "./product-cover-125 sec-.png"
import Star from "./icon emojione-star.png"


function Card2(){
    return (
        <div className="card2Flexer">

            <Card2Info
                avatar={Image1}
                paragraph="Welcome"
                rating={Star}
                h4="2,769 online courses"
                desc="We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away."
            />
            <Card2Info
                avatar={Image2}
                paragraph="Welcome"
                rating={Star}
                h4="2,769 online courses"
                desc="We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away."
            />
        </div>
    )
}

export default Card2;