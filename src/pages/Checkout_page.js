import React from 'react';
import "./Checkout_page.css";
import {Link} from 'react-router-dom';

function Checkout_page() {
   return(
       <section className="Checkout_background">
        <div className="Checkout_wrapper">
            <div className="Checkout_icon">
                <img className="Success_icon" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Icons%2Fsuccess_icon.png?alt=media&token=a30a10b3-a247-4a07-9711-e9bb92fa8a60" alt="Congrats"/>
            </div>
            <div className="Checkout_text">
                <h2>Congrats!</h2>
                <p>Your order was successfully made. You are soon going to make someone very happy!</p>
            </div>
            <div className="back_to_home_checkout">
                <button className="back_to_home_button_checkout">
                <Link to="/Home_page" className="Link">Back to the Home</Link></button>
            </div>
        </div>
        </section>
   )
}

export default Checkout_page;