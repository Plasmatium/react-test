import React from 'react';
import ReactDOM from 'react-dom';

let data = ['asd', 'fds', 'afaf', 'ebef', '3fre', 'bnij'];

class ListElt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick(x,y,z,a,b,c) {
    this.setState({selected: true});
    console.log('li');
    console.log(x,y,z,a,b,c);
  }

  handleBlur() {
    this.setState({selected: false});
  }

  render() {
    let style = this.state.selected?{color:"red"}:{};

    return <li
      onClick={this.handleClick}
      //onBlur={this.handleBlur}
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

  handleClick(x,y,z,a,b,c) {
    console.log('ul');
    console.log(x,y,z,a,b,c);
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
