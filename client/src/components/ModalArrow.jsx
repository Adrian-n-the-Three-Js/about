import React from 'react';
import styled from 'styled-components';

console.log('modal arrow');

const ModalArrow = (props) => {

  const ModalArrowWrapper = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: yellow;
  ${props.direction === 'right' ? 'right: 25px' : 'left: 25px'}
`;

  console.log(props.direction);

  return (
    <ModalArrowWrapper className="arrow"
      onClick={props.onClick}
    >
    {props.symbol}
    </ModalArrowWrapper>
  );
};



export default ModalArrow;
