import React from 'react';
import ReactDOM from 'react-dom'

console.log('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>hello modal</div>
    );
  }
};

ReactDOM.render(<Modal />, document.getElementById('modal'));

export default Modal;