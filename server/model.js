const db = require('../database/index.js');
const Promise = require('bluebird');
const query = Promise.promisify(db.query).bind(db);

const getPhotos = async (id, callback) => {
  let photos = await query(`SELECT * FROM photos INNER JOIN hotel
  ON photos.hotel_id = hotel.hotel_id INNER JOIN users
  ON users.user_id = photos.user_id WHERE photos.hotel_id = ${id}`)
  // let queryString = `SELECT * FROM photos WHERE photo_id = ${id}`
  // console.log(queryString, 'query')
  // query to grab all data
  const hotel = {};

  if (photos.rows.length > 0) {
    const photo = photos.rows[0];
    hotel.hotelId = photo.hotel_id;
    hotel.hotelName = photo.name;
    hotel.hotelCity = photo.city;
    hotel.hotelPrice = photo.price;
    hotel.numReviews = photo.reviews;
    hotel.roomAlbum = photos.rows.filter(photo => photo.category === 'Room & Suite');
    hotel.poolAlbum = photos.rows.filter(photo => photo.category === 'Pool & Beach');
    hotel.diningAlbum = photos.rows.filter(photo => photo.category === 'Dining');
    hotel.gymAlbum = photos.rows.filter(photo => photo.category === 'Gym');
    hotel.amenitiesAlbum = photos.rows.filter(photo => photo.category === 'Amenities');
    hotel.bathroomAlbum = photos.rows.filter(photo => photo.category === 'Bathroom');
    hotel.eventRoomAlbum = photos.rows.filter(photo => photo.category === 'Business Center & Event Rooms');
    hotel.roomViewAlbum = photos.rows.filter(photo => photo.category === 'View from Room');
  }
  callback(null, [hotel]);
  // db.query(`SELECT * FROM photos where photo_id = 1`, (err) => console.log('test for err', err))

}

const addPhotos = (body, callback) => {
  db.Photo.create(body, callback)
}

const updatePhotos = (id, body, callback) => {
  db.Photo.update({ hotelId : id}, body, callback)
}

const deletePhotos = (id, callback) => {
  db.Photo.deleteOne({ hotelId : id }, callback)
}

module.exports = {
  getPhotos,
  addPhotos,
  updatePhotos,
  deletePhotos
};