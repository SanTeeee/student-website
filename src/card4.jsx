import React from 'react';
import Card4Info from './card4Info';
import Avatar1 from './testimonial-user-cover-103.png'
import Avatar2 from './testimonial-user-cover-104.png'

function Card4(){
  return (
    <div className='card4Flexer'>
        <Card4Info
            avatar={Avatar1}
            text="Slate helps you see  how many more days 
            you need to work to 
            reach your financial 
            goal for the month 
            and year."
            name="Echeta Mmesoma"
            post="Designer"/>

        <Card4Info
            avatar={Avatar2}
        text="Slate helps you see  how many more days 
        you need to work to 
        reach your financial 
        goal for the month 
        and year."
        name="Regina Miles"
        post="Designer"/>
    </div>
  )
}

export default Card4;