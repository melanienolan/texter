import React, { Component } from 'react';
import ClipboardButton from 'react-clipboard.js';
import Input from './Components/Input';
import Output from './Components/Output';
import ClearButton from './Components/ClearButton';
import EmojiButton from './Components/EmojiButton';
import Count from './Components/Count';
import logo from './logo.svg';
import './App.css';

const emojis = [0x1f499, 0x1f49a, 0x1f49b, 0x1f49c, 0x1f495];

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      count: 0,
      emoji: emojis[0]
    };
  }
  onInputChange(value) {
    let sign = String.fromCodePoint(this.state.emoji);
    let newValue = value.split(' ').join(` ${sign} `);
    this.setState({
      value: newValue,
      count: newValue.length
    });
  }
  onClearClick() {
    this.setState({
      value: '',
      count: 0
    });
  }
  onEmojiClick() {
    let index = emojis.findIndex(emoji => emoji === this.state.emoji);
    index = index < emojis.length - 1 ? ++index : 0;
    this.setState({
      emoji: emojis[index]
    });
  }
  render() {
    return (
      <div>
        <Input onInputChange={value => this.onInputChange(value)} />
        <Output value={this.state.value} />
        <Count count={this.state.count} />
        <ClipboardButton
          data-clipboard-text={this.state.value}
          button-title="Copy to clipboard">
          Copy
        </ClipboardButton>
        <ClearButton onClearClick={() => this.onClearClick()} />
        <EmojiButton
          emoji={String.fromCodePoint(this.state.emoji)}
          onEmojiClick={() => this.onEmojiClick()}
        />
      </div>
    );
  }
}

export default App;
