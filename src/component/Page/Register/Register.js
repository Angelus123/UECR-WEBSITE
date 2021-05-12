import React, {Component} from'react'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'
import './Register.css'
import Aux from '../../../hoc/Auxi/Auxilliary'
class RegisterForm extends Component{
  //This could be functional component ,it doesn't have to be class component
  componentDidUpdate(){
    console.log('[OrderSumary.js] DidUpdate')
  }
  render() {
   
    return (
      <Aux>
      <div style ={{textAlign:'center'}}>
      <Button btnType='Danger' clicked ={this.props.modalClosed }>X</Button>
      <h3>Register</h3>
      <div className="register-form">
        <input type="text" placeholder="Full Name" className="register-box"/>
        <input type="text" placeholder="Phone"  className="register-box"/>
        <input type="text" placeholder="Comunity" className="register-box"/>
        <input type="text" placeholder="University" className="register-box"/>
        <input type="text" placeholder="Minister" className="register-box"/>
        <input type="email" placeholder="Email" className="register-box"/>
        <input type="password" placeholder="Password" className="register-box"/>
        <input type="password" placeholder="Comfirm Password" className="register-box"/>
       <br />
        <Button btnType='Success'>Sign Up</Button>
        <div>Already have account <Link to="./login">
        Login</Link></div>
        
      </div>
      
    
      </div>
      
    
   </Aux>)
    
  }
}

export default RegisterForm