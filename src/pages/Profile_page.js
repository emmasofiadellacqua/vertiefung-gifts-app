import React from "react";
import "./Profile_page.css";
import app from "../components/firebase.js";
import {Link} from 'react-router-dom';

function Profile_page () { 
    let user = app.auth().currentUser;
    return (
    <div className="container10">
    <section className="Profile_wrapper">
    <div className="button_to_home_x">
        <button className="x_button"><Link to="/Home_page" className="Link">X</Link></button>
    </div>
    <div className="Welcome_text">
        <h2 className="your_profile">Your profile</h2>
    </div>
    <div className="UserInfo">
        <h4 className="h4_email">Email</h4>
        <p className="profile_p">{ user.email }</p>
        <h4 className="h4_location">Location</h4>
        <p className="profile_p">Germany</p>
    </div>
    </section>
    <div className="Logout">
    <button className="log_out_button" onClick={() => app.auth().signOut()}><Link to="/" className="Link">Sign out</Link></button>
    </div>
    </div>
    );
} 

export default Profile_page;