import React from 'react';
import styled from 'styled-components';

console.log('modal arrow');

const ModalArrow = (props) => {
  return (
    <ArrowImage className="arrow"
      onClick={props.onClick}
    >
    {props.symbol}
    </ArrowImage>
  );
};

export default ModalArrow;

const ArrowImage = styled.div`
  position: absolute;
`;
