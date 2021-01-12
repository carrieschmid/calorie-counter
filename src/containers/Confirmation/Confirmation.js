import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import WorkoutSummary from '../../components/Workout/WorkoutSummary/WorkoutSummary';
// import ContactData from './ContactData/ContactData';

//here we are recreating the workout
class Confirmation extends Component {
 state = {
        activity:{
            walking: 100,
            running: 200,
            yoga: 150
        } 
    }

    render () {
        return (
            <div>
                <WorkoutSummary
                    activity={this.state.activity}
                    />
                
            </div>
        );
    }
}

export default Confirmation;