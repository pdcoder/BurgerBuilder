import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
<<<<<<< HEAD
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
=======
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked} disabled={props.disabled}>{props.children}
        </button>
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
);

export default button;