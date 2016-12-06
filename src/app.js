import React from 'react';
import ReactDOM from 'react-dom';

require('./style.css');
let utils = require('./utils');
let Toggle = require('./toggle_button').Toggle;
let Clock = require('./Clock').Clock;
let LoginControl = require('./loginControl').LoginControl;

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);



































/*
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <a href="http://www.baidu.com" onclick="console.log('The link was clicked.'); return false">Click me!</a>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
*/
