const db = require('../database');

const getPhotos = (callback) => {
  console.log('model getting.../');

  // query to grab all data
  db.Photo.find({}, callback);
}

module.exports = {
  getPhotos
}