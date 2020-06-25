import React from 'react';
import ModalCarousel from './ModalCarousel.jsx';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

console.log('modal');

const modalRoot = document.getElementById( 'modal' );

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (ReactDOM.createPortal(
      <ModalWrapper>
          <div className="title">Photos of Grand Hyatt Downtown</div>
          <div className="nav">
            <ul>
              <li><a href="#">Expedia.com</a></li>
              <li><a href="#">$201</a></li>
              <li><button className="view-deal" href="#">View Deal</button></li>
              <li>
                <button
                  onClick={() => {this.props.toggleModal()}}
                  >
                    &#215;
                  </button>
              </li>
            </ul>
          </div>

          <ModalCarouselWrapper className="carousel">
            <ModalCarousel
              // className={this.className}
              album={this.props.album}
            />
          </ModalCarouselWrapper>

      </ModalWrapper>,

      modalRoot,
    ));
  }
}

export default Modal;

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: baseline;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity .2s linear;
  z-index: 1;

  // .header-container {
  //   // display: flex;
  //   flex-direction: row;
  //   // flex: 1;
  //   // box-sizing: border-box;
  //   // position: absolute;
  // }

  .title {
    margin-left: 5%;
  }

  .nav {
  // display: flex;
  // flex-flow: row wrap;
  // justify-content: flex-end;
  // list-style: none;
  // align-self: center;
  // margin: 0 0.8em 0 0;
  // background: sky-blue;
  }

  // .closeButton {
  //   display: flex;
  // }
  .carousel {
    height: 200px;
    width: 200px;
  }

`;

const ModalCarouselWrapper = styled(ModalWrapper)`
  // height: 200px;
  // width: 200px;
`;