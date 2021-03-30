// npx create-react-app netflix-build --template redux
//npm install axios

//for use stripe in our app
//npm install react-stripe-checkout
//npm install --save @stripe/react-stripe-js @stripe/stripe-js

//for add trailer in our app
//npm install react-youtube
//npm install movie-trailer
import React, { useEffect } from 'react';
import {auth} from './firebase';
import HomeScreen from './Screens/HomeScreen';
import Nav from './Nav';
import Banner from'./Banner';
import Row from './Row';
import ProfileScreen from './ProfileScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.css';
import requests from './Requests';
import LoginScreen from './LoginScreen';
import {useDispatch, useSelector} from 'react-redux';
import {logout,login, selectUser} from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged(userAuth =>{
     if(userAuth){
     
       dispatch(login({
         uid: userAuth.uid,
         email: userAuth.email,

       }))

     }else{
          dispatch(logout());

     }

    });
    return unsubscribe;
  },[dispatch])
  return (
    
    <div className="app">
      <Router>

      {!user ?(
      <LoginScreen/>
    ):(
     
        

        
        <Switch>
          <Route path="/profile">
            <ProfileScreen />

          </Route>
         
          <Route exact path="/">
          <HomeScreen />
          </Route>
          
        </Switch>
    )}
      
    </Router>
    </div>
    
    

    
  );
}

export default App;
