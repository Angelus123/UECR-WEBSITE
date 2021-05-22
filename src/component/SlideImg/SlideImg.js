import React from 'react'
import SlideClick from '../SlideImgClick/SlideImgClick'
import uecrIntro from '../../assets/img/events.png'
import './SlideImg.css'


const Slide = () => {

    const hr = {
        boxShadow: 'float: left',
    }
    return(
        <div className="item item--2">
        
            <div  className ="intro" >
                <h1 style={{fontSize:'36px', color:'white'}}>UECR</h1>
                   <h3 style={{fontSize:'16px',color:'white'}}>Unite des Etudiants Charsmatique au Rwanda</h3>
            <hr color="red" />
         
                <p style={{fontSize:'16px', color:'white'}}> UECR is the Unity of Charsmatique students in Rwanda that was created 2001, It was later 
                    confirmed to be treated as eleventh dioscese in RWANDA
                </p>
                <img src={uecrIntro} alt ="uecr" width="80%" height="250px"/>
             
                </div>

                 <div  className ="vid-versal-today" >
             <h1 style={{fontSize:'36px', color:'white'}}>Verse</h1>

            <h3 style={{fontSize:'16px',color:'white'}}>Daily Reading for Friday, May 21st, 2021</h3>
            
            <hr color="black" />
            <h2><i></i></h2>
                <p style={{fontSize:'16px', color:'white'}}> Reading 1, Acts 25:13-21</p>
                <p style={{fontSize:'16px', color:'white'}}>Responsorial Psalm, Psalms 103:1-2, 11-12, 19-20</p>
                <p style={{fontSize:'16px', color:'white'}}>Gospel, John 21:15-19</p>
            <iframe width="80%" height="250px"
                src="https://www.youtube.com/embed/jSdLG0sHv3g?autoplay=1&mute=0">
            </iframe>
                
                </div>

                <div className="slide-img" >
                    <SlideClick/>
                </div>  
    </div>
    )
}
export default Slide