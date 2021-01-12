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
      }
    }

   

    render () {
      
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
               <form>
                    <input type='text' name='name' placeholder= 'Your Name'/>
                    <input type='text' name='email' placeholder= 'Your Email'/>
                    <input type='text' name='street' placeholder= 'Your Street'/>
                    <Button btnType='Success'>Order</Button>
               </form>
            </div>
        );
    }
}

export default ContactData;