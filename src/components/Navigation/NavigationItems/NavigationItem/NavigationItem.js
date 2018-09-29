import React from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

=======
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
    <NavLink 
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>{props.children}</NavLink>
</li>


);
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
export default navigationItem;