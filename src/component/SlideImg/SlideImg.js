import React from 'react'
import logo from'../../assets/Bible1.png'
import '../../style/ustyle.css'
const Slide = () => {

    const style = {
        backgroundColor: 'rgba(0, 0, 0, 0.726)',
        border: '2px solid #007',
        // padding: '10px 0 5px 0',
        // margin: '10px 0 -5px 0',
        color: 'white',
        padding: '0px 10% 0px 5%',
        // cursor: 'pointer'
    }
    const box = {
        color: 'rgba(255, 1, 200, 0.781)',
    }
    const hr = {
        boxShadow: 'float: left',
    }
    return(
        <div className="item item--2">
       
        <img className="mySlides" src={logo} alt="logo"/> 
     

        
        <div style={style} >
            <h1  style ={box}>Welcome to UECR</h1>
            <hr color="red" width="40%" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente ex molestiae quam culpa consectetur beatae expedita,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente ex molestiae quam culpa consectetur beatae expedita.
                
                </p>
                
         </div>
<hr color="aliceblue"/>
<h2>Unite des Etudiants Charsmatique au Rwanda</h2>
    </div>
    )
}
export default Slide