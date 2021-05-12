import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" close={props.close}>Home</NavigationItem>
    <NavigationItem link ="/aboutuecr"  close={props.close} >About</NavigationItem>
    <NavigationItem link ="/community" close={props.close} >Community</NavigationItem>
    <NavigationItem link ="/history" close={props.close}>History</NavigationItem>
    <NavigationItem link ="/staff" close={props.close}>Staff</NavigationItem>
    <NavigationItem link ="/login" close={props.close}>Login</NavigationItem>
    <NavigationItem link ="/register" close={props.close}>Register</NavigationItem>
    <NavigationItem link ="/events" close={props.close}>Events</NavigationItem>
    <NavigationItem link ="/account" close={props.close}>Account</NavigationItem>
    <NavigationItem link ="/trip" close={props.close}>Trip</NavigationItem>
    <NavigationItem link ="/zone" close={props.close}>Zone</NavigationItem>
   
</ul>

)
export default navigationItems