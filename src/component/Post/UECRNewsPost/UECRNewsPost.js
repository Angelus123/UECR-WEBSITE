import React from 'react'
import back from '../../../assets/back.png'
import book from'../../../assets/book.png'
const UECRNewsPost = (props) => {
    return(
<div className= "item item--10">
    <hr/>
    <h2>News</h2>

    <div className="item-news">
        <h3>Rwanda news</h3>
       
        <img src={back} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
        {props.title1}
        <a href="http://">More</a>  
        
    </div>

    <div className="item-news">
        <h3>UECR News </h3>
       
        <img src={book} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
         {props.title1}
        <a href="http://">More</a>  
        
    </div>

    <div className="item-news">
        <h3>Community News</h3>
        <img src={book} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
            {props.title1}
        <a href="http://">More</a>  
        
    </div>
    <div className="item-news">
        <h3>Technology News</h3>
      
        <img src={book} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
        {props.title1}
        <a href="http://">More</a>  
        
    </div>

    <div className="item-news">
        <h3>New Song</h3>
     
        <img src={book} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
         {props.title1}
        <a href="http://">More</a>  
        
    </div>

    <div className="item-news">
        <h3>New film</h3>
       
        <img src={book} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
         {props.title1}
        <a href="http://">More</a>  
        
    </div>

    <div className="item-news">
        <h3>New Tutolias</h3>
      
        <img src={book} alt="" srcSet="" width="50%"  style={{borderRadius: '90%'}}/>
         {props.title1}
        <a href="http://">More</a>  
        
    </div>
  
  
            <div className="more">
            <b>More . . .</b>
            </div>
            
    </div>
  
    


)
}
export default UECRNewsPost