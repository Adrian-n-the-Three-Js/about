import React from 'react';
import styled from 'styled-components';
// import leftArrow from '../../dist/left-arrow.png';

console.log('arrow');

// const clipart = 'https://www.pinclipart.com/picdir/big/173-1732997_clipart-free-library-left-svg-png-icon-free.png';

const Arrow = (props) => {
  return (
    <ArrowImage
      onClick={props.onClick}
      src={props.direction === 'right' ? 'right-arrow.png' : 'left-arrow.png'}
    />
  );
};

// const ArrowContainer = styled.div`
//   background-color: grey;
// `;

const ArrowImage = styled.img`
  position: absolute;
  background-color: #2c2c2c;
  // opacity: 50%;
  border-radius: 3px 0px 0px 3px;
  width: 60px;
  height: 60px;
  top: 50%;
  // justify-content: center;
  // align-items: center;
  cursor: pointer;
  ${(props) => (props.direction === 'right' ? 'right:25px' : 'left: 25px')};
  // &: focus {
  //   outline: 1;
  // }
  &:hover {
    background-color: yellow;
  }
`;

// const ArrowContainer = styled.img`
//   display: block;
//   position: absolute;
//   z-index: 1;
//   top: 50%;
//   width: 60px;
//   height: 60px;
//   margin-top: -30px;
//   border-radius: 3px 0 0 3px;
//   justify-content: center;
//   align-items: center;
//   background-color: light-grey;
//   border: solid;
//   // boder-radius: 50%;
//   cursor: pointer;
//   opacity: .75;
//   ${(props) => (props.direction === 'right' ? 'right:25px' : 'left: 25px')};
//   // &: focus {
//   //   outline: 1;
//   // }
//   &:hover {
//     background-color: yellow;
//   }
// `;

// const Image = styled.img`
//   height: 20vh;
//   width: 20wh;
// `;

export default Arrow;

{/* {props.symbol} */}