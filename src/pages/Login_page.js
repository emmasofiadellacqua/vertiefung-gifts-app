import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from 'react-router-dom';
import app from "../components/firebase.js";
import { AuthContext } from "../components/Auth.js";
import './Login_page.css';

const Login_page = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Home_page");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Home_page" />;
  }

  return (
    <div className="container4">
      <div className="Logo_pic_l">
        <img className="Logo_l" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Backgrounds%2FLogo.png?alt=media&token=019bd2d5-1351-44bb-82fb-b1088621ba42" alt="logo"></img>
       </div>
       <div className="Introduction_l">
         <h1 className="Intro_l">Let's Login.</h1>
         <p className="p_l">Do you already have an account?</p>
       </div>
      <form onSubmit={handleLogin}>
          <input className='Email' name="email" type="email" placeholder="Email" /> <br></br>
          <input className='Password' name="password" type="password" placeholder="Password" /><br></br>
        <button className='Login' type="submit">Log in</button><br></br>
        <button className='Register'><Link to='/Registration_page' className="Link">Register</Link></button>
      </form>
    </div>
  );
};

export default withRouter (Login_page);