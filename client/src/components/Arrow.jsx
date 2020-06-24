import React from 'react';
import styled from 'styled-components';

console.log('arrow');

const Arrow = (props) => {
  return (
    <ArrowImage
      onClick={props.onClick}
      // alt="navigation-arrow"
      // src={props.direction === 'right' ? 'right-arrow.png' : 'left-arrow.png'}
    >
    {props.symbol}
    </ArrowImage>
  );
};

const ArrowImage = styled.div`
  position: absolute;
  // display: flex;
  margin: auto;
  font-weight: bold;
  width: 60px;
  height: 60px;
  background-color: #2c2c2c;
  text-align: center;
  float: right;
  cursor: pointer;
  // bottom: 100px;
  // align-items: center;
  // justify-content: center;
  // right: ${(props) => (props.direction === 'right' ? '25px' : '0px')};
  // left: ${(props) => (props.direction === 'left' ? '25px' : '0px')};
  // ${(props) => (props.direction === 'right' ? 'color: red' : 'left: 25px')};
  // display: inline-block
  // padding: 5px;
  // border-radius: 3px 0px 0px 3px;
  // margin: -30px;
  // opacity: 50%;
  // &: focus {
  //   outline: 1;
  // }
  &:hover {
    background-color: yellow;
  }
`;

export default Arrow;