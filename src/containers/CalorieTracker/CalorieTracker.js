import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Counter from '../../components/Counter/Counter';
import CounterControls from '../../components/Counter/CounterControls/CounterControls';
import Modal from '../../components/UI/Modal/Modal';
import ActivitySummary from '../../components/Counter/ActivitySummary/ActivitySummary';

const ACTIVITY_CALORIES = {
    walking: 50,
    running: 100,
    yoga: 50,
    lifting: 75,
    stairs: 100,
    biking: 75 
};

class BurgerBuilder extends Component {

    state = {
        activity: {
            walking: 0,
            running: 0,
            yoga: 0,
            lifting: 0,
            stairs: 0,
            biking: 0
        },
        totalCount: 100,
        submitable: false,
        submitting: false
    }

      updateSubmitState (activity) {
        // a copy of state doesn't work here because we might not get updated ingredients, pass it in as an argument
        const sum = Object.keys(activity)
            .map( actKey => {
                return activity[actKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { submitable: sum > 0 } );
    }

      submitHandler = () => {
        this.setState({submitting: true});
    }

     submitCancelHandler = () => {
        this.setState({submitting: false});
    }

     submitContinueHandler = () => {
        alert('You continue!');
    }

       addActivityHandler = ( type ) => {
        const oldCount = this.state.activity[type];
        console.log(oldCount);
        const updatedCount = oldCount + 1;
        console.log(updatedCount);
        const updatedActivities = {
            ...this.state.activity
        };
        updatedActivities[type] = updatedCount;
        console.log(updatedActivities[type]);
        const calorieAddition = ACTIVITY_CALORIES[type];
        console.log(calorieAddition);
        const oldTotal = this.state.totalCount;
        const newCount = oldTotal + calorieAddition;
        console.log(newCount);
        this.setState( { totalCount: newCount, activity: updatedActivities } );
        this.updateSubmitState(updatedActivities);
    }

    removeActivityHandler = ( type ) => {
        const oldCount = this.state.activity[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedActivities = {
            ...this.state.activity
        };
        updatedActivities[type] = updatedCount;
        const countDeduction = ACTIVITY_CALORIES[type];
        const oldTotal = this.state.totalCount;
        const newCount = oldTotal - countDeduction;
        this.setState( { totalCount: newCount, activity: updatedActivities } );
        this.updateSubmitState(updatedActivities);
    }

    render () {
         const disabledInfo = {
            ...this.state.activity
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
     
        return (
            <Aux>
                 <Modal show={this.state.submitting} modalClosed={this.submitCancelHandler}>
                    <ActivitySummary 
                        activity={this.state.activity}
                        total={this.state.totalCount}
                        submitCancelled={this.submitCancelHandler}
                        submitContinued={this.submitContinueHandler} />
                </Modal>
                <Counter activity={this.state.activity}/>
                <CounterControls
                 activityAdded={this.addActivityHandler}
                 activityRemoved={this.removeActivityHandler}
                 disabled={disabledInfo}
                 submitable={this.state.submitable}
                 submitted={this.submitHandler}
                 count={this.state.totalCount} />
            </Aux>
        );
    }
}

export default BurgerBuilder;