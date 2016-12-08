import React from 'react';
import ReactDOM from 'react-dom';

let data = ['asd', 'fds', 'afaf', 'ebef', '3fre', 'bnij'];

class ListElt extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.updateSelected(this.props.string);
  }

  render() {
    let style = this.props.selected?{color: red}:{};
    return <li
      onClick={this.handleClick}
      style={style}>
        {this.props.string}
      </li>
  }
}

exports.ListCtrl = class ListCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(prox, event) {
    debugger;
  }

  render() {
    let list = data.map((string, idx) => {
      return <ListElt string={string} key={idx}/>;
    });

    return (
      <ul onClick={this.handleClick}>
        {list}
      </ul>
    );
  }
}
