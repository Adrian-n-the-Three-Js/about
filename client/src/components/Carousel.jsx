import React from 'react';
import Arrow from './Arrow.jsx';

console.log('carousel');

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0
    }
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  previousPhoto() {
    console.log('previous photo');
    const lastIndex = this.props.preview.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== 0 ? currentPhotoIndex - 1 : null;
    this.setState({
      currentPhotoIndex: index
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

  render() {
    this.props.preview.length && console.log('image', this.props.hotel[0]);

    return (
      <div>

        {(this.state.currentPhotoIndex - 1 >= 0) &&
        <Arrow
          direction='left'
          symbol='&#9664;'
          onClick={this.previousPhoto}
          />}

        {
          this.props.preview.length &&
          <img src={this.props.preview[this.state.currentPhotoIndex]['imageUrl']}/>
        }

        {(this.state.currentPhotoIndex + 1 <= this.props.preview.length - 1) &&
        <Arrow
          direction='right'
          symbol='&#9654;'
          onClick={this.nextPhoto}
        />}


      </div>
    )
  }

}

export default Carousel;




// import React from 'react';
// // import ReactDOM from 'react-dom';

// console.log('carousel');

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPhotoIndex: 0
//     }
//   }

//   // previousPhoto() {

//   // }

//   render () {
//     {console.log('image1', this.props.photos[0])['diningAlbum'][0]['imageUrl']}
//     // console.log('image2', this.props.photos[0]['userAvatarURL']);

//     return (
//       <div>
//         <span>Carousel</span>
//         <div>test</div>
//         <img src={"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0Mjk4NH0"} />
//       </div>
//     );
//   }
// }


// export default Carousel;