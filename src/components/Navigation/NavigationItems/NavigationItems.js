import React from 'react';
<<<<<<< HEAD

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;
=======
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationitems = (props) => (
<ul className={classes.NavigationItems}>
<NavigationItem link="/" exact>Burger Builder</NavigationItem>
{props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
{!props.isAuthenticated
    ? <NavigationItem link="/auth">Authenticate</NavigationItem>
    : <NavigationItem link="/logout">Logout</NavigationItem>}
</ul>
);

export default navigationitems;
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
