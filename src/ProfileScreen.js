import React from 'react';
import  {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import './ProfileScreen.css';
import Nav from './Nav';
import { useHistory } from 'react-router';
import userEvent from '@testing-library/user-event';
import { auth } from './firebase';
import StripeCheckout from './Stripe/stripe.component';


function ProfileScreen(){
    const user = useSelector(selectUser);
    return(
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit profile</h1>
                <div className="profileScreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
                
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                       <div className="payment-style" > <p className="first">100$ for 4k subscription</p><StripeCheckout price={100}/></div>
                        <div className="payment-style"><p>50$ for 1080p subscription</p><StripeCheckout price={50}/></div>
                        <button onClick={()=> auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
};

export default ProfileScreen;