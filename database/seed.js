const db  = require('./index.js');
// const faker = require('faker');
const axios = require('axios');
// const getImages = require('./unsplash.js')


// this contains 100 hotel records
const hotelPhotos = [];
// console.log('hotel data:', hotelPhotos);

// grab array of photo options by search term
const getImages = (searchTerm) => {
  axios({
    method: 'get',
    url: `https://api.unsplash.com/search/photos`,
    params: {
      query: searchTerm
    },
    headers: {
      'Authorization': `Client-ID SvcCVERRXFolrMNWbuzHKE26VoBPgO-LHBp9mTb3gyE`
    }
  })
  .then(response => {
    // console.log('RESPONSE:', response.data.results);
    var extractedData = extractPhotoData(response.data.results);
    // console.log(searchTerm)
    console.log('extractedData:', extractedData);
    var data = addCategory(searchTerm, extractedData);
    console.log('data:', data);
  })
  .catch(error => console.log('ERROR:', error))
}

// extract photo details that we want to use
const extractPhotoData = (arr) => {
  // console.log('array', arr)
  var photoAlbumSelection = [];
  for (var i = 0; i < 10; i++) {
    var photoDetails = {};
    photoDetails.id = arr[i].id;
    photoDetails.user = arr[i].user.name;
    photoDetails.userAvatar = arr[i].user['profile_image']['large'];
    photoDetails.imageUrl = arr[i].urls.regular;
    photoDetails.caption = arr[i].description;
    photoDetails.datePosted = arr[i]['created_at'];
    // photoDetails.category = addCategory(arr);
    photoDetails.helpfulVotes = Math.floor(Math.random() * 10);
    photoAlbumSelection.push(photoDetails);
  }
  return photoAlbumSelection;
}

// // add category property to each photo in each album
const addCategory = (searchTerm, album) => {
  const photoCategory = ['Room & Suite', 'Dining', 'Pool & Beach', 'Gym'];
  if (searchTerm === "hotel-room") {
    album.forEach(element => element.category = photoCategory[0]);
  }
  if (searchTerm === "hotel-dining") {
    album.forEach(element => element.category = photoCategory[1]);
  }
  if (searchTerm === "hotel-pool") {
    album.forEach(element => element.category = photoCategory[2]);
  }
  if (searchTerm === "gym") {
    album.forEach(element => element.category = photoCategory[3]);
  }
}

// // photo album options
// var roomPhotoAlbum = getImages('hotel-room');
// roomPhotoAlbum = addCategory(roomPhotoAlbum);
// // console.log('line 62 room photos:', roomPhotoAlbum);

// var diningPhotoAlbum = getImages('hotel-dining');
// diningPhotoAlbum = addCategory(diningPhotoAlbum);
// // console.log('line 66 dining photos:', diningPhotoAlbum);

// var poolPhotoAlbum = getImages('hotel-pool');
// poolPhotoAlbum = addCategory(poolPhotoAlbum);

// var gymPhotoAlbum = getImages('gym');
// gymPhotoAlbum = addCategory(gymPhotoAlbum);

// generates random selection of photos for an album
// const generateRandomPhotoAlbum = (photoAlbum) => {
//   // generates random number of photos that should be in a hotel album
//   const randomNumOfPhotos = Math.floor(Math.random() * 10);
//   var result = [];
//   var indexes = [];
//   var counter = 0;
//   for (var i = 0; i < randomNumOfPhotos; i++) {
//     var num = Math.floor(Math.random() * photoAlbum.length);
//     // avoid duplicate indexes
//     if (indexes.indexOf(num) === -1) {
//       indexes.push(num);
//     // add cards from the deck into the result based on unique indexes
//     result[num] = photoAlbum[counter];
//     counter++;
//     }
//   }
//   return result;
// }

// // generate one hotel object
// const generateHotelData = () => {
//   var hotelObj = {};
//   hotelObj.roomPhotos = generateRandomPhotoAlbum(roomPhotoAlbum);
//   hotelObj.diningPhotos = generateRandomPhotoAlbum(diningPhotoAlbum);
//   hotelObj.poolPhotos = generateRandomPhotoAlbum(poolPhotoAlbum);
//   hotelObj.gymPhotos = generateRandomPhotoAlbum(gymPhotoAlbum);
//   return hotelObj;
// }

// // generate 100 hotels
// for(var i = 0; i < 100; i++) {
//   var data = generateHotelData();
//   hotelData.push(data);
// }


// // create instances by inserting data
// const insertphotoData = function() {
//   Photo.create(hotelPhotos)
//     .then(() => {
//       console.log('inserted photo data');
//       db.close()
//     });
// };

// insertphotoData();




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