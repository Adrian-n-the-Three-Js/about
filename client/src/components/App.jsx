import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
// import sampleData from '../sampleData.js';
import Description from './HotelDescription.jsx';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

console.log('hello app');

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  body {
    font-family: 'Open Sans', sans-serif;
    color: #4a4a4a;
  }
`;

class App extends React.Component {
  constructor(props) {
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

        <GlobalStyles />

        <TestTitle>Hello App!</TestTitle>
        <h2>About</h2>
        <hr />
        <p>This property matches all of your filters.</p>
        <p>Matches: &#10004; Hotels</p>
        <hr />

        <table>
          <tr>
            <th rowSpan="2">4.5</th>
            <th>Excellent</th>
          </tr>
          <tr>
            <th>...dots...</th>
            <th>2,929 reviews</th>
          </tr>
        </table>

        <p>#10 of 174 hotels in Denver</p>

        <table>
          <tr>
            <td>...dots...</td>
            <td>Location</td>
          </tr>
          <tr>
            <td>...dots...</td>
            <td>Cleanliness</td>
          </tr>
          <tr>
            <td>...dots...</td>
            <td>Service</td>
          </tr>
          <tr>
            <td>...dots...</td>
            <td>Value</td>
          </tr>
        </table>

        <hr />
        <p>{Description}</p>

        <CarouselWrapper>
          <Carousel
            hotel={this.state.hotel}
            preview={this.state.preview}
          />
        </CarouselWrapper>

      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  background-color: papayawhip;
  height: 100%;
  padding: 24px;
  margin: 12px;
`;

const TestTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  // position:: relative;
  background-color: #f5dcdc;
  cursor: pointer;
  height: 340px;
  width: 370px;
  // display: block;
  // flex-direction: column;
  // padding-top: 50px;
  // padding-right: 80px;
  // padding-bottom: 50px;
  // padding-left: 80px;
  // margin: 0 auto;
  // overflow: hidden;
`;

export default App;
