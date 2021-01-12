import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import WorkoutSummary from '../../components/Workout/WorkoutSummary/WorkoutSummary';
import ContactData from './ContactData/ContactData';

//here we are recreating the workout
class Confirmation extends Component {
 state = {
        activity:{
            walking: 100,
            running: 200,
            yoga: 150
        } 
    }

      submitCancelledHandler = () => {
        this.props.history.goBack();
    }

      submitContinuedHandler = () => {
        this.props.history.replace( '/confirmation/contact-data' );
    }

    render () {
        return (
            <div>
                <WorkoutSummary
                    activity={this.state.activity}
                    submitCancelled={this.submitCancelledHandler}
                    submitContinued={this.submitContinuedHandler} />
                    
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
                
            </div>
        );
    }
}

export default Confirmation;