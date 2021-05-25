import React from 'react'
import './UECRZonePost.css'
import Aux from '../../../hoc/Auxi/Auxilliary'
import West from'../../../assets/img/fatima.jpg'
import North from'../../../assets/img/image-1.jpg'
import East from'../../../assets/img/image-5.jpg'
import South from'../../../assets/img/image-4.jpg'
import Kigali from'../../../assets/img/image-6.jpg'
import './UECRZone.css'
const UECRZone = (props) => {
    console.log(props.name)
    let image = null
    if (props.name==="West")
    image = <img  src={West} className ="wgh-item-figure__image" alt="west" />
    else if(props.name==="North")
     image = <img  src={North} className ="wgh-item-figure__image"  alt="North Zone" />
    else if(props.name==="South")
     image = <img  src={South} className ="wgh-item-figure__image" alt="South Zone"  />
    else if(props.name==="East")
     image = <img  src={East} className ="wgh-item-figure__image" alt="East Zone" />
    else
     image = <img  src={Kigali} className ="wgh-item-figure__image" alt="Kigali Zone" />
    return(
    <Aux>
    <h2>{props.name}</h2>
    <div className="item-zone">
       
  <figure className="wgh-slider-item-figure">
              {image}
                <figcaption className="wgh-slider-item-figure__caption"><a href="https://picsum.photos/id/237/480/480">{props.name}</a><span>{props.content}</span></figcaption>
 </figure>
        <a href="http://">More</a>
  
    </div> 
</Aux>
)
}
export default UECRZone