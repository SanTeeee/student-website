import React from "react";
import Card from "./card";
import Practice from "./PracticeAdvice";
import Affordable from "./AffordablePack";
import Card2 from "./card2";
import Watch from "./watch";
import Card3 from "./card3";

function App(){
    return (
            <div>
                <Practice></Practice>
                <Card></Card>
                <Affordable></Affordable>
                <Practice></Practice>
                <Card2></Card2>
                <Watch></Watch>
                <Card3></Card3>
                <Practice></Practice>
            </div>
        
        )
        
}

export default App;