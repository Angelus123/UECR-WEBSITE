import React from 'react'
import Logo from '../../Logo/Logo'
import {Route} from 'react-router-dom'
import NavigationItems from '../NavigationItems/NavigationItems'
import Register from '../../../component/Side/RegisterForm/RegisterForm'
import Home from '../../../containers/Home/Home'
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import './toolbar.css'
const toolbar = (props) => {
  console.log(props.open)
    return <header className="Toolbar">
       <DrawToggle clicked ={props.toggle} />
        <Logo height='80%'/>
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
    </header>


}
export default toolbar