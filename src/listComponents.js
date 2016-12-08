import React from 'react';
import ReactDOM from 'react-dom';

let data = ['asd', 'fds', 'afaf', 'ebef', '3fre', 'bnij'];

class ListElt extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('handling click in ListElt');
    this.props.updateSelected(this.props.string);
  }

  render() {
    console.log('randering ListElt:', this.props.string);
    let style = this.props.selected?{color: 'red'}:{};
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
    this.state = {
      selected: ''
    }
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(string) {
    console.log('handling ListCtrl.updateSelected');
    this.setState({selected: string});
  }

  render() {
    console.log('randering ListCtrl');
    let list = data.map((string, idx) => {
      return <ListElt
        string={string}
        key={idx}
        selected={this.state.selected===string?true:false}
        updateSelected={this.updateSelected}/>;
    });

    return (
      <ul onClick={this.handleClick}>
        {list}
      </ul>
    );
  }
}
