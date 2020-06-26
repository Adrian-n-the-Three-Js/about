import React from 'react';
import Photo from './Photo.jsx';
import AlbumPhotoCount from './AlbumPhotoCount.jsx';
import CarouselPhotostrip from './CarouselPhotostrip.jsx';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';

console.log('carousel');

const PhotoContainer = styled.div`
  display: flex;
  // flex-direction: row
  height: 270px;
  // width: 50%;
  justify-content: space-between;
  width: 370px;
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
    console.log('props', this.props.preview);
    console.log('props0', this.props.preview[0][0]);

    return (
<div>
      <PhotoContainer>

          {(this.state.currentPhotoIndex - 1 >= 0) && (
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
          )}


        {/* {
          this.props.preview.length &&
          <img src={this.props.preview[this.state.currentPhotoIndex]['imageUrl']}/>
        } */}


          <Photo
            index={this.state.currentPhotoIndex}
            url={this.props.preview[this.state.currentPhotoIndex][0].imageUrl}
            album={this.props.preview[this.state.currentPhotoIndex].category}
            toggleModal={this.props.toggleModal}
          />

          <AlbumPhotoCount
            hotel={this.props.hotel}
            currentAlbumIndex={this.state.currentPhotoIndex}
          />



        </PhotoContainer>
<div>
{this.props.preview.map((one, index) => (
  <CarouselPhotostrip
    className="photostrip"
    key={one._id}
    index={index}
    photo={one.imageUrl}
    caption={one.caption}
    onClick={this.photostripClick}
    toggleModal={this.props.toggleModal}
  />
))}

</div>

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
