import React from 'react';
import styled from 'styled-components';

console.log('modal photo');

const ModalPhoto = (props) => {
  return (
    <Image
      className="photo"
      src={props.url}
    />

  );
};

const Image = styled.img`
  height: 400px;
  width: 800px;
`;

export default ModalPhoto;