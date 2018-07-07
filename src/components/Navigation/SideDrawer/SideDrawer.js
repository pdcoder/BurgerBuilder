import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';
import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.css';
const sidedrawer = (props) => {
    let attachedclasses = [classes.SideDrawer,classes.Close];
     if(props.open){
         attachedclasses = [classes.SideDrawer,classes.Open];
     }
return (
    <Aux>
    <BackDrop show={props.open} clicked={props.closed} />
    <div className={attachedclasses.join(' ')}>
        <div className={classes.Logo}> 
        <Logo />
        </div>
<nav>
<NavigationItems isAuthenticated={props.isAuth} />
    </nav>
    </div>
    </Aux>
)
}


export default sidedrawer;