import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Counter from '../../components/Counter/Counter';
import CounterControls from '../../components/Counter/CounterControls/CounterControls';
import Modal from '../../components/UI/Modal/Modal';
import ActivitySummary from '../../components/Counter/ActivitySummary/ActivitySummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

const ACTIVITY_CALORIES = {
    walking: 50,
    running: 100,
    yoga: 50,
    lifting: 75,
    stairs: 100,
    biking: 75 
};

class CalorieTracker extends Component {

    state = {
        activity: null,
        totalCount: 100,
        submitable: false,
        submitting: false,
        loading: false,
        error: false
    }

        componentDidMount () {
        axios.get('https://calorie-counter-14ff5-default-rtdb.firebaseio.com/activity.json')
            .then( response => {
                this.setState( { activity: response.data } );
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
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
                // //.json for Firebase
        // axios.post( '/entry.json', entry )
        //    .then( response => {
        //         this.setState( { loading: false, purchasing: false } );
        //     } )
        //     .catch( error => {
        //         this.setState( { loading: false, purchasing: false } );
        //     } );
        const queryParams = [];
        for (let i in this.state.activity){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURI(this.state.activity[i]) )
        }
        queryParams.push('count=' + this.state.totalCount);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/confirmation',
            search: '?' + queryString
        });
        // this.props.history.push('/confirmation');

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

        let activitySummary = null;
        let activities = this.state.error ? <p>Activities can't be loaded!</p> : <Spinner />;
            if ( this.state.activity ) {
            activities = (
                <Aux>
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
                activitySummary = <ActivitySummary 
                        activity={this.state.activity}
                        total={this.state.totalCount}
                        submitCancelled={this.submitCancelHandler}
                        submitContinued={this.submitContinueHandler} />
        }

        if ( this.state.loading ) {
       activitySummary= <Spinner />;
        }
             
        return (
            <Aux>
                 <Modal show={this.state.submitting} modalClosed={this.submitCancelHandler}>
                    {activitySummary}
                </Modal>
                {activities}
            </Aux>
        );
    }
}

//global error handling
export default withErrorHandler( CalorieTracker, axios );