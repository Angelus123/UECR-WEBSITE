import React from 'react'
import './style.css'
 import './demo.css'
import Aux from '../../hoc/Auxi/Auxilliary'
const slideClick = (props) => {
    return(
        <Aux>
            <div class="ScriptTop">
    <div class="rt-container">
        <div class="col-rt-4" id="float-right">
 
        </div>
        <div class="col-rt-2">
            <ul>
                <li><a href="https://codeconvey.com/pure-css-coverflow-slider">Back to Tutorial</a></li>
            </ul>
        </div>
    </div>
</div>

<header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            	<h1>CSS 3D Coverflow Image Slider</h1>
                <p>A pure CSS 3D coverflow image slider.</p>
            </div>
        </div>
    </div>
</header>

<section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              

<div class="container">
  <div class="wgh-slider">
    <input class="wgh-slider-target" type="radio" id="slide-1" name="slider"/>
    <input class="wgh-slider-target" type="radio" id="slide-2" name="slider"/>
    <input class="wgh-slider-target" type="radio" id="slide-3" name="slider" checked="checked"/>
    <input class="wgh-slider-target" type="radio" id="slide-4" name="slider"/>
    <input class="wgh-slider-target" type="radio" id="slide-5" name="slider"/>
    <div class="wgh-slider__viewport">
      <div class="wgh-slider__viewbox">
        <div class="wgh-slider__container">
          <div class="wgh-slider-item">
            <div class="wgh-slider-item__inner">
              <figure class="wgh-slider-item-figure"><img class="wgh-slider-item-figure__image" src="img/image-1.jpg" alt="The 5th Exotic"/>
                <figcaption class="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
              </figure>
              <label class="wgh-slider-item__trigger" for="slide-1" title="Show product 1"></label>
            </div>
          </div>
          <div class="wgh-slider-item">
            <div class="wgh-slider-item__inner">
              <figure class="wgh-slider-item-figure"><img class="wgh-slider-item-figure__image" src="img/image-2.jpg" alt="The 5th Exotic"/>
                <figcaption class="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
              </figure>
              <label class="wgh-slider-item__trigger" for="slide-2" title="Show product 2"></label>
            </div>
          </div>
          <div class="wgh-slider-item">
            <div class="wgh-slider-item__inner">
              <figure class="wgh-slider-item-figure"><img class="wgh-slider-item-figure__image" src="img/image-3.png" alt="The 5th Exotic"/>
                <figcaption class="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
              </figure>
              <label class="wgh-slider-item__trigger" for="slide-3" title="Show product 3"></label>
            </div>
          </div>
          <div class="wgh-slider-item">
            <div class="wgh-slider-item__inner">
              <figure class="wgh-slider-item-figure"><img class="wgh-slider-item-figure__image" src="img/image-4.jpg" alt="The 5th Exotic"/>
                <figcaption class="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
              </figure>
              <label class="wgh-slider-item__trigger" for="slide-4" title="Show product 4"></label>
            </div>
          </div>
          <div class="wgh-slider-item">
            <div class="wgh-slider-item__inner">
              <figure class="wgh-slider-item-figure"><img class="wgh-slider-item-figure__image" src="img/image-5.jpg" alt="RYSY - Traveler LP"/>
                <figcaption class="wgh-slider-item-figure__caption"><a href="https://picsum.photos/id/237/480/480">RYSY - Traveler LP</a><span>RYSY</span></figcaption>
              </figure>
              <label class="wgh-slider-item__trigger" for="slide-5" title="Show product 5"></label>
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
export default slideClick