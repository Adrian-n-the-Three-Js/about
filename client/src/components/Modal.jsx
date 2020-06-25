import React from 'react';
import ReactDOM from 'react-dom';

console.log('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClose = this.handleClose.bind(this);
  }

  render () {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div>
        <button onClick={ () => this.props.toggleModal() } >
          X
        </button>
      </div>
    );
  }
};

// ReactDOM.render(<Modal />, document.getElementById('modal'));

export default Modal;