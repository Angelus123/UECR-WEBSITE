import React, {Component} from 'react'
import Aux from '../../../hoc/Auxi/Auxilliary'
import './Login.css'
import Backdrop from '../Backdrop/Backdrop'
class Login extends Component{
    shouldComponentUpdate(nextProps, nextState){
            return nextProps.show !== this.props.show;
            //nextProps.show !== this.props.show;
        
    }
    render (){
        return (
            <Aux>
                <Backdrop show ={this.props.show} clicked= {this.props.loginClosed} />
                <div 
                    className ="Login"
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1':'0'}}>
                    {this.props.children} 
                
                    
                </div>
                </Aux>
        )
    }
} 
export default Login