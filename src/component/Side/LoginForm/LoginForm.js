import React, {Component} from'react'
import {Link} from 'react-router-dom'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Auxi/Auxilliary'
class OrderSumary extends Component{
  //This could be functional component ,it doesn't have to be class component
  componentDidUpdate(){
    console.log('[OrderSumary.js] DidUpdate')
  }
  render() {
    // const ingredientSumary =Object.keys(this.props.ingredients)
    // .map(igKey => {
    //   return <li key={igKey}><span style ={{textTransform:'capitalize '}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    // })
    return (
      <Aux>
        <div><Button btnType='Danger' clicked ={this.props.modalClosed }>X</Button></div>
         
      <h3>Login</h3>
      <div className="form-login">
        <input type="email" placeholder="Email" className="input-box"/>
        <input type="password" placeholder="Password" className="input-box"/>
        <Button btnType='Success'>Login</Button>
        <p>Not having account <Link to ="/sign up">Sign Up</Link></p>
        <Link to ="/forgot">Forgot password </Link>
      </div>
   </Aux>)
    
  }
}

export default OrderSumary