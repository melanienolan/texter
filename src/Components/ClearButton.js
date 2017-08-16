import React from 'react';

const ClearButton = props => {
  return <button onClick={() => props.onClearClick()}>Clear</button>;
};

export default ClearButton;
