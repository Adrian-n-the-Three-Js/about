import React from 'react';
import styled from 'styled-components';

console.log('photo');

const Image = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;

const Photo = (props) => {
  console.log('photo url', props.url)
  return (
    <Image
      className="photo"
      src={props.url}
      onClick={() => { props.toggleModal(props.album) }}
    />
  );
};

export default Photo;
