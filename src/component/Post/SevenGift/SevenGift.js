import React from 'react'
import bible from'../../../assets/bible.jpg'
import saint from'../../../assets/Saint.jpg'
import snow from'../../../assets/snow.jpg'
import journey from'../../../assets/journey.jpg'
import nightSnow from'../../../assets/nightSnow.jpg'
import river from'../../../assets/river.jpg'
const SevenGift = (props) => {
    return(
  <div className="item-gift" height="250px">
    <hr />
  

  
        <h3>{props.title} </h3>
        <p> {props.title}</p>
        <img src={saint} alt="" srcSet=""style= {{width:"50%",borderRadius:'90%'}} />
        <a href="http://">More</a>        
  

  
    </div>
)
}
export default SevenGift
