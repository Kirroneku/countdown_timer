import React, {Component} from 'react';

class Time extends Component {
    state = {
        time: new Date()
    }

    componentDidMount() {
        this.getTime();
    }

    componentWillUnmount() {
        // console.log('Title component has unmounted');

        clearInterval( this.interval );
        // clearTimeout( this.timeout );
    }

    getTime() {
        this.interval = setInterval(() => this.setState({time: new Date()}), 1000 );
        // this.forceUpdate();
    }

    render() {
        console.log(this.state.time.toLocaleTimeString());

        return(
            <div>
                <p>Local Time: {this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }

}

export default Time;