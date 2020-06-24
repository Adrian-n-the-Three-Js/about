import React from 'react';
// import CarouselContent from './CarouselContent.jsx';
import Photo from './Photo.jsx';
import CarouselPhotostrip from './CarouselPhotostrip.jsx';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';

console.log('carousel');

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0,
    };
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.photostripClick = this.photostripClick.bind(this);
  }

  previousPhoto() {
    console.log('previous photo');
    const lastIndex = this.props.preview.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== 0 ? currentPhotoIndex - 1 : null;
    this.setState({
      currentPhotoIndex: index,
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

  photostripClick(index) {
    console.log('photostrip click');
    this.setState({ currentPhotoIndex: index });
  }

  render() {
    // this.props.preview.length && console.log('image', this.props.hotel[0]);
    return (
      <div>

        {(this.state.currentPhotoIndex - 1 >= 0) && (
          <Arrow
            direction="left"
            symbol="&#9664;"
            onClick={this.previousPhoto}
          />
        )}

        {/* {
          this.props.preview.length &&
          <img src={this.props.preview[this.state.currentPhotoIndex]['imageUrl']}/>
        } */}

        <PhotoContainer>
          <Photo url={this.props.preview[this.state.currentPhotoIndex].imageUrl} />
        </PhotoContainer>

        {(this.state.currentPhotoIndex + 1 <= this.props.preview.length - 1) && (
          <Arrow
            direction="right"
            symbol="&#62;"
            onClick={this.nextPhoto}
          />
        )}

        <PhotostripWrapper>
          {this.props.preview.map((one, index) => (
            <CarouselPhotostrip
              // key={one._id}
              index={index}
              photo={one.imageUrl}
              caption={one.caption}
              onClick={this.photostripClick}
            />
          ))}
        </PhotostripWrapper>

      </div>
    );
  }
}

const PhotoContainer = styled.div`
  height: 270px;
  width: 370px;
`;

const PhotostripWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 370px;

  // display: flex;
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
  //   width: 100%;
  //   height: 265px;
  //   outline: 5px solid #fc2003;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  }
`;

export default Carousel;
