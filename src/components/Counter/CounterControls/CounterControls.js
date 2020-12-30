import React from 'react';

import classes from './CounterControls.css';
import CounterControl from './CounterControl/CounterControl';

const controls = [
    { label: 'Walking', type: 'walking' },
    { label: 'Running', type: 'running' },
    { label: 'Lifting', type: 'lifting' },
    { label: 'Yoga', type: 'yoga' },
    { label: 'Stairs', type: 'stairs' },
];

const counterControls = (props) => (
    <div className={classes.CounterControls}>
        {/* <p>Current Total: <strong>{props.total.toFixed(2)}</strong></p> */}
        {controls.map(ctrl => (
            <CounterControl 
                key={ctrl.label} 
                label={ctrl.label}
                // added={() => props.Added(ctrl.type)}
                // removed={() => props.ingredientRemoved(ctrl.type)}
                // disabled={props.disabled[ctrl.type]} 
                />
        ))}
       
    </div>
);

export default counterControls;