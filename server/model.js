const db = require('../database');

const getPhotos = (id, callback) => {
  console.log('model get req.../');

  // query to grab all data
  db.Photo.find({ hotelId: id }, callback);
};

module.exports = {
  getPhotos,
};