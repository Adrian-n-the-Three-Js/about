const moment = require('moment');
const axios = require('axios');
const db = require('./index.js');
const faker = require('faker');

// grab array of photo options by search term
const getImages = () => {
  const YOUR_ACCESS_KEY = 'SvcCVERRXFolrMNWbuzHKE26VoBPgO-LHBp9mTb3gyE';

  axios({
    method: 'get',
    url: 'https://api.unsplash.com/search/photos',
    params: {
      query: 'hotel-room',
      order_by: 'popular',
      per_page: 20,
    },
    headers: {
      Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
    },
  })
  .then((response) => {
    // console.log('RESPONSE:', response.data.results);
    const roomData = extractPhotoData(response.data.results, 'hotel-room');
    // console.log('roomData:', roomData);

    return axios({
      method: 'get',
      url: 'https://api.unsplash.com/search/photos',
      params: {
        query: 'restaurant',
        order_by: 'popular',
        per_page: 20,
      },
      headers: {
        Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
      }
    })
    .then((response) => {
      const diningData = extractPhotoData(response.data.results, 'restaurant');
      // console.log(diningData)

      return axios({
        method: 'get',
        url: 'https://api.unsplash.com/search/photos',
        params: {
          query: 'pool',
          order_by: 'popular',
          per_page: 20,
        },
        headers: {
          Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
        }
      })
    .then((response) => {
      const poolData = extractPhotoData(response.data.results, 'pool');
      // console.log(poolData)

      return axios({
        method: 'get',
        url: 'https://api.unsplash.com/search/photos',
        params: {
          query: 'gym',
          order_by: 'popular',
          per_page: 20,
        },
        headers: {
          Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
        }
      })
      .then((response) => {
        const gymData = extractPhotoData(response.data.results, 'gym');
        // console.log(gymData)

        return axios({
          method: 'get',
          url: 'https://api.unsplash.com/search/photos',
          params: {
            query: 'room-service',
            order_by: 'popular',
            per_page: 20,
          },
          headers: {
            Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
          }
        })
        .then((response) => {
          const amenitiesData = extractPhotoData(response.data.results, 'room-service');

          return axios({
            method: 'get',
            url: 'https://api.unsplash.com/search/photos',
            params: {
              query: 'bathroom',
              order_by: 'popular',
              per_page: 20,
            },
            headers: {
              Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
            }
          })
          .then((response) => {
            const bathroomData = extractPhotoData(response.data.results, 'bathroom');

            return axios({
              method: 'get',
              url: 'https://api.unsplash.com/search/photos',
              params: {
                query: 'event-room',
                order_by: 'popular',
                per_page: 20,
              },
              headers: {
                Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
              }
            })
          .then((response) => {
            const eventRoomData = extractPhotoData(response.data.results, 'event-room');

            return axios({
              method: 'get',
              url: 'https://api.unsplash.com/search/photos',
              params: {
                query: 'hotel-view',
                order_by: 'popular',
                per_page: 20,
              },
              headers: {
                Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
              }
            })
          .then((response) => {
            const roomViewData = extractPhotoData(response.data.results, 'hotel-view');

            const oneHotel = generateHotelData(roomData, diningData, poolData, gymData, amenitiesData, bathroomData, eventRoomData, roomViewData);
            // console.log('one hotel', oneHotel)
            const allHotels = generateDataSet(roomData, diningData, poolData, gymData, amenitiesData, bathroomData, eventRoomData, roomViewData);
            // console.log('hotelPhotos', allHotels)

            insertphotoData(allHotels);
          });
        })
        .catch(error => console.log('ERROR:', error));
          });
        });
      });
    });
  });
  });
};

// add corresponding category property to each photo
const addCategory = (photo, searchTerm) => {
  const photoCategory = ['Room & Suite', 'Dining', 'Pool & Beach', 'Gym', 'Hotel & Amenities', 'Bathroom', 'Business Center & Event Rooms', 'View from Room'];
  if (searchTerm === 'hotel-room') {
    return photoCategory[0];
  }
  if (searchTerm === 'restaurant') {
    return photoCategory[1];
  }
  if (searchTerm === 'pool') {
    return photoCategory[2];
  }
  if (searchTerm === 'gym') {
    return photoCategory[3];
  }
  if (searchTerm === 'room-service') {
    return photoCategory[4];
  }
  if (searchTerm === 'bathroom') {
    return photoCategory[5];
  }
  if (searchTerm === 'event-room') {
    return photoCategory[6];
  }
  if (searchTerm === 'hotel-view') {
    return photoCategory[7];
  }
};

// extract photo details that we want to use
// input arr is the results array from the axios call
const extractPhotoData = (arr, searchTerm) => {
  // console.log('input array:', arr)
  const photoAlbumSelection = [];
  for (var i = 0; i < 10; i++) {
    const photoDetails = {};
    // photoDetails.id = arr[i].id;
    photoDetails.user = arr[i].user.name;
    photoDetails.userAvatarURL = arr[i].user['profile_image']['large'];
    photoDetails.location = arr[i].user.location;
    photoDetails.contributions = arr[i].user.total_photos;
    photoDetails.imageUrl = arr[i].urls.regular;
    photoDetails.caption = arr[i].description;
    photoDetails.category = addCategory(arr[i], searchTerm);
    photoDetails.datePosted = moment(arr[i].created_at).format('MMM YY');
    photoDetails.helpfulVotes = Math.floor(Math.random() * 10);
    photoAlbumSelection.push(photoDetails);
  }
  // console.log('test: ',photoAlbumSelection[0])
  return photoAlbumSelection;
};

// photo album options through axios call
var albums = getImages();

// generates random selection of photos for an album
const generateRandomPhotoAlbum = (photoAlbum) => {
  // generates random number of photos that should be in a hotel album - minimum 4, max 15 photos
  const randomNumOfPhotos = Math.floor(Math.random() * (15 - 4) + 4);
  const result = [];
  const indexes = [];
  // var counter = 0;
  for (var i = 0; i < randomNumOfPhotos; i++) {
    // generates random indexes
    const num = Math.floor(Math.random() * photoAlbum.length);
    // avoid duplicate indexes (photos)
    if (indexes.indexOf(num) === -1) {
      indexes.push(num);
      result.push(photoAlbum[num]);
    }
  }
  return result;
};

const generateHotelName = () => {
  const randomCity = faker.address.city();
  return `${randomCity} Hotel`;
};

// generate one hotel object
const generateHotelData = (roomAlbum, diningAlbum, poolAlbum, gymAlbum, amenitiesAlbum, bathroomAlbum, eventRoomAlbum, roomViewAlbum) => {
  const hotelObj = {};
  hotelObj.hotelName = generateHotelName();
  hotelObj.hotelPrice = `$${Math.floor(Math.random() * (350 - 100) + 100)}`;
  hotelObj.roomAlbum = generateRandomPhotoAlbum(roomAlbum);
  hotelObj.diningAlbum = generateRandomPhotoAlbum(diningAlbum);
  hotelObj.poolAlbum = generateRandomPhotoAlbum(poolAlbum);
  hotelObj.gymAlbum = generateRandomPhotoAlbum(gymAlbum);
  hotelObj.amenitiesAlbum = generateRandomPhotoAlbum(amenitiesAlbum);
  hotelObj.bathroomAlbum = generateRandomPhotoAlbum(bathroomAlbum);
  hotelObj.eventRoomAlbum = generateRandomPhotoAlbum(eventRoomAlbum);
  hotelObj.roomViewAlbum = generateRandomPhotoAlbum(roomViewAlbum);
  // console.log('HOTELOBJECT:', hotelObj);
  return hotelObj;
};

// generate 100 hotels
const generateDataSet = (roomAlbum, diningAlbum, poolAlbum, gymAlbum, amenitiesAlbum, bathroomAlbum, eventRoomAlbum, roomViewAlbum) => {
  // this will contain 100 hotel records
  const hotelPhotos = [];
  for(var i = 0; i < 100; i++) {
    var data = generateHotelData(roomAlbum, diningAlbum, poolAlbum, gymAlbum, amenitiesAlbum, bathroomAlbum, eventRoomAlbum, roomViewAlbum);
    hotelPhotos.push(data);
  }
  return hotelPhotos;
};

// create instances by inserting data
const insertphotoData = (allHotels) => {
  db.Photo.insertMany(allHotels)
    .then(() => {
      console.log('Inserted photo data');
      db.db.close();
    })
    .catch((error) => console.log(error));
};
