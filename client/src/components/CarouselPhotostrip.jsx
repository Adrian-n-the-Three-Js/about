import React from 'react';
import styled from 'styled-components';

console.log('album toggle');

const PhotostripWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 370px;

  // flex-wrap: wrap;
  // border: 1px solid blue;
  // max-width: 50px;
  // max-height: 50px;
  // margin: 1px -1px -1px;
  // padding: 0;
  // cursor: pointer;
  // // height: 5px;
  // // width: 5px
  // overflow: hidden;
`;

const PhotoStrip = styled(PhotostripWrapper)`
  position: relataive:
  width: 100px;
  height: 100px;

  // margin: 0 auto;
  // &:after {
  //   content: '';
  //   display: block;
  //   outline: 5px solid #fc2003;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  }
`;

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

const CarouselPhotostrip = (props) => {
  return (
    <Image
      className="photostrip"
      alt={props.caption}
      src={props.photo}
      onClick={() => props.onClick(props.index)}
    />
  );
};

export default CarouselPhotostrip;
