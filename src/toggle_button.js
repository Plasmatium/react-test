//--------toggle_button.js---------
//class Toggle
import React from 'react';
import ReactDOM from 'react-dom';


class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {toggled: props.toggled ? true : false};
  }

  handleClick() {
    setTimeout(
      () => {
        this.setState({toggled: !this.state.toggled});
        console.log('-------', this.state.toggled);
      },
      300
    );
  }

  render() {
    console.log('....', this.state.toggled);
    return (
      <button onClick={this.handleClick.bind(this)}>{this.state.toggled.toString()}</button>
    )
  }
}

exports.Toggle = Toggle;
