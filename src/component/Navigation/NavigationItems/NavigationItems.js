import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" >Home</NavigationItem>
    <NavigationItem link ="/aboutuecr"  >About</NavigationItem>
    <NavigationItem link ="/community" >Community</NavigationItem>
    <NavigationItem link ="/history">History</NavigationItem>
    <NavigationItem link ="/staff">Staff</NavigationItem>
    <NavigationItem link ="/login">Login</NavigationItem>
    <NavigationItem link ="/register">Register</NavigationItem>
    <NavigationItem link ="/events">Events</NavigationItem>
    <NavigationItem link ="/account">Account</NavigationItem>
    <NavigationItem link ="/trip">Trip</NavigationItem>
    <NavigationItem link ="/zone">Zone</NavigationItem>
   
</ul>

)
export default navigationItems