import React, { Component } from 'react';
import { Input as RInput } from 'reactstrap';

class Input extends Component {
  render() {
    const {type, value, onChange, placeholder} = this.props;

    return (
      <RInput
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;