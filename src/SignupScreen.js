import React,{useRef} from 'react';
import {auth} from './firebase';
import './SignupScreen.css';

 function SiginupScreen(){

     const emailRef = useRef(null);
     const passwordRef = useRef(null);

     const register = (e)=>{
         e.preventDefault();
         auth.createUserWithEmailAndPassword(
             emailRef.current.value,
             passwordRef.current.value
         )
         .then(()=>{})
         .catch((error)=>{
             alert(error.message)
         }
         )
     };
     const signIn = (e)=>{
         e.preventDefault();
         auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value


         )
         .then(()=>{})
         .catch((error)=>{
             alert(error.message)
         }
         )
     }
     return(
         <div className="signupScreen">
             <h1>SignIn</h1>
             <form>
                 <input ref={emailRef} type="email" placeholder="email" />
                 <input ref={passwordRef} type="password" placeholder="password" />
                 <button onClick={(signIn)} type="submit">SignIn</button>
                 <h4>
                     <span className="signupScreen__grey">
                        New to Netflix?
                     </span>
                     <span onClick={(register)} className="signupScreen__link"> SignUp now.</span></h4>
             </form>
         </div>
     )
 } ;

 export default SiginupScreen;