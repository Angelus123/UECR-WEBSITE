import React, {Component} from 'react'
import './NavigationItem.css'
import {NavLink} from 'react-router-dom'
import Aux from '../../../../hoc/Auxi/Auxilliary'
class NavigationItem extends Component{
    render()
    {
        return (
        <Aux>
            <div className="NavigationItem" >
                <NavLink to ={this.props.link} exact >{this.props.children}</NavLink>
            </div>
        </Aux>     
          )
    }
}

export default NavigationItem