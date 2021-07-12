import './Intro_page_3.css';
import {Link} from 'react-router-dom';

function Intro_page_3() {
    return (
      <div className="container3">
        <button className="button_to_registration">
        <Link to='/Registration_page'>
        <div>Get started</div>
        </Link>
        </button>
      </div>
    );
  }

export default Intro_page_3;