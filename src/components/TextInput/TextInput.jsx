import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class TextInput extends Component {
  render() {
    return (
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="search placeholder"
      />
    );
  }
}

export default TextInput;