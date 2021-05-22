import React from 'react'
import back from '../../../assets/journey.jpg'

const UECRNewsPost = (props) => {
    console.log('[NewsPostchecker]', props.title)
    return(
        <div className= "item item--4">
             <br />
  <iframe width="80%" height="auto"
                src="https://www.youtube.com/embed/Odzw6EX2360">
            </iframe>
        <br />
            {props.title}
        <a href="http://">More</a> 
  
            
    </div>
  
    


)
}
export default UECRNewsPost