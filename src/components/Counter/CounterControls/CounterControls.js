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
        <p>Current Total: <strong>{props.total}</strong></p>
        {controls.map(ctrl => (
            <CounterControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.activityAdded(ctrl.type)}
                removed={() => props.activityRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} 
                />
        ))}
          <button 
            className={classes.SubmitButton}
            disabled={!props.submitable}
            onClick={props.submitted}>ORDER NOW</button>
       
    </div>
);



export default counterControls;