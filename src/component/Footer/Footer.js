import React from 'react'
import facebook from'../../assets/facebook.png'
import {Link} from 'react-router-dom'
import whatsapp from'../../assets/whatsapp.png'
import twitter from'../../assets/twitter.png'
import instagram from'../../assets/instagram.png'
import './Footer.css'
const Footer= () => {
    return(
<div class="item item--18">

<div className="footer">
  <Link to="/aboutuecr" > About Us </Link>
  <br/>
  <a href="http://" class="nav">faq</a>
  <br/>
  <a href="http://" class="nav"> Language  </a>
  <br/>
  <a href="http://" class="nav">Anouncement</a>  
</div> 

<div class="footer">
 
  <a href="http://" class="nav">contact</a> 
  <br/>
  <img src={facebook} alt="" srcset="" class="contact-icon" />
       
  <img src={whatsapp} alt="" srcset=""class="contact-icon" />

  <img src={twitter} alt="" srcset=""id="contact_icon-blue"/>

   <img src={instagram} alt="" srcset=""class="contact-icon"/>
</div> 
    
<div class="footer">
  <form action="" method="get">
  <input type="text" name="fullname"  placeholder="Your fullname"  className="footer-box" />
  <input type="email" name="email"  placeholder="E-mail"  className="footer-box"/>
  <br/>
  <button type="submit" class="submit">Subscribe</button>
  </form>
  <br/>

<div class="footer">
(c) UECR Rwanda 2021 All right reserved 
</div> 
         
</div>

</div>

)
}
export default Footer