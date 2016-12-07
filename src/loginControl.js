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
    this.state = {
      logged: false,
      buttonCaption: 'Login',
      handling: false
    };
    this.handleLogButtonClick = this.handleLogButtonClick.bind(this);
  }

  handleLogButtonClick() {
    this.setState({
      handling: true
    });
    this.handleLog();
  }

  handleLog() {
    setTimeout(
      () => {
        //handle finished
        let logged = this.state.logged;
        let caption = logged ? 'Login' : 'Log off';
        this.setState({
          handling: false,
          logged: !logged,
          buttonCaption: caption
        });
      },
      7000
    );
    this.handleButtonCaption();
  }

  handleButtonCaption() {
    let timerId = setInterval(
      () => {
        this.setState( (prevState) => {
          if (prevState.handling === false) {
            clearInterval(timerId);
            return prevState;
          }
          let caption = prevState.buttonCaption + '.';
          return {buttonCaption: caption};
        });//{buttonCaption: caption});
      },
      1500
    );
  }

  render() {
    let info = null;
    let button = <button onClick = {this.handleLogButtonClick}>{this.state.buttonCaption}</button>;
    if (this.state.logged) {
      info = <WelcomeInfo />;
    }
    else {
      info = <LoginInfo />;
    }

    return (
      <div>
        {info}
        {button}
      </div>
    );
  }
}
