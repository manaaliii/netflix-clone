import React, {useEffect} from 'react';
import HomeScreen from "./screens/HomeScreen";
import './App.css';
import {BrowserRouter as Router ,
    Routes ,
    Route
} from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";


function App() {
    const user = useSelector(selectUser);
    // console.log('user', user)
    const dispatch = useDispatch();
    useEffect(()=> {

        //if the component unmount, we don't want to duplicate listener, just attach new one and detach old one.
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }));
                // console.log(userAuth);

            } else {
                // console.log("User not logged in");
                dispatch(logout());
            }
        });

        return unsubscribe;
    },[dispatch]);
    // console.log(user);
  return (
    <div className="app">
        <Router>
            {
                !user ? (
                    <LoginScreen />
                ) : (
                    <Routes>
                        <Route exact path='/' element={<HomeScreen/>} />
                        <Route exact path='/profile' element={<ProfileScreen/>} />
                    </Routes>
                )
            }
        </Router>

    </div>
  );
}

export default App;
