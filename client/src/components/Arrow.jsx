import React from 'react';
import styled from 'styled-components';

console.log('arrow');

const ArrowContainer = styled.div`
  position: absolute;
  border: solid;
  display: block;
  cursor: pointer;
  opacity: .75;
  background-color: light-grey;
  &: focus {
    outline: 1;
  }
  &:hover {
    background-color: yellow;
  }
`;

const Arrow = (props) => {
  return (
    <ArrowContainer>
      <div className="arrow" onClick={props.onClick} >
        {props.symbol}
      </div>

    </ArrowContainer>
  )
}

export default Arrow;