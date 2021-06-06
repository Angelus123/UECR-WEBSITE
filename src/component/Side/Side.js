import React from 'react'
import './Side.css'
import './zoom.css'
import facebook from'../../assets/facebook.png'
import whatsapp from'../../assets/whatsapp.png'
import twitter from'../../assets/twitter.png'
import instagram from'../../assets/instagram.png'
import rukara from'../../assets/rukara.jpg'
import journey from'../../assets/journey.jpg'
import saint from'../../assets/Saint.jpg'
import { Link } from 'react-router-dom'

const Side= (props) => {
    return(
        <div className="item item--3">
            <div style={{borderRadius: '5px'}}  className="item-side"  >
                <h3>Be a part of us, bonded in Jesus love</h3>
                <hr/>
              
                <button className="button-auth"
                onClick = {props.register}>
                Register</button>
                to be a part of us, pray with us, invite us, meet friend and join our events
                <div style={{textAlign:'left'}}>
                    <button className="button-auth" 
                        onClick = {props.login}>
                        Login
                        </button> 
                if already have account. 
                <br/>
                </div>
    
                 <br/>  
              Contact us
    
                <img src= {facebook}  alt="" srcSet="" className="contact-icon"/>
         
                <img src={whatsapp} alt="" srcSet=""className="contact-icon"/>
                
                <img src={twitter} alt="" srcSet=""id="contact_icon-blue"/>
    
                <img src={instagram} alt="" srcSet=""className="contact-icon"/>

                
                <h2>Gallery</h2>

                <div className="item-gallery "> 
                     <div class="zoom-without-container">
                        <img src={rukara}  alt="" srcSet="" className="Gallery"/>
                     </div>
                    
                </div>
            <div class="item-gallery">
            <div class="zoom-without-container">
                <img src="https://c4.staticflickr.com/8/7114/13963940252_cfa9c53e9a_c.jpg" alt="zoom" />
            </div>
		    </div>
  
              <div className="item-gallery"> 
                    <div className="zoom-without-container"> 
                        <img src={journey} alt="zoom" className="Gallery"/>
                    </div>
                </div>
                        
              
                
    
                <div style={{ padding: "13px 10% 0px 15%" }} className="itemb">
                
                    <h3>Anouncements</h3>
                    <hr color="red"/>
                        <p> 
                            <Link to ="/add-announcements"><button>Add anouncements</button></Link> 
                            <a href="http://">More</a>  
                        </p> 
                </div>

                <div style={{ padding: "13px 10% 0px 15%" }}className="itemb">
                    <div className="itema1">
                      
                    </div>
                </div>              
            </div>
        </div>
    )
}
export default Side