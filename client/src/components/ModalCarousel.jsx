import React from 'react';
import ModalPhoto from './ModalPhoto.jsx';
import styled from 'styled-components';

// console.log('modal carousel');

const ModalCarouselWrapper = styled.div`
  display: block;
  position: relative;
  background-color: #fff;
  box-shadow: 2px 2px 9px rgba(0,0,0,.5);
  transition: opacity .4s ease-in-out;
  z-index: 10;
  border-radius: 2px;
  min-height: 504px;
  overflow: hidden;
  top: 0;
  left: 0;
  max-height: 100%;
  max-width: 100%;
  min-height: 200px;
  border-color: #777779;
  background-color: #000000;
`;

// const ModalInnerContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
// `;

const IndexInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${props => props.theme.font};
  color: #ffffff;
  // position: absolute;
  height: 56px;
  width: 100%;
  // top: 0;
  // span:last-child {
  //   // position: absolute;
  //   font-size: 12px;
  //   top: 1em;
  //   right: 16px;
  // }
`;

const IndexCount = styled.span`
  font-size: 12px;
  // top: 1em;
  margin: 15px;
  // right: 16px;
`;

const GalleryButton = styled.button`
  z-index: 2000;
  // align-items: center;
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

const DetailsWrapper = styled.div`
  background-image: linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.53) 10%,rgba(0,0,0,.8));
  border-radius: 0 0 2px 2px;
  position: absolute;
  color: #fff;
  bottom: 0;
  transition: opacity 333ms linear;
  width: calc(100% - 16px);
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 0;
`;

const PhotoDetailsSection = styled.div`
  display: flex;
  font-family: ${props => props.theme.font};
  // border-radius: 0 0 2px 2px;
  // padding: 16px 16px 16px 0px;
`;

const Avatar = styled.div`
  display: inline-block;
  border: 2px solid #ffffff;
  border-radius: 42px;
  height: 40px;
  width: 40px;
  padding: 2px 4px 0 0;
  background-image: ${(props) => `url( ${props.avatar} )`};
  background-size: cover;
  vertical-align: middle;
`;

const PhotoDetails = styled.div`
  display: block;
  font-size: 12px;
  line-height: 16px;
  min-height: 50px;
  font-family: ${props => props.theme.font};
  // height: 100%;
  color: #ffffff;
  border-radius: 0 0 2px 2px;
  color: #fff;
  bottom: 0;
  transition: opacity 333ms linear;
  padding-left: 16px;
  vertical-align: middle;
  padding-bottom: 0;
  > span {
    margin: 0;
    padding: 0;
    display: block;
    vertical-align: middle;
    font-size: 12px;
  }
`;

const ActionButtonsContainer = styled.div`
  font-family: ${props => props.theme.font};
  color: #ffffff;
  font-size: 12px;
  border-top: 1px solid #ffffff;
  margin-right: 32px;
  .helpful-button {
    display: inline-block;
    padding: 16px 0;
    cursor: pointer;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 700;
    cursor: pointer;
  }
  .like-button {
    padding: 16px 0;
    display: inline-block;
    position: absolute;
    right: 96px;
    font-size: 20px;
    cursor: pointer;
  }
  .share-button {
    padding: 16px 0;
    right: 64px;
    display: inline-block;
    position: absolute;
    font-size: 20px;
    cursor: pointer;
  }
  .report-button {
    padding: 16px 0;
    display: inline-block;
    position: absolute;
    right: 32px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ReviewWrapper = styled.div`
  font-family: ${props => props.theme.font};
  color: #ffffff;
  font-size: 14px;
`;

const ArrowButton = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(0,0,0, .40);
  border: 0;
  margin: 0;
  padding: 0;
  top: 50%;
  transition: opacity .3s linear;
  z-index: 1;
  // text-align: center;
  ${(props) => (props.direction === 'right' ? 'right: 0' : 'left: 0')};
  pointer-events: ${props => (props.clickable ? 'auto' : 'none')}
  cursor: ${props => (props.clickable ? 'pointer' : 'default')}
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
    background-color: rgba(44,44,44, .50);
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

    return (

      <ModalCarouselWrapper>
        <IndexInfo>
          <span>
            <GalleryButton>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-grid-fill" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
              </svg>
              &nbsp;
              Gallery
            </GalleryButton>
          </span>
          <IndexCount>{this.state.currentPhotoIndex + 1} of {this.props.album.length}</IndexCount>
        </IndexInfo>

        <ArrowButton
          direction="left"
          photoIndex={this.state.currentPhotoIndex}
          clickable={this.state.currentPhotoIndex - 1 >= 0 ? true : false}
          onClick={this.previousPhoto}
        >
          <svg viewBox="0 0 32 32" className="icon icon-chevron-left" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
        </ArrowButton>

        <ArrowButton
          direction="right"
          photoIndex={this.state.currentPhotoIndex}
          clickable={(this.state.currentPhotoIndex + 1 <= this.props.album.length - 1) ? true : false}
          onClick={this.nextPhoto}
        >
          <svg viewBox="0 0 32 32" className="icon icon-chevron-right" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
        </ArrowButton>

        <ModalPhoto
          user={this.props.album[this.state.currentPhotoIndex].user}
          userAvatar={this.props.album[this.state.currentPhotoIndex].userAvatarUrl}
          caption={this.props.album[this.state.currentPhotoIndex].caption}
          url={this.props.album[this.state.currentPhotoIndex].imageUrl}
          helpfulVotes={this.props.album[this.state.currentPhotoIndex].helpfulVotes}
          date={this.props.album[this.state.currentPhotoIndex].datePosted}
        />
        <DetailsWrapper>

        <PhotoDetailsSection>
          <Avatar
            avatar={this.props.album[this.state.currentPhotoIndex].userAvatarUrl}
          />

          <PhotoDetails>
            <span>
              {this.props.album[this.state.currentPhotoIndex].user}
              &nbsp;&#8226;&nbsp;
              {this.props.album[this.state.currentPhotoIndex].datePosted}
            </span>
            <span>
              {this.props.album[this.state.currentPhotoIndex].location}
              &nbsp;
              &#8226;
              &nbsp;
              {this.props.album[this.state.currentPhotoIndex].contributions}
              &nbsp;
              contributions
              </span>
          </PhotoDetails>
        </PhotoDetailsSection>

        <ReviewWrapper>
          <div>{this.props.album[this.state.currentPhotoIndex].caption}</div>
          <div>Read review</div>
        </ReviewWrapper>

        <div></div>

        <ActionButtonsContainer>
          <div className="helpful-button">
            <span className="thumb-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              &nbsp;
              Helpful
              ({this.props.album[this.state.currentPhotoIndex].helpfulVotes})
            </span>
          </div>

          <div className="like-button">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          </div>

          <div className="share-button">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 4.354a.5.5 0 0 0 .708 0L8 1.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
            <path fillRule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5z"/>
            <path fillRule="evenodd" d="M2.5 14A1.5 1.5 0 0 0 4 15.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.5a.5.5 0 0 0 0 1H12a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 0 0-1H4A1.5 1.5 0 0 0 2.5 7v7z"/>
            </svg>
          </div>

          <div className="report-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
          </div>
        </ActionButtonsContainer>
        </DetailsWrapper>
      </ModalCarouselWrapper>
    );
  }
}

export default ModalCarousel;