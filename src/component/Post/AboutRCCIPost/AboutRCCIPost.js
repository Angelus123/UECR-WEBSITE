import React from 'react'
import charis from'../../../assets/CHARIS.png'
import './AboutRCCIPost.css'

const AboutRCCIPost = (props) => {

    console.log('--post',props)
    const MAX_LENGTH = 40;
    const { title } = props;

    return(

<div className="item item--6" >
      <div  className="itema2">    
        <h3>CHARIS</h3>
        <hr color="lightgray" />
            
        <article  onClick ={props.clicked}>
        <h1 >{title}</h1>
        <div className="Info">
        <img src={charis} alt="" srcSet=""className="img0" />
        </div>
        <div className="Author"><i>Author: </i>{props.author}</div>
    </article>
    
        </div>
      

    </div>
    )
}
export default AboutRCCIPost 