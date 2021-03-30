import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';




const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ITcfYFE1P1qwGR9NnNbPQzzJ4rbXOqoBBEEpRDKRSEIe8xRunYmHfJz79r6B0RcLqiUi5Y5fGkNPJt4zlZawo3u00i5J45xpH';



  const  onToken = token=>{
        console.log(token);
        alert('Payment Successful')
    }


    return(
        <StripeCheckout
        
        label="Subscribe"
        name="NETFLIX"
        billingAddress
        shippingAddress
        image='https://i.pinimg.com/originals/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;