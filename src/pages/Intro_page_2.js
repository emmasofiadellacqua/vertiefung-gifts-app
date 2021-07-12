import './Intro_page_2.css';
import {Link} from 'react-router-dom';

function Intro_page_2() {
    return (
      <div className="container2">
        <button className="button_to_3">
        <Link to='/Intro_page_3'>
        <div>Next</div>
        </Link>
        </button>
      </div>
    );
  }

export default Intro_page_2;