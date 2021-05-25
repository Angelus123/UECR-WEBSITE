import React from 'react'
import back from '../../../assets/journey.jpg'

const UECRNewsPost = (props) => {
    console.log('[NewsPostchecker]', props.title)
    const videoURL="https://www.youtube.com/embed/"+props.videoId
    return(
        <div className = "item item--4">
             <br />
  <iframe width="80%" height="auto"
                src={videoURL}>
            </iframe>
        <br />
            {props.title}
        <a href="http://">More</a> 
  
            
    </div>
  
    


)
}
export default UECRNewsPost