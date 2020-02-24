import React, {Component} from 'react';
import CONFIG from '../config';

const alarmListKey = CONFIG.alarmListKey;

const Alarm = (props) => {
    return (
        <p>{props.timer.toString()}</p>
    );
    
}

class AlarmList extends Component {
    getAlarms = () => {
        return JSON.parse(localStorage.getItem(alarmListKey));
    }

    render() {
        let currentAlarms = this.getAlarms();
        console.log(currentAlarms);
        return (<div>
            {currentAlarms.map(ALARM => {
                return(
                    <div key={ALARM.id}>
                        <Alarm timer={ALARM.date}  />
                    </div>
                );
            })}
        </div>);
    }
}

export default AlarmList;