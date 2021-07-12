import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './Scheduler.css';

const scheduler = window.scheduler;
 
export default class Scheduler extends Component {

    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'date',
            'prev',
            'today',
            'next'
        ];
        scheduler.config.hour_date = '%G:%i';
        scheduler.config.week_date = '%D';
        scheduler.xy.scale_width = 40;
 
        const { events } = this.props;
        scheduler.config.resize_month_events = true;
        scheduler.config.resize_month_timed= true;  
        scheduler.init(this.schedulerContainer, new Date(2021, 6, 10), "month");
        scheduler.clearAll();
        scheduler.parse(events);
    }
    
    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }
            ></div>
       );
    }
}