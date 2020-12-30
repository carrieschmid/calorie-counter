import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class ActivitySummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const activitySummary = Object.keys( this.props.activity )
            .map( actKey => {
                return (
                    <li key={actKey}>
                        <span style={{ textTransform: 'capitalize' }}>{actKey}</span>: {this.props.activity[actKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Your Summary</h3>
                <p>Today you accomplished:</p>
                <ul>
                    {activitySummary}
                </ul>
                <p><strong>Total Calories: {this.props.total}</strong></p>
                <p>Submit?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default ActivitySummary;