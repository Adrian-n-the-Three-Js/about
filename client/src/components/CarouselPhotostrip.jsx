import React from 'react';
import styled from 'styled-components';

console.log('album toggle');

const CarouselPhotostrip = (props) => {
  return (
    <Image className="photostrip"
      alt={props.caption}
      src={props.photo}
      onClick={ () => props.onClick(props.index) }
    />
  );
};

const Image = styled.img`
  flex: 1;
  max-height: 100px
  // position: relative;
  // margin: 1px;
  // flex-shrink: 1;
  // padding: 0;
  // // width: 100%;
  // height: 50px;
  // display: block;
`;

export default CarouselPhotostrip;
