import React from 'react';

console.log('arrow');

const Arrow = (props) => {
  return (
    <div onClick={props.onClick} >
      {props.symbol}
    </div>
  )
}

export default Arrow;