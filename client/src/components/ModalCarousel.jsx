import React from 'react';
import ModalPhoto from './ModalPhoto.jsx';
import ModalArrow from './ModalArrow.jsx';
import styled from 'styled-components';

console.log('modal carousel');

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0,
    };
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  previousPhoto() {
    console.log('previous photo');
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== 0 ? currentPhotoIndex - 1 : currentPhotoIndex;
    this.setState({
      currentPhotoIndex: index,
    });
  }

  nextPhoto() {
    console.log('next photo');
    const lastIndex = this.props.album.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== lastIndex ? currentPhotoIndex + 1 : currentPhotoIndex;
    this.setState({
      currentPhotoIndex: index,
    });
  }

  render() {

    console.log('props', this.props);

    return (
      <div>
        {/* <ModalArrowWrapper> */}

        <ModalArrow
          className="arrow"
          direction="left"
          symbol="&#60;"
          onClick={this.previousPhoto}
        />
        {/* </ModalArrowWrapper> */}

        {/* <ModalArrowWrapper> */}

        <ModalArrow
          className="arrow"
          direction="right"
          symbol="&#62;"
          onClick={this.nextPhoto}
        />
        {/* </ModalArrowWrapper> */}

        <ModalPhoto
          user={this.props.album[this.state.currentPhotoIndex].user}
          userAvatar={this.props.album[this.state.currentPhotoIndex].userAvatarUrl}
          caption={this.props.album[this.state.currentPhotoIndex].caption}
          url={this.props.album[this.state.currentPhotoIndex].imageUrl}
          helpfulVotes={this.props.album[this.state.currentPhotoIndex].helpfulVotes}
          date={this.props.album[this.state.currentPhotoIndex].datePosted}
        />

      </div>
    );
  }
};

// const ModalArrowWrapper = styled.div`
//   position: absolute;
//   width: 60px;
//   height: 60px;
//   // background: yellow;
//   ${props => props.direction === 'right' ? 'background: yellow' : 'background: blue'}
//   // ${props => props.direction === 'right' ? 'right: 25px' : 'left: 25px'}
// `;

// const ModalArrowContainer = styled.div`
//   flex: 1;
//   background: rgba(0,0,0,.32);
//   width: 60px;
//   height: 60px;
//   text-align: right:
//   cursor: pointer;
//   // margin-top: -30px;
//   // justify-content: start-end;
// `;

export default ModalCarousel;
