const db = require('../database');

const getPhotos = (id, callback) => {
  // query to grab all data
  db.Photo.find({ hotelId: id }, callback);
};

const addPhotos = (body, callback) => {
  let photos = new db.Photo(body)
  photos.save(callback);
}

const updatePhotos = (id, body, callback) => {
  db.Photo.update({ hotelId : id}, body, callback)
}

const deletePhotos = (id, callback) => {
  db.Photo.deleteOne({ hotelId : id }, callback)
}
// const getPhotos = (albumId, callback) => {
//   // query to grab all data
//   db.Photo.find({_id: albumId}).roomAlbum;
// };
module.exports = {
  getPhotos,
  addPhotos,
  updatePhotos,
  deletePhotos
};