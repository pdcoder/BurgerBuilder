import React from 'react';
<<<<<<< HEAD

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed( 2 )}</strong></p>
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded( ctrl.type )}
                removed={() => props.ingredientRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

=======
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},

]


const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Current price: <strong>{props.price}</strong></p>
{controls.map(ctrl=>(
    <BuildControl key={ctrl.label} label={ctrl.label} added={()=> props.ingredientAdded} removed={()=> props.ingredientsRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
))}
<button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);


>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
export default buildControls;