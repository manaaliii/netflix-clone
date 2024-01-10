import React, {useRef} from 'react';
import { auth } from '../firebase.js'
import '../css/SignInScreen.css'

function SignInScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const Register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user) =>{
            console.log(user);
        }).catch((error) =>
        alert(error.message));
    }

    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user) =>{
            console.log(user);
        }).catch((error) =>
            alert(error.message));
    }

    return (
        <div className="sign-in-screen">
            <form>
                <h1>sign In</h1>
                <input ref={emailRef}  type="email" placeholder="Email"/>
                <input ref={passwordRef}  type="password" placeholder="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className="sign-in-screen-gray"> New to Netflix? </span>
                    <span className="sign-up-screen-link" onClick={Register}> Sign Up Now.</span>
                </h4>
            </form>


        </div>
    )

}

export default SignInScreen;