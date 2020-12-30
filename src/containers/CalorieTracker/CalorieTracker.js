import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Counter from '../../components/Counter/Counter';
import CounterControls from '../../components/Counter/CounterControls/CounterControls';

// const CALORIE_TOTALS = {
//     salad: 0.5,
//     cheese: 0.4,
//     meat: 1.3,
//     bacon: 0.7
// };

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
        // submitting: false
    }

 

    render () {
     
        return (
            <Aux>
                <Counter activity={this.state.activity}/>
                <CounterControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;