import React from 'react';
<<<<<<< HEAD

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
=======
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
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
