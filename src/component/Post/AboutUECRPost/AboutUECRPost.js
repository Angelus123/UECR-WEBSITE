import React from 'react'
import uecr from'../../../assets/Bible1.png'
import './AboutUECRPost.css'

const AboutUECRPost = (props) => {

    console.log('--post',props)
    const MAX_LENGTH = 40;
    const { title } = props;

    return(

<div className="item item--6" >
      <div  className="itema2">    
        <h3>UECR</h3>
        <hr color="lightgray" />
            
        <article  onClick ={props.clicked}>
        <h1 >{title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
            <img src={uecr} alt="" srcSet=""className="img0" />
        </div>
      

    </div>
    )
}
export default AboutUECRPost 