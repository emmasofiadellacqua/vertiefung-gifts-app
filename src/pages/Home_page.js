import React from 'react';
import './Home_page.css';
import {Link} from 'react-router-dom';


const Home_page = () => {
      return (
      <section className="container6">
      <div className="occasions">
         <Link to="/Occasions_page"><img className = "button_to_occasions" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Buttons%2FFind_gift_button.png?alt=media&token=dfaefc3e-61b4-47eb-ad94-e0647d0b2a4d" alt="to_occasions"/>
         </Link>
      </div>
      <div className = "profile">
         <Link to="/Profile_page"><img className = "button_to_profile" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Buttons%2FProfile_home_button.png?alt=media&token=f2b9cda4-681f-4566-a3e8-c4a7634e0772" alt="to_profile"/>
         </Link>
      </div>
      <div className="calendar">
         <Link to="/Calendar_page"><img className = "button_to_calendar" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Buttons%2FCalendar_home_button.png?alt=media&token=582cbe2b-6ebb-4d2f-9752-25097f054df2" alt="to_calenar"/>
         </Link>
      </div>
      </section>
    );
  };
  


  export default Home_page;