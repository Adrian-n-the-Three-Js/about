import React from 'react';
import ModalPhoto from './ModalPhoto.jsx';
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
    const lastIndex = this.props.hotel.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== 0 ? currentPhotoIndex - 1 : null;
    this.setState({
      currentPhotoIndex: index,
    });
  }

  nextPhoto() {
    console.log('next photo');
    const lastIndex = this.props.hotel.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== lastIndex ? currentPhotoIndex + 1 : null;
    this.setState({
      currentPhotoIndex: index
    });
  }

  render() {

    console.log('props', this.props);

    return (
      <div>
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

export default ModalCarousel;