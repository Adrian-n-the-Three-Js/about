import React from 'react';
import styled from 'styled-components';

console.log('arrow');

const ArrowContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border: solid;
  display: block;
  cursor: pointer;
  opacity: .75;
  background-color: light-grey;
  right: 1rem;
  // &: focus {
  //   outline: 1;
  // }
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