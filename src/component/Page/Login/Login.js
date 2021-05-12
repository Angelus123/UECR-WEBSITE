import React, {Component} from'react'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'
import './Login.css'
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
      <h3>Login</h3>
      <div className="Login-form">
        <input type="email" placeholder="Email" className="login-box"/>
        <input type="password" placeholder="Password" className="login-box"/>
        <br/>
        <Button btnType='Success'>Login</Button>
        <div>Already have account <Link to ="/register">SignUp</Link>
        </div>
        <div><Link to ="/ForgotPassword">Forgot Password</Link>
        </div>
        
      </div>
      
    
      </div>
      
    
   </Aux>)
    
  }
}

export default RegisterForm