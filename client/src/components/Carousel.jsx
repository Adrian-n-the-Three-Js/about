import React from 'react';
import CarouselContent from './CarouselContent.jsx';
import Photo from './Photo.jsx';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';

console.log('carousel');

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0
    }
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  previousPhoto() {
    console.log('previous photo');
    const lastIndex = this.props.preview.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== 0 ? currentPhotoIndex - 1 : null;
    this.setState({
      currentPhotoIndex: index
    });
  }

  nextPhoto() {
    console.log('next photo');
    const lastIndex = this.props.preview.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== lastIndex ? currentPhotoIndex + 1 : null;
    this.setState({
      currentPhotoIndex: index
    });
  }

  render() {
    // this.props.preview.length && console.log('image', this.props.hotel[0]);

    const CarouselWrapper = styled.div`
      display: flex;
      cursor: pointer;
      height: 30vh;
      width: 30wh;
      margin: 0 auto;
      overflow: hidden;
    `;

    return (
      <div>

        <CarouselWrapper>

        {(this.state.currentPhotoIndex - 1 >= 0) &&
        <Arrow
          direction='left'
          symbol='&#9664;'
          onClick={this.previousPhoto}
          />}

        {<Photo url={this.props.preview[this.state.currentPhotoIndex]['imageUrl']} />}

        {/* {
          this.props.preview.length &&
          <img src={this.props.preview[this.state.currentPhotoIndex]['imageUrl']}/>
        } */}

        {(this.state.currentPhotoIndex + 1 <= this.props.preview.length - 1) &&
        <Arrow
          direction='right'
          symbol='&#9654;'
          onClick={this.nextPhoto}
        />}

        </CarouselWrapper>

      </div>
    )
  }
}

export default Carousel;