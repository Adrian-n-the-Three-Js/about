const db = require('../database')

const getPhotos = (callback) => {
  console.log('model getting.../')
  // insert query
  Photo.find({}, callback)
  console.log('test')
}

module.exports = {
  getPhotos
}