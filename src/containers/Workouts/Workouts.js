import React, { Component } from 'react';
import Workout from '../../components/Workout/Workout';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Workouts extends Component {
  


    render () {
        return (
            <div>
           <Workout/>
           <Workout/>
            </div>
        );
    }
}

export default withErrorHandler(Workouts, axios);