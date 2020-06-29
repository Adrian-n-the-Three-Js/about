import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';
import Description from '../hotelDescription.js';
import styled from 'styled-components';
// import circleFill from '../icons.js';

console.log('hello app');

const PageWrapper = styled.div`
  background-color: ${props => props.theme.whiteSmoke};
`;

const AppWrapper = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  height: 1030px;
  width: 765px;
  margin: 12px;
  padding: 24px;
  position: relative;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.charcoal};
  .rank-index {
    display: block;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .subrating {
    font-size: 14px;
    line-height: 18px;
  }
  .description {
    margin-top: 20px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;

const H2 = styled.h2`
  font-size: 28px;
  line-height: 30px;
  color: black;
  font-family: ${props => props.theme.font};
  font-weight: 500;
  border: 0 solid #e0e0e0;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 0 0 18px;
`;

const CarouselWrapper = styled.div`
  // position: relative;
  cursor: pointer;
  height: 340px;
  width: 370px;
  background-color: #f5dcdc;
`;

const ReviewsWrapper = styled.div`
  font-size: 18px;
  line-height: 22px;
  // font-weight: 700;
  margin: 14px 0;
  height: auto;
  color: #000;
  display: flex;
  align-self: center;
  .overall-rating {
    align-self: center;
    font-size: 48px;
    font-weight: 500;
    margin-right: 8px;
  }
  a:link, a:visited {
    font-size: 16px;
    color: #000;
    font-weight: 500;
    text-decoration: none;
  }
  .all-reviews {
    color: ${(props) => props.theme.charcoal};
    font-size: 14px;
    border-bottom: 1px dotted #d6d6d6;
    max-width: 124px;
    white-space: nowrap;
    text-align: right;
    margin-left: 5px;
    box-sizing: border-box;
    font-weight: 400;
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
    console.log('state before mount', this.state);
    return (
      this.getData()
    );
  }

  // GET
  // testing with 1 hotel
  getData() {
    // return (
    axios.get('/api/photos')
      .then((response) => {
        // test which hotel we are looking at here
        const hotel = response.data[2];
        const preview = [
          hotel.roomAlbum,
          hotel.diningAlbum,
          hotel.poolAlbum,
          hotel.gymAlbum,
          hotel.bathroomAlbum,
          hotel.eventRoomAlbum,
          hotel.roomViewAlbum,
        ];
        console.log('all hotel records', response.data);
        console.log('1st hotel record', hotel);
        this.setState({
          hotel,
          preview,
          isLoaded: true,
        });
        (error) => {
          this.setState({ isLoaded: true });
          console.log(error);
        };
        console.log('hotel data', this.state);
        console.log('preview data', this.state.preview);
      })
    // );
  }

  toggleModal(modalAlbum) {
    console.log('toggle modal', modalAlbum);
    this.setState({
      showModal: !this.state.showModal,
      modalAlbum,
    });
  }

  render() {

    // refactor to switch statement later? ...
    const modalAlbum = this.state.modalAlbum === 'Room & Suite' ? 'roomAlbum' : this.state.modalAlbum === 'Dining' ? 'diningAlbum' : this.state.modalAlbum === 'Pool & Beach' ? 'poolAlbum' : this.state.modalAlbum === 'Gym' ? 'gymAlbum' : this.state.modalAlbum === 'Bathroom' ? 'bathroomAlbum' : this.state.modalAlbum === 'Business Center & Event Rooms' ? 'eventRoomAlbum' : 'roomViewAlbum';

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <PageWrapper>
      <AppWrapper>
        {/* <TestTitle>Hello App!</TestTitle> */}
        <H2>About</H2>

        {/* <p>This property matches all of your filters.</p>
        <p>Matches: &#10004; Hotels</p>
        <hr /> */}

        <ReviewsWrapper>
          <span className="overall-rating">4.5</span>
          <a className="reviews-bubble-rating" href="#">
            <div className="rating-label">Excellent</div>
            <span className="bubbles">
              <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/>
              </svg>
              &nbsp;
              <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/>
              </svg>
              &nbsp;
              <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/>
              </svg>
              &nbsp;
              <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/>
              </svg>
              &nbsp;
              <svg className="bi bi-circle-half" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
              </svg>
            </span>
            <span className="all-reviews">{this.state.hotel.numReviews} reviews</span>
          </a>
        </ReviewsWrapper>
        <span className="rank-index">#20 of 500 hotels in {this.state.hotel.hotelCity}</span>

        <table>
          <tbody>
            <tr>
              <td>...dots...</td>
              <td className="subrating">Location</td>
            </tr>
            <tr>
              <td>...dots...</td>
              <td className="subrating">Cleanliness</td>
            </tr>
            <tr>
              <td>...dots...</td>
              <td className="subrating">Service</td>
            </tr>
            <tr>
              <td>...dots...</td>
              <td className="subrating">Value</td>
            </tr>
          </tbody>
        </table>

        <p className="description">{Description}</p>

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
              hotel={this.state.hotel}
              album={this.state.hotel[modalAlbum]}
              toggleModal={this.toggleModal}
              showModal={this.state.showModal}
            />
          )
          }
        </div>

      </AppWrapper>
      </PageWrapper>
    );
  }
}

export default App;


 {/* <table>
          <tbody>
            <tr>
              <th rowSpan="2">4.5</th>
              <th>Excellent</th>
            </tr>
            <tr>
              <th>
                <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg className="bi bi-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
                <svg className="bi bi-circle-half" width="1em" height="1em" viewBox="0 0 16 16" fill="#00aa6c" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                </svg>
              </th>
              <th>2,929 reviews</th>
            </tr>
          </tbody>
        </table>

        <p>#10 of 174 hotels in Denver</p> */}
