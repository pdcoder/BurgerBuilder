import React from 'react';
<<<<<<< HEAD

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
=======
import img from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';
const logo = (props) =>(
    <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="MyBurger" />
</div>
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
);

export default logo;