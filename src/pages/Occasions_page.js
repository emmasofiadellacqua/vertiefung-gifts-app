import React from 'react';
import './Occasions_page.css';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function Occasions_page () {
    
  const SwitchOcc = withStyles({
    switchBase: {
      '&$checked + $track': {
        backgroundColor: blue[700],
      },
    },
    checked: {},
    track: {},
  })(Switch);

    const [state, setState] = React.useState({
      Christmas: false,
      Birthday: false,
      Anniversary: false,
      Random: false,
      Valentines: false,
    });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

    return (
      <div className="container8">

    <FormControl component="fieldset">
      <FormGroup>
        <div className="Christmas">
      <FormControlLabel
        control={<SwitchOcc checked={state.Christmas} onChange={handleChange} name='Christmas'/>}
      /> <br></br>
        </div>
        <div className="Birthday">
      <FormControlLabel 
        control={<SwitchOcc checked={state.Birthday} onChange={handleChange} name='Birthday'/>}
      /> <br></br>
        </div>
        <div className="Anniversary">
      <FormControlLabel
        control={<SwitchOcc checked={state.Anniversary} onChange={handleChange} name='Anniversary'/>}
      /> <br></br>
      </div>
      <div className="Random">
      <FormControlLabel 
        control={<SwitchOcc checked={state.Random} onChange={handleChange} name='Random'/>}
      /> <br></br>
      </div>
      <div className="Valentines">
      <FormControlLabel
        control={<SwitchOcc checked={state.Valentines} onChange={handleChange} name='Valentines'/>}
      /> <br></br>
      </div>
    </FormGroup>
    </FormControl> <br></br>

       <button className="button_to_interests">
       <Link to={{
        pathname: "/Interests_page",
        occasion: state}}>
       <div>Continue</div>
       </Link>
       </button>
      </div>
    );
  }; 


export default Occasions_page;
