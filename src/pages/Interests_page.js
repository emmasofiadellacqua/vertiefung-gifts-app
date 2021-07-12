import React from 'react';
import './Interests_page.css';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function Interests_page (props) {
    
  const SwitchInt = withStyles({
    switchBase: {
      '&$checked + $track': {
        backgroundColor: blue[700],
      },
    },
    checked: {},
    track: {},
  })(Switch);

    const [state, setState] = React.useState({
        Travel: false,
        Sports: false,
        Camping: false,
        Cooking: false,
        Photography: false,
    }); 


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const occasion = props.location.occasion;

    return (
    <div className="container9">

    <FormControl component="fieldset">
      <FormGroup>
        <div className="Travel">
      <FormControlLabel
        control={<SwitchInt checked={state.Travel} onChange={handleChange} name='Travel'/>}
      /> <br></br>
        </div>
        <div className="Sports">
      <FormControlLabel 
        control={<SwitchInt checked={state.Sports} onChange={handleChange} name='Sports'/>}
      /> <br></br>
        </div>
        <div className="Camping">
      <FormControlLabel
        control={<SwitchInt checked={state.Camping} onChange={handleChange} name='Camping'/>}
      /> <br></br>
      </div>
      <div className="Cooking">
      <FormControlLabel 
        control={<SwitchInt checked={state.Cooking} onChange={handleChange} name='Cooking'/>}
      /> <br></br>
      </div>
      <div className="Photography">
      <FormControlLabel
        control={<SwitchInt checked={state.Photography} onChange={handleChange} name='Photography'/>}
      /> <br></br>
      </div>
    </FormGroup>
    </FormControl>
   
     <br></br>

       <button className="button_to_results">
       <Link to={{
        pathname: "/Results_page",
        state: {
          occasion: occasion,
          interest: {
            Travel:state.Travel, 
            Sports:state.Sports, 
            Camping:state.Camping, 
            Photography:state.Photography, 
            Cooking:state.Cooking
          }
        }
    
        }}>
       <div>See results</div>
       </Link>
       </button>

      </div>
    );
  }; 


export default Interests_page;
