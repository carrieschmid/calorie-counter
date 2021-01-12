import React from 'react';
// import {withRouter} from 'react-router-dom';
//this give access to match history and locatio
import classes from './Counter.module.css';
import CounterActivity from './CounterActivity/CounterActivity';

const counter = ( props ) => {
    let transformedActivities = Object.keys( props.activity )
        .map( actKey => {
            return [...Array( props.activity[actKey] )].map( ( _, i ) => {
                return <CounterActivity key={actKey + i} type={actKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedActivities.length === 0) {
        transformedActivities = <p>Please start adding activities!</p>;
    }
    return (
        <div className={classes.Counter}>
           <CounterActivity/>
           {transformedActivities}
           <CounterActivity/>
         
        </div>
    );
};

export default counter;