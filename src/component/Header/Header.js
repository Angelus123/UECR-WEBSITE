import React from 'react'
import {Link} from 'react-router-dom'
const header = () => {
    return(
        <div className="item item--1">

        <div className="subcontainer-1">
         
            <div id="header"  style={{width:'80%'}}>Language</div>

           <div></div>
            <div></div>
            
                <Link to="/register"><div  className="header">Join Us</div></Link>
                <Link to="./login"><div  className="header">Login</div></Link>
         
            

        </div>
    </div>
    )
}
export default header