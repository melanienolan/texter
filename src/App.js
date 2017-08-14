import React, { Component } from 'react';
import Input from './Components/Input';
import Output from './Components/Output';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  onInputChange(value) {
    let sign = String.fromCodePoint(0x1f49c);
    let newValue = value.split(' ').join(` ${sign} `);
    this.setState({
      value: newValue
    });
  }
  render() {
    return (
      <div>
        <Input onInputChange={value => this.onInputChange(value)} />
        <Output value={this.state.value} />
      </div>
    );
  }
}

export default App;
