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
    this.state = {value: this.props.value};
    console.log('--------', this.state);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    console.log(e);
    let v = e.target.value;
    this.setState({value: v});
    this.props.updateOther(v, this.props.mode);
  }

  render () {
    debugger;
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
    this.updateOther = this.updateOther.bind(this);
    this.state = {c: 0, f: 32};
  }

  updateOther(v, mode) {
    if(mode==='c') {
      this.setState({f: c2f(v)});
      this.setState({c: v});
    }
    else if(mode==='f') {
      this.setState({c: f2c(v)});
      this.setState({f: v});
    }
  }

  render() {
    debugger;
    let frameC = <fieldset>
      <legend>{'degC'}</legend>
      <Input
        value={this.state.c}
        updateOther={this.updateOther}
        mode={'c'} />
    </fieldset>

    let frameF = <fieldset>
      <legend>{'degF'}</legend>
      <Input
        value={this.state.f}
        updateOther={this.updateOther}
        mode={'f'} />
    </fieldset>

    return <div>
      {frameC}
      {frameF}
    </div>;
  }
}
