import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './CounterActivity.module.css';

class CounterActivity extends Component {
    render () {
        let activity = null;

        switch ( this.props.type ) {
            case ( 'biking' ):
                activity = <div className={classes.Biking} label= "Biking"></div>;
                break;
            case ( 'running' ):
                activity = <div className={classes.Biking}></div>;
                break;
            case ( 'walking' ):
                activity = <div className={classes.Walking}></div>;
                break;
            case ( 'yoga' ):
                activity = <div className={classes.Yoga}></div>;
                break;
            case ( 'lifting' ):
                activity = <div className={classes.Lifting}></div>;
                break;
            case ( 'stairs' ):
                activity = <div className={classes.Stairs}>
                    <p>Stairs</p>
                </div>;
                break;
            default:
                activity = null;
        }

        return activity;
    }
}

CounterActivity.propTypes = {
    type: PropTypes.string.isRequired
};

export default CounterActivity;