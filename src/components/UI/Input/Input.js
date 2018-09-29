import React from 'react';
<<<<<<< HEAD

import classes from './Input.css';

const input = ( props ) => {
=======
import classes from './Input.css';

const input = (props) => {
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
<<<<<<< HEAD
    }

=======
    } 
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

<<<<<<< HEAD
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

=======
return(
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        </div>
);
};
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
export default input;