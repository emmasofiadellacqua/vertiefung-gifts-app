import './Intro_page_1.css';
import {Link} from 'react-router-dom';

function Intro_page_1() {
    return (
      <div className="container1">
       <button className="button_to_2">
       <Link to='/Intro_page_2'>
       <div>Next</div>
       </Link>
       </button>
      </div>
    );
  }

export default Intro_page_1;