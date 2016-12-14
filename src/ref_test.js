import React from 'react';
import ReactDOM from 'react-dom';

/*
  This is just pasted code from:
  https://facebook.github.io/react/docs/refs-and-the-dom.html
*/

export class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.refs.text_input.focus();
    //this.text_input.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    return (
      <div>
        <input
          type="text"
          //ref={(self) => this.text_input = self }
          ref="text_input"
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}
