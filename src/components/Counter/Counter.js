import React from 'react';

import classes from './Counter.css';
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
        <div className={classes.Burger}>
           <CounterActivity/>
           {transformedActivities}
           <CounterActivity/>
         
        </div>
    );
};

export default counter;