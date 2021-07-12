import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';
import app from "../components/firebase";
import './Registration_page.css'

const Registration_page = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/Home_page");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="container5">
      <div className="Logo_pic_r">
        <img className="Logo_r" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Backgrounds%2FLogo.png?alt=media&token=019bd2d5-1351-44bb-82fb-b1088621ba42" alt="logo"></img>
       </div>
       <div className="Introduction_r">
         <h1 className="Intro_r">Let's Register.</h1>
         <p className="p_r">Easily create your account and get gifting!</p>
       </div>
      <form onSubmit={handleSignUp}>
          <input className='EmailR' name="email" type="email" placeholder="Email" /> <br></br>
          <input className='PasswordR' name="password" type="password" placeholder="Password" /> <br></br>
        <button className='RegisterR' type="submit">Sign up</button>
      </form>
      <button className='LoginR'><Link to='/Login_page' className="Link">Log in</Link></button>
    </div>
  );
};

export default withRouter(Registration_page);