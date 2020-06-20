const db  = require('./index.js');
const axios = require('axios');

// grab array of photo options by search term
const getImages = () => {

  axios({
    method: 'get',
    url: `https://api.unsplash.com/search/photos`,
    params: {
      query: 'hotel-room'
    },
    headers: {
      'Authorization': `Client-ID SvcCVERRXFolrMNWbuzHKE26VoBPgO-LHBp9mTb3gyE`
    }
  })
  .then(response => {
    // console.log('RESPONSE:', response.data.results);
    const roomData = extractPhotoData(response.data.results, 'hotel-room');
    // console.log('roomData:', roomData);

    return axios({
      method: 'get',
      url: `https://api.unsplash.com/search/photos`,
      params: {
        query: 'restaurant'
      },
      headers: {
        'Authorization': `Client-ID SvcCVERRXFolrMNWbuzHKE26VoBPgO-LHBp9mTb3gyE`
      }
    })
    .then(response => {
      const diningData = extractPhotoData(response.data.results, 'restaurant');
      // console.log(diningData)

      return axios({
        method: 'get',
        url: `https://api.unsplash.com/search/photos`,
        params: {
          query: 'pool'
        },
        headers: {
          'Authorization': `Client-ID SvcCVERRXFolrMNWbuzHKE26VoBPgO-LHBp9mTb3gyE`
        }
      })
      .then(response => {
        const poolData = extractPhotoData(response.data.results, 'pool');
        // console.log(poolData)

        return axios({
          method: 'get',
          url: `https://api.unsplash.com/search/photos`,
          params: {
            query: 'gym'
          },
          headers: {
            'Authorization': `Client-ID SvcCVERRXFolrMNWbuzHKE26VoBPgO-LHBp9mTb3gyE`
          }
        })
        .then(response => {
          const gymData = extractPhotoData(response.data.results, 'gym');
          // console.log(gymData)

          const oneHotel = generateHotelData(roomData, diningData, poolData, gymData);
          // console.log('one hotel', oneHotel)
          const allHotels = generateDataSet(roomData, diningData, poolData, gymData);
          // console.log('hotelPhotos', allHotels)

          insertphotoData(allHotels);
          })
        })
      .catch(error => console.log('ERROR:', error))
    })
  })
}

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
    photoDetails.imageUrl = arr[i].urls.regular;
    photoDetails.caption = arr[i].description;
    photoDetails.category = addCategory(arr[i], searchTerm);
    photoDetails.datePosted = arr[i]['created_at'];
    photoDetails.helpfulVotes = Math.floor(Math.random() * 10);
    photoAlbumSelection.push(photoDetails);
  }
  return photoAlbumSelection;
}

// add corresponding category property to each photo
const addCategory = (photo, searchTerm) => {
  const photoCategory = ['Room & Suite', 'Dining', 'Pool & Beach', 'Gym'];
  if (searchTerm === "hotel-room") {
    return photoCategory[0];
  }
  if (searchTerm === "restaurant") {
    return photoCategory[1];
  }
  if (searchTerm === "pool") {
    return photoCategory[2];
  }
  if (searchTerm === "gym") {
    return photoCategory[3];
  }
}

// // photo album options
var roomPhotoAlbum = getImages();


// generates random selection of photos for an album
const generateRandomPhotoAlbum = (photoAlbum) => {
  // generates random number of photos that should be in a hotel album
  const randomNumOfPhotos = Math.floor(Math.random() * 15);
  const result = [];
  const indexes = [];
  // var counter = 0;
  for (var i = 0; i < randomNumOfPhotos; i++) {
    // generates random indexes
    const num = Math.floor(Math.random() * photoAlbum.length);
    // avoid duplicate indexes (photos)
    if (indexes.indexOf(num) === -1) {
      indexes.push(num);
      result.push(photoAlbum[num])
    // add into the result based on unique indexes
    // result[num] = photoAlbum[counter];
    // counter++;
    }
  }
  return result;
}

// // generate one hotel object
const generateHotelData = (roomPhotoAlbum, diningPhotoAlbum, poolPhotoAlbum, gymPhotoAlbum)  => {
  const hotelObj = {};
  hotelObj.roomAlbum = generateRandomPhotoAlbum(roomPhotoAlbum);
  hotelObj.diningAlbum = generateRandomPhotoAlbum(diningPhotoAlbum);
  hotelObj.poolAlbum = generateRandomPhotoAlbum(poolPhotoAlbum);
  hotelObj.gymAlbum = generateRandomPhotoAlbum(gymPhotoAlbum);
  // console.log('HOTELOBJECT:', hotelObj)
  return hotelObj;
}


// // generate 100 hotels
const generateDataSet = (roomPhotoAlbum, diningPhotoAlbum, poolPhotoAlbum, gymPhotoAlbum) => {
  // this will contain 100 hotel records
  const hotelPhotos = [];
  for(var i = 0; i < 100; i++) {
    var data = generateHotelData(roomPhotoAlbum, diningPhotoAlbum, poolPhotoAlbum, gymPhotoAlbum);
    hotelPhotos.push(data);
  }
  // console.log('data', hotelPhotos[90])
  // console.log('hotelPhotos:', hotelPhotos.poolPhotos)
  return hotelPhotos;
}


// create instances by inserting data
const insertphotoData = function(allHotels) {
  db.Photo.insertMany(allHotels)
    .then(() => {
      console.log('Inserted photo data');
      db.db.close();
    })
    .catch(error => console.log(error));
};





// Archive ----------------------------------

// // utility function to generate random element
// var randomElement = function(array){
//   var randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// };


// create instances by inserting data
// const photoData = function() {
//   Photo.create(photoData)
//     .then(() => {
//       console.log('inserted photo data');
//       db.disconnect()
//     });
// };

// insertphotoData();


// // generate random photo category
// const getSearchQuery = (generateRandomPhotoCategory) => {
//   var searchTerm = '';
//   if (generateRandomPhotoCategory === 'Room & Suite') {
//     searchTerm = 'hotel-room';
//   } else if (generateRandomPhotoCategory === 'Dining') {
//     searchTerm = 'hotel-dining';
//   } else if (generateRandomPhotoCategory === 'Pool & Beach') {
//     searchTerm = 'hotel-pool';
//   } else if (generateRandomPhotoCategory === 'Gym') {
//     searchTerm = 'gym'
//   }
//   return searchTerm;
// }


// const generateRandomPhotoCategory = randomElement(photoCategory);

// const imageUrlCollection = [
//   'https://media-cdn.tripadvisor.com/media/photo-w/0b/b5/87/01/fairmont-banff-springs.jpg',
//   'https://media-cdn.tripadvisor.com/media/photo-w/0b/b5/76/8e/fairmont-gold-one-bedroom.jpg',
//   'https://media-cdn.tripadvisor.com/media/photo-w/0b/b5/79/23/fairmont-gold-two-bedroom.jpg',
//   'https://media-cdn.tripadvisor.com/media/photo-w/0b/b5/79/26/fairmont-gold-two-bedroom.jpg',
// ]


  // newPhoto.user = faker.fake("{{name.firstName}}, {{name.lastame}}");
  // newPhoto.userAvatar = faker.internet.avatar();
//   newPhoto.imageUrl;
//   newPhoto.datePosted
//   newPhoto.helpfulVotes = Math.floor(Math.random() * Math.floor(10))
// }


// to be inserted into db
// const photoData = [
  // {
  //   hotel_id: Number, // (0, 100)
  //   photo_id:
  //   user: String,
  //   userAvatar: String,
  //   imageUrl: String,
  //   caption: String,
  //   category: String,
  //   datePosted: String,
  //   helpfulVotes: Number
  // }
// ];



  // images: [
    //     {
    //       user: string,
    //       userAvatar: string url,
    //       imageUrl: string,
    //       datePosted: string,
    //       category: function - generates random category
    //     }
    //   ]
    // ]


    // roomPhotos: generateRandomPhotoAlbum(hotelRoomPhotoAlbum),
    // diningPhotos: generateRandomPhotoAlbum(diningPhotoAlbum),
    // poolPhotos: generateRandomPhotoAlbum(poolPhotoAlbum),
    // gymPhotos: generateRandomPhotoAlbum(gymPhotoAlbum)


    // // random photo generator
// const generatePhoto = () => {
//   var randomPhoto = randomElement(photoCollection);
//   const newPhoto = {
//     photo_id: randomPhoto.id,
//     user: randomPhoto.user,
//     userAvatar: randomPhoto.userAvatar,
//     imageUrl: randomPhoto.imageUrl,
//     caption: randomPhoto.caption,
//     category:
//   };