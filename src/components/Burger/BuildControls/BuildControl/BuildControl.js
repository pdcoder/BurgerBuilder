import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button 
            className={classes.More} 
            onClick={props.added}>More</button>
    </div>
);

<<<<<<< HEAD
=======

>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
export default buildControl;