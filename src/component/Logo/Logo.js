import React from 'react'
import ulogo from '../../assets/UECRLogo.png'
import './Logo.css'
const logo = (props) => (
<div className= 'Logo' style={{height:props.height}}>
    
    <img src ={ulogo} alt ="UECR Rwanda" />
</div>
)
export default logo