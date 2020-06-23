import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
// import sampleData from '../sampleData.js';
import Description from './HotelDescription.jsx';
import styled from 'styled-components';

console.log('hello app');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hotel: [],
      preview: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  // GET
  // testing with 1 hotel
  getData() {
    // const hotel = [...this.state.hotel];
    axios.get('/api/photos')
      .then((response) => {
        const data = response.data;
        this.setState({
          hotel: data,
          preview: [data[0].roomAlbum[0], data[0].diningAlbum[0], data[0].poolAlbum[0], data[0].gymAlbum[0]],
          isLoaded: true,
        });
        console.log('hotel data', this.state.hotel);
        console.log('preview data', this.state.preview);

        error => {
          this.setState({isLoaded: true});
          console.log(error)
        };
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <AppWrapper>

        <TestTitle>Hello App!</TestTitle>
        <p>{Description}</p>

        <Carousel
          hotel={this.state.hotel}
          preview={this.state.preview}
        />

      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  background-color: papayawhip;
  height: 100%;
`;

const TestTitle = styled.h1`
  font-size: 2em;
  text-alight: center;
  color: palevioletred;
`;

export default App;
