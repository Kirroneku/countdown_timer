import React, { Component } from 'react';
import Time from './Time';
import AlarmSet from './AlarmSet';
import AlarmList from './AlarmList';

class App extends Component {
    render() {
        return (
            <div>
                Countdown Clock
                <Time/>
                <AlarmSet />
                <AlarmList />
            </div>
        )
    }
}

export default App;