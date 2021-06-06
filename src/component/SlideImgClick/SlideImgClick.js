import React from'react'
import events from '../../assets/img/events.png'
import kibeho from '../../assets/img/kibeho.jpg'
import HolySpirit from '../../assets/img/holy-spirit.jpg'
import fatima from '../../assets/img/fatima.jpg'
import img5 from '../../assets/img/image-5.jpg'
import './demo.css'
import './style.css'
import Aux from '../../hoc/Auxi/Auxilliary'
const Community = (props) => {

  return(

 <Aux>
   
            <div className="ScriptTop">
    <div className="rt-container">
        <div className="col-rt-4" id="float-right">
 
        </div>
       
    </div>
</div>

<header className="ScriptHeader">
    <div className="rt-container">
    	<div className="col-rt-12">
        	<div className="rt-heading">
            	<h1 >RCC RWANDA</h1>
              <h3 >Renouvaux Charsimatique Chatholic Au Rwanda</h3>
              
            </div>
        </div>
    </div>
</header>

<section>
    <div className="rt-container">
          <div className="col-rt-12">
              <div className="Scriptcontent">
              

<div className="container1">
  <div className="wgh-slider">
    <input className="wgh-slider-target" type="radio" id="slide-1" name="slider"/>
    <input className="wgh-slider-target" type="radio" id="slide-2" name="slider"/>
    <input className="wgh-slider-target" type="radio" id="slide-3" name="slider" checked="checked"/>
    <input className="wgh-slider-target" type="radio" id="slide-4" name="slider"/>
    <input className="wgh-slider-target" type="radio" id="slide-5" name="slider"/>
    <div className="wgh-slider__viewport">
      <div className="wgh-slider__viewbox">
        <div className="wgh-slider__container">
          <div className="wgh-slider-item">
            <div className="wgh-slider-item__inner">
              <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={events} alt="The 5th Exotic"/>
                <figcaption className="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">Up coming events</a><span>Last week we have had a Holy trip at Kibeho</span></figcaption>
              </figure>
              <label className="wgh-slider-item__trigger" for="slide-1" title="Show product 1"></label>
            </div>
          </div>
          <div className="wgh-slider-item">
            <div className="wgh-slider-item__inner">
              <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={fatima} alt="The 5th Exotic"/>
                <figcaption className="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">Fatima</a><span>On May 13, Catholics around the world celebrate Our Lady of Fatima .</span></figcaption>
              </figure>
              <label className="wgh-slider-item__trigger" for="slide-2" title="Show product 2"></label>
            </div>
          </div>
          <div className="wgh-slider-item">
            <div className="wgh-slider-item__inner">
              <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={HolySpirit} alt="The 5th Exotic"/>
                <figcaption className="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">Holy Spirit</a><span>Holy Spirit is actually living within each of us (and cannot be removed), and His temple is our body (which is why we are to keep our temples clean and sinless).</span></figcaption>
              </figure>
              <label className="wgh-slider-item__trigger" for="slide-3" title="Show product 3"></label>
            </div>
          </div>
          <div className="wgh-slider-item">
            <div className="wgh-slider-item__inner">
              <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={kibeho} alt="The 5th Exotic"/>
                <figcaption className="wgh-slider-item-figure__caption">
                  <a href="https://www.youtube.com/watch?v=lxTSW8zipJo&t=138s">Kibeho Apparation</a><span>Our Lady of Kibeho is the name given to reported Marian apparitions concerning several adolescents,
                           in the 1980s in Kibeho, south-western Rwanda</span></figcaption>
              </figure>
              <label className="wgh-slider-item__trigger" for="slide-4" title="Show product 4"></label>
            </div>
          </div>
          <div className="wgh-slider-item">
            <div className="wgh-slider-item__inner">
              <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={img5} alt="RYSY - Traveler LP"/>
                <figcaption className="wgh-slider-item-figure__caption"><a href="https://picsum.photos/id/237/480/480">RYSY - Traveler LP</a><span>RYSY</span></figcaption>
              </figure>
              <label className="wgh-slider-item__trigger" for="slide-5" title="Show product 5"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

           
    		</div>
		</div>
    </div>
</section>
        </Aux>


  )
}
export default Community