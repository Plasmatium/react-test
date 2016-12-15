/* This is test for:
   https://facebook.github.io/react/docs/optimizing-performance.html
   About React.PureComponent, power of not mutating data.
*/
import React from 'react';
import ReactDOM from 'react-dom';

export class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props.color);
    this.state = {count: 1, color: Number(this.props.color.slice(1))};
  }

  render() {
    console.log(typeof this.state.color);
    return (
      <button
        color={'#'+this.state.color.toString(16)}
        onClick={() => {
          console.log(this.state)
          this.setState(
            {count: this.state.count+1, color: this.state.color+5});
          }
        }>
        Count: {this.state.count}
      </button>
    );
  }
}

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

export class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
