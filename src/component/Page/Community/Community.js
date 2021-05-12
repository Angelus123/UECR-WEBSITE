import React from'react'
import berger from'../../../assets/Saint.jpg'
import './Community.css'
const Community = (props) => {

  console.log('--post',props)
  const MAX_LENGTH = 40;
  const { title } = props;

  return(


<div className="item-communities">    
    <h3>UECR Community</h3>
    <hr color="lightgray" />
          
    <div className="item-community">
  
        <hr color="#053d039b"/>
        <div className="text-panel-community">
                <h3>Lumiere de Jesue</h3>
                
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <img src={berger} alt="Berger" className="img"/>
                 
                  
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <img src={berger} alt="Berger" className="img"/>
                   
              
               
                <a href="http://">More</a>
        </div>

        <div className="text-panel-community">
                <h3>ABUNGERI </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <img src={berger} alt="Berger" className="img"/>
               
                   
                  
                <a href="http://">More</a>
        </div>

        <div className="text-panel-community">
                <h3>CAVEM </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <img src={berger} alt="Berger" className="img"/>
                  
                 
                <a href="http://">More</a>
        </div>


        <div className="text-panel-community">
                <h3>ULK </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 
                  
                <a href="http://">More</a>
        </div>

        <div className="text-panel-community">
                <h3>TCT </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
                 
                <a href="http://">More</a>
        </div>

        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
           
                  
                <a href="http://">More</a>
        </div>

        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  
                    
               
                <a href="http://">More</a>
        </div>

        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        <div className="text-panel-community">
                <h3>Lumiere du monde </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   
                 
                <a href="http://">More</a>
        </div>
        


    </div>
      <div className="Info">
          <div className="Author">{props.author}</div>
      </div>
  
      </div>
    


  )
}
export default Community