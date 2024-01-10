import React from 'react';
import '../css/ProfileScreen.css'
import Nav from "../components/Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase"

function ProfileScreen(){
    const user = useSelector(selectUser);
    return(
        <div className="profile-screen">
            <Nav />
            <div className="profile-screen-body">
                <h1>Edit Profile</h1>
                <div className="profile-screen-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <div className="profile-screen-details">
                        <h2>{user.email}</h2>
                        <div className="profile-screen-plans">
                            <h3>Plans</h3>
                            <p>renewal day</p>
                            <button onClick={()=>{
                                auth.signOut().then(()=>{
                                    console.log('You have been signed out');
                                });
                            }} className="profile-screen-sign-out">sign out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileScreen;