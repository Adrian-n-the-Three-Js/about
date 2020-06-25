import React from 'react';
import styled from 'styled-components';

console.log('photo');

const Photo = (props) => {
  return (
    <Image
      className="photo"
      src={props.url}
      onClick={() => { props.toggleModal(props.album) }}
    />
  );
};

const Image = styled.img`
  height: 270px;
  width: 370px;
  // padding: 5px;
  // flex: 1;
  // position: relative;
  // margin: 1px;
  // flex-shrink: 1;
  // padding: 0;
  // // width: 100%;
  // height: 50px;
  // display: block;
`;

export default Photo;
