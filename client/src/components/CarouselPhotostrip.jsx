import React from 'react';
import styled from 'styled-components';

console.log('album toggle');

// const PhotoStrip = styled(PhotostripWrapper)`
//   position: relataive:
//   width: 100px;
//   height: 100px;

//   // margin: 0 auto;
//   // &:after {
//   //   content: '';
//   //   display: block;
//   //   outline: 5px solid #fc2003;
//   //   position: absolute;
//   //   top: 0;
//   //   left: 0;
//   }
// `;

const Image = styled.img`
  flex: 1;
  width: 100%;
  min-width: 0;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  opacity: ${(props) => (props.index === props.displayedPhotoIndex ? '1.0' : '50%')};
  &:hover {
    opacity: 1.0;
  }
  // position: relative;
`;

const CarouselPhotostrip = (props) => {
  // console.log('photostrip url', props.photo)
  return (
    <Image
      className="photostrip"
      index={props.index}
      displayedPhotoIndex={props.displayedPhotoIndex}
      alt={props.caption}
      src={props.photo}
      onClick={() => props.onClick(props.index)}
    />
  );
};

export default CarouselPhotostrip;
