import React from 'react'
import ulogo from '../../assets/UECRLogo.png'
import {Link} from 'react-router-dom'
import './Logo.css'
const logo = (props) => (
<div className= 'Logo' style={{height:props.height}} onClick={props.close}>
    
    <Link to ="/" > <img src ={ulogo} alt ="UECR Rwanda" /></Link>
   
     

</div>
)
export default logo