import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';
import Description from './HotelDescription.jsx';
import styled from 'styled-components';
import circleFill from '../icons.js';
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
      showModal: false,
      modalAlbum: '',
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    console.log('state', this.state);
    return (
      this.getData()
    );
  }

  // GET
  // testing with 1 hotel
  getData() {
    // return (
    // const hotel = [...this.state.hotel];
     axios.get('/api/photos')
      .then((response) => {
        const data = response.data;
        this.setState({
          hotel: data,
          preview: [data[0].roomAlbum[0], data[0].diningAlbum[0], data[0].poolAlbum[0], data[0].gymAlbum[0]],
          isLoaded: true,
        });
        (error) => {
          this.setState({ isLoaded: true});
          console.log(error);
        };
        console.log('hotel data', this.state.hotel);
        console.log('preview data', this.state.preview);
      })
    // );
  }

  toggleModal(modalAlbum) {
    console.log('toggle modal', modalAlbum);
    this.setState({
      showModal: !this.state.showModal,
      modalAlbum: modalAlbum
    });
  }

  render() {

    const modalAlbum = this.state.modalAlbum === 'Room & Suite' ? 'roomAlbum' : this.state.modalAlbum === 'Dining' ? 'diningAlbum' : this.state.modalAlbum === 'Pool & Beach' ? 'poolAlbum' : 'gymAlbum';

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    return (

      <AppWrapper>

        <GlobalStyles />

        {/* <TestTitle>Hello App!</TestTitle> */}
        <h2>About</h2>
        <hr />
        <p>This property matches all of your filters.</p>
        <p>Matches: &#10004; Hotels</p>
        <hr />

        <table>
          <tbody>
            <tr>
              <th rowSpan="2">4.5</th>
              <th>Excellent</th>
            </tr>
            <tr>
              <th>
                {/* {circleFill} */}
                <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg class="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg class="bi bi-circle-half" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                </svg>
              </th>
              <th>2,929 reviews</th>
            </tr>
          </tbody>
        </table>

        <p>#10 of 174 hotels in Denver</p>

        <table>
          <tbody>
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
          </tbody>
        </table>

        <hr />
        <p>{Description}</p>

        <CarouselWrapper>
          <Carousel
            hotel={this.state.hotel}
            preview={this.state.preview}
            toggleModal={this.toggleModal}
          />
        </CarouselWrapper>

        <div className="modal">

          {
          this.state.showModal && (
            <Modal
              album={this.state.hotel[0][modalAlbum]}
              toggleModal={this.toggleModal}
              showModal={this.state.showModal}
            />
          )
          }
        </div>

      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  background-color: papayawhip;
  height: 1030px;
  width: 765px;
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
