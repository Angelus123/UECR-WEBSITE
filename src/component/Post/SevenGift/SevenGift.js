import React from 'react'
import './SevenGift.css'
import Aux from '../../../hoc/Auxi/Auxilliary'

const SevenGiftPost = (props) => {

    return(
    <Aux>
    <h4>{props.name}</h4>
    <div className="item-zone">
       
               {props.title}
    </div> 
</Aux>
)
}
export default SevenGiftPost 