import React from 'react';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import ModalCarousel from './ModalCarousel.jsx';

console.log('modal');

const modalRoot = document.getElementById( 'modal' );

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (ReactDOM.createPortal(
      <div>
        <span>Photos of Grand Hyatt Downtown</span>
        <button onClick={ () => this.props.toggleModal() } >
          X
        </button>
        <ModalCarousel
          album={this.props.album}
        />
      </div>
    , modalRoot));
  }
};

export default Modal;
