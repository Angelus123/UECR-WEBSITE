import React from 'react'
import '../../style/ustyle.css'
// import bible from'../Img/bible.jpg'
import saint from'../../assets/Saint.jpg'
import book from'../../assets/book.png'
const WeekSaint = () => {
    return(
<div className= "item item--10">
    <hr/>
    <h2>Saint This week</h2>
    <div className="itema1">
        <b> <img src="../Img/back.png" alt="" srcSet=""/> </b>
    </div> 

    <div className="itema">
        <h3>Yesterday</h3>
        <br /> <br />
        <img src="../Img/book.png" alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <a href="http://">More</a>  
        </p>
    </div>

    <div className="itemal">
        <h3>Today</h3>
        <img src= {saint} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
    
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sapiente ex molestiae quam culpa consectetur beatae expedita,
            <a href="http://">More</a>  
         </p>
    </div>

    <div className="itema">
        <h3>Tommorow</h3>
        <br/> <br/>
        <img src={book } alt="" srcSet="" width="50%" style={{borderRadius: '90%'}} />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <a href="http://">More</a>  
        </p>
    </div> 

    <div className="itema1">
        <b> <img src="../Img/next1.png" alt="" srcSet=""/> </b>
    </div> 

    <div className="itemavl">
        <h3>Today</h3>

        <img src={saint} alt="" srcSet="" width="7%" style={{borderRadius: '90%'}}/>
        
        <p > Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita
            <a href="http://">More</a>  
            </p>

    </div> 
        
            <div className="itema1">
            <b>Next>></b>
            </div>
            
    </div>
  
    


)
}
export default WeekSaint