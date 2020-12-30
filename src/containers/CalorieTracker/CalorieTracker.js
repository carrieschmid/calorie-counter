import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Counter from '../../components/Counter/Counter';
import CounterControls from '../../components/Counter/CounterControls/CounterControls';

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
        totalCount: 0,
        // submittable: false,
        submitting: false
    }

      submitHandler = () => {
        this.setState({submitting: true});
    }

       addActivityHandler = ( type ) => {
        const oldCount = this.state.activity[type];
        const updatedCount = oldCount + 1;
        const updatedActivities = {
            ...this.state.activity
        };
        updatedActivities[type] = updatedCount;
        const calorieAddition = ACTIVITY_CALORIES[type];
        const oldTotal = this.state.totalCount;
        const newCount = oldTotal + calorieAddition;
        this.setState( { totalCount: newCount, activity: updatedActivities } );
        // this.updatePurchaseState(updatedIngredients);
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
        // this.updatePurchaseState(updatedIngredients);
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
                <Counter activity={this.state.activity}/>
                <CounterControls
                 activityAdded={this.addActivityHandler}
                 activityRemoved={this.removeActivityHandler}
                 submitted={this.purchaseHandler}
                 count={this.state.totalCount} />
            </Aux>
        );
    }
}

export default BurgerBuilder;