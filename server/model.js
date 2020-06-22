const db = require('../database')

const getPhotos = (callback) => {
  console.log('model getting.../')

  // query to grab all data
  db.Photo.find({}, callback)
  console.log('test')
}

module.exports = {
  getPhotos
}