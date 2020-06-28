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

    // {props.direction === 'left' &&
    // <ArrowButton>
    //   <svg viewBox="0 0 32 32" className="icon icon-chevron-left" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
    // </ArrowButton>}

    <ModalArrowWrapper className="arrow"
      onClick={props.onClick}
    >
    {props.symbol}
    </ModalArrowWrapper>
  );
};



export default ModalArrow;
