import React from 'react';
import ReactDOM from 'react-dom';

function LoginInfo() {
  return <h2>Please login first!</h2>;
}

function WelcomeInfo() {
  return <h2>Welcome!</h2>;
}

exports.LoginControl = class LoginControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = {logged: false};
    this.handleLogButtonClick = this.handleLogButtonClick.bind(this);
  }

  handleLogButtonClick() {
    this.setState({logged: !this.state.logged});
  }

  render() {
    let button = null;
    let info = null;
    if (this.state.logged) {
      info = <WelcomeInfo />;
      button = <button onClick = {this.handleLogButtonClick}>Log off</button>;
    }
    else {
      info = <LoginInfo />;
      button = <button onClick = {this.handleLogButtonClick}>Login</button>;
    }

    return (
      <div>
        {info}
        {button}
      </div>
    );
  }
}
