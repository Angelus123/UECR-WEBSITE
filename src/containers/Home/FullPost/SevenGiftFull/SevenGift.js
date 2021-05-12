import React from 'react'
import bible from'../../assets/bible.jpg'
import saint from'../../assets/Saint.jpg'
import snow from'../../assets/snow.jpg'
import journey from'../../assets/journey.jpg'
import nightSnow from'../../assets/nightSnow.jpg'
import river from'../../assets/river.jpg'
const SevenGift = () => {
    return(
<div className="item item--12">
    <hr />
    <h2>Gift from God</h2>

    <div className="itemc">
        <h3>Saint today</h3>
        <img src={saint} alt="" srcSet="" width="50%" />
        <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="http://">More</a>  
        </p>
    </div> 

    <div className="itemc">
        <h3>Saint today</h3>
        <img src={snow} alt="" srcSet="" width="50%" /> 
        <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="http://">More</a>  
        </p>

    </div> 
    <div className="itemc">
        <h3>Saint today</h3>
        <img src={nightSnow}alt="" srcSet="" width="50%" />
        <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="http://">More</a>  
        </p>
    </div>
    <div className="itemc">
        <h3>Saint today</h3>
        <img src={river} alt="" srcSet="" width="50%" />       
        <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="http://">More</a> 
        </p> 

    </div>
    <div className="itemc">
        <h3>Saint today</h3>
        <img src={bible} alt="" srcSet="" width="50%" />  
        <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="http://">More</a>  
        </p>
    </div>
        <div className="itemc">
        <h3>Saint today</h3>
        <img src={journey}alt="" srcSet="" width="50%" />
        <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="http://">More</a>  
        </p>
    </div> 

        <div className="itemc">
            <h3>Saint today</h3>
            <img src={snow} alt="" srcSet="" width="50%" />
            <p className="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <a href="http://">More</a>
            </p>
        </div> 
    </div>
)
}
export default SevenGift
