import React from 'react'
import '../../style/ustyle.css'
import bible from'../../assets/bible.jpg'
import next1 from'../../assets/next1.png'
import book from'../../assets/book.png'
import back from'../../assets/back.png'
const WeekVersel = () => {
    return(
<div className="item item--11">
        <hr/>
        <h2>Versel This week</h2>
    <div className="itema1">
        <b> <img src={back} alt="" srcSet=""/> </b>
    </div> 

    <div className="itema">
        <h3>Yesterday</h3>
        <br/> <br/>
        <img src={book} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}} />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <a href="http://">More</a> 
        </p> 
    </div> 

        <div className="itemal">
        <h3>Today</h3>
        <img src={bible} alt="" srcSet="" width="50%" style={{bordeRadius: '90%'}} />
        
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente ex molestiae quam culpa consectetur beatae expedita,
            <a href="http://">More</a>  
            </p>

        </div>

        <div className="itema">
            <h3>Tommorow</h3>
            <br /> <br />
            <img src={book} alt="" srcSet="" width="50%" style={{bordeRadius: '90%'}} />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="http://">More</a> 
            </p> 
        </div> 

        <div className="itema1">
            <b> <img src={next1}alt="" srcSet="" /> </b>
        </div> 

        <div className="itemavl">
            <h3>Today</h3>

            <img src={bible} alt="" srcSet="" width="7%"  style={{bordeRadius: '90%'}} />
        
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
export default WeekVersel
