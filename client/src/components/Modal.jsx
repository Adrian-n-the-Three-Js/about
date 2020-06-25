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
        <span>Photos of Grand Hyatt Downtown</span>
        <button onClick={ () => this.props.toggleModal() } >
          X
        </button>
        <div>
          <ModalCarousel
            album={this.props.album}
          />
        </div>
      </ModalWrapper>,
      modalRoot,
    ));
  }
}

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  // box-sizing: border-box;
`;