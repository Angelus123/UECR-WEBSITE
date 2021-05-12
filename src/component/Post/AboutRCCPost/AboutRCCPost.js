import React from 'react'
import rcc from'../../../assets/journey.jpg'
import './AboutRCCPost.css'

const AboutRCCPost = (props) => {

    console.log('--post',props)
    const MAX_LENGTH = 40;
    const { title } = props;

    return(

<div className="item item--6" >
      <div  className="item-other">    
        <h3>RCC</h3>
        <hr color="lightgray" />
            
        <article  onClick ={props.clicked}>
        <h1 >{title}</h1>
        <img src={rcc} alt="" srcSet=""className="img0" />
        <div className="Info">
            <div className="Author"><i>Author: </i>{props.author}</div>
        </div>
    </article>
            
        </div>
      

    </div>
    )
}
export default AboutRCCPost