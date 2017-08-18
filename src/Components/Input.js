import React from 'react';
import glamorous from 'glamorous';

const StyledInput = glamorous.input({});

const Input = props => {
  return (
    <StyledInput
      type="text"
      placeholder="Enter text"
      onChange={e => props.onInputChange(e.target.value)}
    />
  );
};

export default Input;
