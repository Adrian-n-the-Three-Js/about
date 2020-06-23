import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

console.log('hello app');

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      hotel: [],
      preview: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  // GET
  // testing with 1 hotel
  getData() {
    axios.get('/api/photos')
      .then( response => {
        const hotel = response.data;
        this.setState({
          hotel: hotel[0],
          preview: [hotel[0]['roomAlbum'][0], hotel[0]['diningAlbum'][0], hotel[0]['poolAlbum'][0], hotel[0]['gymAlbum'][0]]
        });
        console.log('res data', this.state.hotel);
        console.log('preview data', this.state.preview);
        error => console.log(error);
      })
  }

  render() {
    return (
      <div>
        <span>Hello App</span>
        <Carousel photos={this.state.preview} />
      </div>
    )
  }
}

export default App;