import { Component } from 'react';
import './Clock.scss';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalID = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}

export default Clock;
