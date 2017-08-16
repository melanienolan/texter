import React, { Component } from 'react';

const Input = props => {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Enter text"
        onChange={e => props.onInputChange(e.target.value)}
      />
    </form>
  );
};

export default Input;
