import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const sidedrawer = (props) => {
return (
    <div className={classes.SideDrawer}>
        <div classname={classes.Logo}> 
        <Logo />
        </div>
<nav>
    <NavigationItems/>
    </nav>
    </div>
)
}


export default sidedrawer;