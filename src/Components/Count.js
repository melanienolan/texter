import React from 'react';
import glamorous from 'glamorous';

const PTag = glamorous.p({});

const Count = props => {
  return (
    <PTag>
      {props.count}
    </PTag>
  );
};

export default Count;
