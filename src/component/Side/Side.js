import React from 'react'
import '../../style/ustyle.css'
import bible from'../../assets/bible.jpg'
import facebook from'../../assets/facebook.png'
import whatsapp from'../../assets/whatsapp.png'
import twitter from'../../assets/twitter.png'
import instagram from'../../assets/instagram.png'
import next from'../../assets/next.png'
import rukara from'../../assets/rukara.jpg'
import rukaraIncide from'../../assets/rukaraInside.jpg'
import journey from'../../assets/journey.jpg'
import saint from'../../assets/Saint.jpg'

const Side= (props) => {
    return(
        <div className="item item--3">
            <div style={{borderRadius: '5px'}}  className="item-side"  >
                <h3>Be a part of us, bonded in Jesus love</h3>
                <hr/>
              
                <button className="RegisterButton"
                onClick = {props.register}>
                Register</button>
                to be a part of us, pray with us, invite us, meet friend, Update,join our
               
                <a href="/"> Events</a> we need u. 
                <button 
                className="LoginButton " 
                onClick = {props.login}>
                Login
                </button> 
                if already have account. 
                <br/> <br/> <br/>
                
                <button>Pray At</button>here you can see day and time our <a href="/"> community</a> pray, so you can pray with us. 
                <button>Events</button> You can see the upcoming events, then by enroll you can join us. <button>Zone</button>|
                <br/><button>Contact us</button>
    
                <img src= {facebook}  alt="" srcSet="" className="contact-icon"/>
            
                <img src={whatsapp} alt="" srcSet=""className="contact-icon"/>
                
                <img src={twitter} alt="" srcSet=""id="contact_icon-blue"/>
    
                <img src={instagram} alt="" srcSet=""className="contact-icon"/>
                <button className="next-button">
                    <img src={next} alt="" srcSet="" className="next-icon"/>
                </button>
        
                
    
                <div  className="itemb">
                
                <h2>Gallery</h2>

                <div className="itemb1"> 
                    <img src={rukara}  alt="" srcSet="" className="Gallery"/>
                </div>

                <div className="itemb1"> 
                    <img src={rukaraIncide} alt="" srcSet=""className="Gallery"/>
                </div>

                <div className="itemb1"> 
                    <img src={journey} alt="" srcSet=""  className="Gallery"/>
                </div>

                <div className="itemb1"> 
                    <img src={saint} alt="" srcSet=""className="Gallery"/>
                </div>

                <div className="itema1">
                    <b>Next>></b>
                </div>
                        
                </div>
                
    
                <div style={{ padding: "13px 10% 0px 15%" }} className="itemb">
                    <img src={journey} alt="" srcSet="" width="100%" style={{  borderRadius: '20'}}  className="itemb"/> 
                    <h3>Heaven</h3>
                    <hr color="red"/>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            <a href="http://">More</a>  
                        </p> 
                </div>

                <div style={{ padding: "13px 10% 0px 15%" }}className="itemb">
                    <div className="itema1">
                        <b>Next>></b>
                    </div>
                </div>              
            </div>
        </div>
    )
}
export default Side