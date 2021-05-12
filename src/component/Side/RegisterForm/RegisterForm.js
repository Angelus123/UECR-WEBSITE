import React, {Component} from'react'
import Button from '../../UI/Button/Button'

import Aux from '../../../hoc/Auxi/Auxilliary'
class RegisterForm extends Component{
  //This could be functional component ,it doesn't have to be class component
  componentDidUpdate(){
    console.log('[OrderSumary.js] DidUpdate')
  }
  render() {
   
    return (
      <Aux>
         <Button btnType='Danger' clicked ={this.props.modalClosed }>X</Button>
      <div style ={{textAlign:'center'}}>
     
      <h3>Register</h3>
      <div className="form-register">
        <input type="text" placeholder="Full Name" className="register-box"/>
        <input type="text" placeholder="Phone" className="register-box"/>
        <input type="text" placeholder="Comunity" className="register-box"/>
        <input type="text" placeholder="University"className="register-box"/>
        <input type="text" placeholder="Minister" className="register-box"/>
        <input type="email" placeholder="Email" className="register-box"/>
        <input type="password" placeholder="Password" className="register-box"/>
     
      </div>
   
       <Button btnType='Success'>Sign Up</Button>
      </div>
        
      <div>Already have account <button onClick={this.props.login}>
        Login</button></div>
    
   </Aux>)
    
  }
}

export default RegisterForm