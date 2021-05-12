import React from 'react'
import snow from'../../../assets/snow.jpg'
import journey from'../../../assets/journey.jpg'
import nightSnow from'../../../assets/nightSnow.jpg'
import river from'../../../assets/river.jpg'
const UECRZone = () => {
    return(
<div className="item item--16">

    <hr />
    <h2>UECR Zone</h2>
    <div className="item-zone">
    <h3>Eastern</h3>
    <img src={nightSnow} alt="" srcset="" width="100%" />
    
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sapiente ex molestiae quam culpa consectetur beatae expedita,
        <a href="http://">More</a>
  
    </div> 
    <div className="item-zone">
        <h3>Western and Norther</h3>
        <img src={snow} alt="" srcset="" width="100%"  />
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            <a href="http://">More</a>  
      
    </div> 

    <div className="item-zone">
        <h3>Southern</h3>
        <img src={journey} alt="" srcset="" width="100%"  />
        
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            <a href="http://">More</a>  
      

    </div> 

    <div className="item-zone">
        <h3>Kigali</h3>
        <img src={river} alt="" srcset="" width="100%"  />
        
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            <a href="http://">More</a>  
       

    </div> 
</div>
)
}
export default UECRZone