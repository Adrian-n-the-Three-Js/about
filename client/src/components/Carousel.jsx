import React from 'react';
// import ReactDOM from 'react-dom';

console.log('carousel');

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0
    }
  }

  previousPhoto() {

  }

  render () {
    console.log('image1', this.props.photos[0]);
    // console.log('image2', this.props.photos[0]['caption']);

    return (
      <div className="carousel">
        <span>Carousel</span>
        <img src={this.props.photos[0]['imageUrl']} />
      </div>
    );
  }
}


export default Carousel;