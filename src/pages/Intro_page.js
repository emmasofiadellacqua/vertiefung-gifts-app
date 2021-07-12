import './Intro_page.css';
import {Link} from 'react-router-dom';

const Intro_page = () => {
    return (
      <div className="container7">
       <div className="Logo_pic">
        <img className="Logo" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Backgrounds%2FLogo.png?alt=media&token=019bd2d5-1351-44bb-82fb-b1088621ba42" alt="logo"></img>
       </div>
       <div className="Introduction">
         <h1 className="Intro">The One-Stop Shop For Gifts Anyday</h1>
         <p className="Catch_phrase">Let us handle that stress.</p>
       </div>
       <section className="Find_p_button">
       <div className="p_find">
       <p className="find_out_more">Find out more</p>
       </div>
       <div className="button_to_onboarding">
       <Link to='/Intro_page_1'>
       <img className = "button_to_intro1" src="https://firebasestorage.googleapis.com/v0/b/giftapp-a129f.appspot.com/o/Buttons%2FIntro_button.png?alt=media&token=c603983e-2b03-4b39-b122-284d934eac90" alt="start_button"/>
       </Link>
       </div>
       </section>
       <div className="go_to_login">
       <button className='LoginI'><Link to='/Login_page' className="Link">Log in</Link></button>
       </div>
      </div>
    );
  };

export default Intro_page;