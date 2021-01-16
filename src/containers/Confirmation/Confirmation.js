import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import WorkoutSummary from '../../components/Workout/WorkoutSummary/WorkoutSummary';
import ContactData from './ContactData/ContactData';

//here we are recreating the workout
class Confirmation extends Component {
 state = {
     //activity can be initiated with null
        activity: null,
        count: 0
    }
        //WillMount prevents activity from being null
        componentWillMount () {
        const query = new URLSearchParams( this.props.location.search );
        const activity = {};
        let count = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'count') {
                count = param[1];
            } else {
                activity[param[0]] = +param[1];
            }
        }
        this.setState( { activity: activity, totalCount: count } );
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
                    // component={ContactData}
                    //render manually here to pass props, history, etc., into contact data, push method in CotactData should work
                    render={(props) => (<ContactData activity={this.state.activity} count={this.state.totalCount} {...props}/>)}/>
                
            </div>
        );
    }
}

export default Confirmation;