import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import'./SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxilliary';

const sideDrawer = ( props ) => {  
    let attachedClasses = ['SideDrawer', 'Close']
    if(props.open){
       
        attachedClasses = ['SideDrawer', 'Open']
    }
   
    return  <Aux> 
              
      <Backdrop show ={props.open} clicked= {props.closed} />  
            <div className = {attachedClasses.join(' ')}>
            <div onClick={props.closed} className ='Exit'>X</div>
                    <Logo height='11%' close={props.closed}/>    
                <nav>
                    <NavigationItems close= {props.closed}/>
                </nav>
              
            </div>
        </Aux>
        }
export default sideDrawer;