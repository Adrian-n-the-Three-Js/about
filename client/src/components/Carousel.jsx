import React from 'react';
import Photo from './Photo.jsx';
import AlbumPhotoCount from './AlbumPhotoCount.jsx';
import CarouselPhotostrip from './CarouselPhotostrip.jsx';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';

console.log('carousel');

const PhotoContainer = styled.div`
  display: flex;
  height: 270px;
  width: 370px;
  // justify-content: space-evenly;
  // align-items: center;
  // flex-direction: column;
`;

const PhotostripWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  // justify-content: space-evenly;
  height: 50px;
  width: 370px;
  padding: 2px 0px 2px 0px;
  // margin: 1px -1px -1px;
  // padding: 0;
  // overflow: hidden;
`;

const ArrowButton = styled.button`
  // display: flex;
  position: absolute;
  width: 60px;
  height: 60px;
  cursor: pointer;
  // background-color: #2c2c2c;
  background-color: rgba(0,0,0, .32);
  border: 0;
  // opacity: 50%;
  top: 35%;
  // text-align: center;
  ${(props) => (props.direction === 'right' ? 'right: 0%' : 'left: 0%')};
  ${(props) => (props.visible ? 'visibility: visible' : 'visibility: hidden')};
  // ${props => props.direction === 'right' ? 'align-self: flex-end' : 'align-self: flex-start'};
  .icon {
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.2em;
    width: 2.5em;
    height: 2.5em;
    font-weight: bold;
    overflow: hidden;
  }
  .icon-chevron-left {
    transform: rotate(180deg);
  }
  &:focus {
    outline: none;
  }
  &:hover {
    // background-color: yellow;
    background-color: rgba(44,44,44, .50);
  }
`;

// const AlbumPhotoCountContainer = styled.div`

// `;

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
    console.log('next photo', 'currentIndex', this.state.currentPhotoIndex);
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
    console.log('props', this.props.preview);
    console.log('props0', this.props.preview[0][0]);

    return (
      <div>
        <PhotoContainer>

          <ArrowButton
            direction="left"
            photoIndex={this.state.currentPhotoIndex}
            visible={this.state.currentPhotoIndex - 1 >= 0 ? true : false}
            onClick={this.previousPhoto}
          >
            <svg viewBox="0 0 32 32" className="icon icon-chevron-left" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
            {/* <svg viewBox="0 0 32 32" className="icon icon-chevron-left" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg> */}

          </ArrowButton>

          <ArrowButton
            direction="right"
            photoIndex={this.state.currentPhotoIndex}
            visible={(this.state.currentPhotoIndex + 1 <= this.props.preview.length - 1) ? true : false}
            onClick={this.nextPhoto}
          >
            <svg viewBox="0 0 32 32" className="icon icon-chevron-right" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>

          </ArrowButton>

          {/* <ArrowButton
            // direction="left"
            // symbol="&#60;"
            onClick={this.previousPhoto}>
          </ArrowButton>

          <ArrowButton
            // direction="right"
            // symbol="&#62;"
            onClick={this.nextPhoto}>
          </ArrowButton> */}

          {/* {(this.state.currentPhotoIndex - 1 >= 0) && (
            <Arrow className="arrow"
              direction="left"
              symbol="&#60;"
              onClick={this.previousPhoto}
            />
          )}

          {(this.state.currentPhotoIndex + 1 <= this.props.preview.length - 1) && (
            <Arrow className="arrow"
              direction="right"
              symbol="&#62;"
              onClick={this.nextPhoto}
            />
          )} */}

          {/* {
            this.props.preview.length &&
            <img src={this.props.preview[this.state.currentPhotoIndex]['imageUrl']}/>
          } */}

          <Photo
            index={this.state.currentPhotoIndex}
            url={this.props.preview[this.state.currentPhotoIndex][0].imageUrl}
            album={this.props.preview[this.state.currentPhotoIndex][0].category}
            toggleModal={this.props.toggleModal}
          />

          <AlbumPhotoCount
            hotel={this.props.hotel}
            currentAlbumIndex={this.state.currentPhotoIndex}
          />

        </PhotoContainer>


        <PhotostripWrapper>
          {this.props.preview.map((one, index) => (
            <CarouselPhotostrip
              className="photostrip"
              key={one[0]._id}
              index={index}
              displayedPhotoIndex={this.state.currentPhotoIndex}
              photo={one[0].imageUrl}
              caption={one[0].caption}
              onClick={this.photostripClick}
              toggleModal={this.props.toggleModal}
            />
          ))}
        </PhotostripWrapper>
      </div>
    );
  }
}

// const ArrowContainer = styled.div`
//   position: absolute;
//   background: rgba(0,0,0,.32);
//   width: 60px;
//   height: 60px;
//   text-align: center:
//   cursor: pointer;
//   // margin-top: -30px;
//   // justify-content: center;
// `;

export default Carousel;
