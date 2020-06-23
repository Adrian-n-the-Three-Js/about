import React from 'react';
import styled from 'styled-components';

console.log('photo');

const Photo = (props) => {

  const PhotoContainer = styled.div`
    background: url(${props.url}) center no-repeat;
    padding: 100px;
    // backgroundSize: cover;
    `;


  return (
  <div>
    <PhotoContainer>
      testjksejtflksdjkfljsdf

    </PhotoContainer>
  </div>
  )
}

export default Photo;