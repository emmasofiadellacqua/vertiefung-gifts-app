import React from 'react';
import Scheduler from '../components/Scheduler';
import "./Calendar_page.css";
import {Link} from 'react-router-dom';
 
const data = [
    { start_date:'2021-07-10 6:00', end_date:'2021-07-10 8:00', text:'Birthday Party Sarah', id: 1 },
    { start_date:'2021-07-13 10:00', end_date:'2021-07-13 18:00', text:'Graduation Lukas', id: 2 },
    { start_date:'2021-07-15 15:00', end_date:'2021-07-15 21:00', text:'Anniversary Dinner Anna', id: 3 },
    { start_date:'2021-08-10 10:00', end_date:'2021-08-12 20:00', text:'Anniversary Mum and Dad', id: 4 }
];

const Calendar_page = () => {
    return (
        <div className="calendar_wrapper">
            <div className='scheduler-container'>
                <Scheduler events={data}/>
            </div>
            <div className="button_to_home_calendar">
        <button className="calendar_home_button"><Link to="/Home_page" className="Link">Back to Home</Link></button>
        </div>
        </div>
    );
}

 export default Calendar_page;