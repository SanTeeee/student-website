import React from "react";
import Card from "./card";
import Practice from "./PracticeAdvice";
import Affordable from "./AffordablePack";
import Card2 from "./card2";
import Watch from "./watch";
import Card3 from "./card3";
import Card4 from "./card4";
import Input from "./input";
import Footer from "./footer";

function App(){
    return (
            <div className="APPP">
                <Practice></Practice>
                <Card></Card>
                <Affordable></Affordable>
                <Practice></Practice>
                <Card2></Card2>
                <Watch></Watch>
                <Card3></Card3>
                <Practice></Practice>
                <Card4></Card4>
                <Practice></Practice>
                <Input></Input>
                <Footer></Footer>
            </div>
        
        )
        
}

export default App;