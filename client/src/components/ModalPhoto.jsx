import React from 'react';
import styled from 'styled-components';

console.log('modal photo');

const Image = styled.img`
  max-height: 100%;
  min-height: 200px;
  max-width: 100%;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ModalPhoto = (props) => {
  console.log('props', props);
  console.log('props', props.caption);
  console.log('props', props.helpfulVotes);
  return (
    <div>
      <Image
        className="photo"
        src={props.url}
      />
      {/* <img src={props.userAvatar}/>
      <div>{props.caption}</div>
      <div>{props.helpfulVotes}</div> */}
    </div>

  );
};

export default ModalPhoto;
