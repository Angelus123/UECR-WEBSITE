import React from 'react'
import './NavigationItems.css'
import home from '../../../assets/home.png'
import about from '../../../assets/about.png'
import community from '../../../assets/community.png'
import history from '../../../assets/history.png'
import staff from '../../../assets/staff.png'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" close={props.close}><img src={home} className="nav-icon"/>Home </NavigationItem>
    <NavigationItem link ="/aboutuecr"  close={props.close} > <img src={about} className="nav-icon" />About</NavigationItem>
    <NavigationItem link ="/community" close={props.close} ><img src={community} className="nav-icon"/>Community</NavigationItem>
    <NavigationItem link ="/history" close={props.close}><img src={history} className="nav-icon"/>History</NavigationItem>
    <NavigationItem link ="/staff" close={props.close}><img src={staff} className="nav-icon"/>Staff</NavigationItem>
</ul>

)
export default navigationItems