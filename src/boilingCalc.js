import React from 'react';
import ReactDOM from 'react-dom';

function c2f(c) {
  return c * 9 / 5 + 32;
}
function f2c(f) {
  return (f - 32) * 5 / 9;
}

function convert(temp, mode) {
  temp = Number(temp);
  if(isNaN(temp)) {
    return '';
  }

  if(mode === 'c2f') {
    return c2f(temp);
  }
  else if(mode === 'f2c') {
    return f2c(temp);
  }
  else {
    return '';
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.string};
    console.log('--------', this.state);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    let v = e.target.value;
    this.setState({value: v});
    this.props.updateOther(v, this.props.mode);
  }

  render () {
    console.log('Input rending', this);
    return <input
      value={this.state.value}
      onChange={this.handleChange}></input>
  }
}

exports.BoilingCalc = class BoilingCalc extends React.Component {
  //props.title
  //
  constructor(props) {
    super(props);
    this.state = {degC: 0, degF: 32};
    this.updateOther = this.updateOther.bind(this);
  }

  updateOther(v, mode) {
    if(mode==='c') {
      this.setState({degC: v, degF: c2f(v)});
    }
    else if(mode==='f') {
      this.setState({degF: v, degC: f2c(v)});
    }
  }

  render() {
    let frameC = <fieldset>
      <legend>{'degC'}</legend>
      <Input
        key={Date.now()}
        string={this.state.degC}
        updateOther={this.updateOther}
        mode={'c'} />
    </fieldset>;

    let frameF = <fieldset>
      <legend>{'degF'}</legend>
      <Input
        key={Date.now()}
        string={this.state.degF}
        updateOther={this.updateOther}
        mode={'f'} />
    </fieldset>;

    return <div>
      {frameC}
      {frameF}
    </div>;
  }
}
