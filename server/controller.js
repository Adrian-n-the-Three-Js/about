const Model = require('./model.js')

const getPhotos = (req, res) => {
  console.log('controller getting.../')
  Model.getPhotos((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(null, data)
    }
  })
}

module.exports = {
  getPhotos
}