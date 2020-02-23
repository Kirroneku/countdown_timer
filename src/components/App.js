import React, { Component } from 'react';
import Time from './Time';
import AlarmSet from './AlarmSet';

class App extends Component {
    render() {
        return (
            <div>
                Countdown Clock
                <Time/>
                <AlarmSet />
            </div>
        )
    }
}

export default App;