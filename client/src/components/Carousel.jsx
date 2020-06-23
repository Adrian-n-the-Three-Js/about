import React from 'react';

console.log('carousel');

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentPhotoIndex: 0
    // }
  }

  render() {
    console.log('image', this.props.hotel[0]);

    // console.log('image', this.props.photos[0]['diningAlbum'][0]['imageUrl']);

    return (
      <div>
      {
        this.props.preview.length &&
         <img src={this.props.preview[0]['imageUrl']}/>
      }
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