import React from'react'
import './About.css'
const AboutUECRPost = (props) => {

  console.log('--post',props)
  

  return(


    <div  className="itema2">    
      <h3>UECR</h3>
      <hr color="lightgray" />
          
      <div className="item-about">
  
  <hr color="#053d039b"/>
   <div className="text-panel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    <a href="http://">More</a>

        
      </div>
      <div className="Info">
          <div className="Author">{props.author}</div>
      </div>
  
      </div>
    


  )
}
export default AboutUECRPost 