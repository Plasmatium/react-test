import React from 'react';
import ReactDOM from 'react-dom';

export class CompRef extends React.Component {
  constructor(props) {
    super(props);
    this.make_input = this.make_input.bind(this);
  }

  make_input(n) {
    let arr = Array(n).fill('n');
    let rslt = arr.map((elt, idx) => {
      return <input key={idx} defaultValue={elt+idx} />;
    });
    return rslt;
  }


  render() {
    let comp = <ChildComp nums={10}>
      {this.make_input}
    </ChildComp>;
    return comp;
  }
}

class ChildComp extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let items = this.props.children(this.props.nums);
    let r = <div>{items}</div>;
    return r;
  }
}
