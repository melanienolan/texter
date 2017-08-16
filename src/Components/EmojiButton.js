import React from 'react';

const EmojiButton = props => {
  return (
    <button onClick={() => props.onEmojiClick()}>
      {props.emoji}
    </button>
  );
};

export default EmojiButton;
