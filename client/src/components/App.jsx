import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js'

console.log('hello app');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hotel: [],
      preview: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    this.getData();
  }

  // GET
  // testing with 1 hotel
  getData() {
    // const hotel = [...this.state.hotel];
    axios.get('/api/photos')
    .then(response => {
      const data = response.data;
      this.setState({
        hotel: data,
        preview: [data[0]['roomAlbum'][0], data[0]['diningAlbum'][0], data[0]['poolAlbum'][0], data[0]['gymAlbum'][0]],
        isLoaded: true
      });
      console.log('res data', this.state.hotel);
      console.log('preview data', this.state.preview);
      console.log('image', this.state.preview[0]['imageUrl']);
      error => {
        this.setState({isLoaded: true});
        console.log(error)
      };
    })
  }

  render() {

    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <span>Hello App</span>
          <div>
            <Carousel
              hotel={this.state.hotel}
              preview={this.state.preview}
              />
          </div>
        </div>
      )
    }
  }
}

export default App;