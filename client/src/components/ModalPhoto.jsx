import React from 'react';
import styled from 'styled-components';

console.log('modal photo');

const ModalPhoto = (props) => {
  return (
    <img
      className="photo"
      src={props.url}
    />

  );
};

export default ModalPhoto;