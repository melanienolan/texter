import React from 'react';
import glamorous from 'glamorous';

const StyledEmojiButton = glamorous.button({});

const EmojiButton = props => {
  return (
    <StyledEmojiButton onClick={() => props.onEmojiClick()}>
      {props.emoji}
    </StyledEmojiButton>
  );
};

export default EmojiButton;
