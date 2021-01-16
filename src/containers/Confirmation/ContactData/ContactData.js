import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
// import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
      name: '',
      email: '',
      address:{
          street:'',
          postalCode:''
      },
      loading: false
    }

   confirmationHandler = ( event ) => {
        event.preventDefault();
        //handle the event, don't send the request and reload the page
        this.setState( { loading: true } );

        const confirmation = {
            activity: this.props.activity,
            count: this.props.count,
            customer: {
                name: 'Carrie Schmid',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            }
        }

        // const formData = {};
        // for (let formElementIdentifier in this.state.orderForm) {
        //     formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        // }
        //this is the code from CalorieTracker
        // const confirmation = {
        //     activity: this.props.activity,
        //     //this comes from Confirmation
        //     count: this.props.count,
        //     // orderData: formData
        // }
        axios.post( '/confirmation.json', confirmation)
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push( '/' );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render () {
        let form = ( 
        <form>
            <input type='text' name='name' placeholder= 'Your Name'/>
            <input type='text' name='email' placeholder= 'Your Email'/>
            <input type='text' name='street' placeholder= 'Your Street'/>
            <Button btnType='Success' clicked={this.confirmationHandler}>Order</Button>
        </form>);
        if ( this.state.loading ) {
            form = <Spinner />;
        }
      
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;