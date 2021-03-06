import React, {Component} from 'react';
import CONFIG from '../config';

const alarmListKey = CONFIG.alarmListKey;

class AlarmSet extends Component {
    componentDidMount(){
        // Create all dates made from store...
    }
    
    updateAlarm = ( event ) => {
        this.setState({ currentAlarm: event.target.value });
        console.log(this.state);
    }

    checkState = ( event ) => {
        console.log(this.state);
    }

    addAlarm = ( event ) => {
        // const newList = [
        //     {id: 1, date: new Date()},
        //     {id: 2, date: new Date(98, 1)}
        // ];
        // console.log(newList);
        // localStorage.setItem(alarmListKey, JSON.stringify(newList));
        // console.log(Array.isArray(newList));
    }

    render() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0
        let yyyy = today.getFullYear();

        if(dd<10){
            dd='0'+dd
        } 

        if(mm<10){
            mm='0'+mm
        } 

        today = yyyy+'-'+mm+'-'+dd;
        let fiveYears = (yyyy+5) +'-'+mm+'-'+dd;
        let input = <input type="datetime-local" id="newAlarm" className="dateInput" min={today} max={fiveYears} onChange={this.updateAlarm}></input>;

        let offSetHours = <input type="number" className="timeInput" defaultValue="0"></input>;
        let offSetMin = <input type="number" className="timeInput" defaultValue="0"></input>;
        let offSetSec = <input type="number" className="timeInput" defaultValue="0"></input>;

        return (<div>
            {input}
            <button onClick={this.checkState}>Add Alarm</button>
            <br />
            <br />
            {offSetHours} h 
            {offSetMin} m
            {offSetSec} s
        </div>);
    }
}

export default AlarmSet;