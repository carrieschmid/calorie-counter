import React from 'react';

import Counter from '../../Counter/Counter';
import Button from '../../UI/Button/Button';
import classes from './WorkoutSummary.module.css';

const workoutSummary = (props) => {
    return (
        <div className={classes.WorkoutSummary}>
            <h1>Nice job!</h1>
            {/* <div style={{width: '100%', margin: 'auto'}}>
                <Counter activity={props.activity}/>
            </div> */}
            <Button 
                btnType="Danger"
                clicked={props.submitCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.submitContinued}>CONTINUE</Button>
        </div>
    );
}

export default workoutSummary;