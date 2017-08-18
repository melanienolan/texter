import React from 'react';
import glamorous from 'glamorous';

const StyledTextarea = glamorous.textarea({});

const Output = props => {
  return <StyledTextarea value={props.value} />;
};

export default Output;
