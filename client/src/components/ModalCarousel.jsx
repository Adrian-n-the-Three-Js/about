import React from 'react';
import ModalPhoto from './ModalPhoto.jsx';
import ModalArrow from './ModalArrow.jsx';
import styled from 'styled-components';

console.log('modal carousel');

const ModalCarouselWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  top: 0;
  // position: absolute;
  // align-items: center;
  max-height: 100%;
  max-width: 100%;
  min-height: 200px;
  // margin: 0;
  // padding: 0;
  // flex: 0 0 auto;
  border-color: #777779;
  background-color: #000000;
`;

const IndexInfo = styled.div`
  display: block;
  font-family: ${props => props.theme.font};
  color: #ffffff;
  position: absolute;
  height: 56px;
  width: 100%;
  // top: 0;
  span:last-child {
    position: absolute;
    font-size: 12px;
    top: 1em;
    right: 16px;
  }
`;

const GalleryButton = styled.button`
  z-index: 2000;
  align-items: center;
  top: 1em;
  background-color: #ffffff;
  font-family: ${props => props.theme.font};
  font-size: 13.33px;
  line-height: 20px;
  border-radius: 2px;
  text-align: center;
  padding: 8px 16px;
  margin: 10px;
  cursor: pointer;
  border: 0;
  > svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

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
    console.log('modal carousel props', this.props);

    return (
      <ModalCarouselWrapper>
        <IndexInfo>
          <span>
            <GalleryButton>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-grid-fill" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
              </svg>
              &nbsp;Gallery
            </GalleryButton>
          </span>
          <span>{this.state.currentPhotoIndex + 1} of {this.props.album.length}</span>
        </IndexInfo>
        {/* <ModalArrowWrapper> */}

        {/* <ModalArrow
          className="arrow"
          direction="left"
          symbol="&#60;"
          onClick={this.previousPhoto}
        />
        {/* </ModalArrowWrapper> */}

        {/* <ModalArrowWrapper> */}

        {/* <ModalArrow
          className="arrow"
          direction="right"
          symbol="&#62;"
          onClick={this.nextPhoto}
        /> */}
        {/* </ModalArrowWrapper> */}

        {/* <ModalPhoto
          user={this.props.album[this.state.currentPhotoIndex].user}
          userAvatar={this.props.album[this.state.currentPhotoIndex].userAvatarUrl}
          caption={this.props.album[this.state.currentPhotoIndex].caption}
          url={this.props.album[this.state.currentPhotoIndex].imageUrl}
          helpfulVotes={this.props.album[this.state.currentPhotoIndex].helpfulVotes}
          date={this.props.album[this.state.currentPhotoIndex].datePosted}
        /> */}

      </ModalCarouselWrapper>
    );
  }
}

export default ModalCarousel;

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


