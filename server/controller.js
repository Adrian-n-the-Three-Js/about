const Model = require('./model.js');

const getPhotos = (req, res) => {
  console.log(req.params.hotelId)
  const id = req.params.hotelId || '1';
  Model.getPhotos(id, (err, data) => {
    if (err) {
      console.log(data, 'test data')
      res.status(404).send(err);
    } else {
      res.status(200).send(data)
    }
  });
};

// const addPhotos = (req, res) => {
//   Model.addPhotos(req.body, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// }

// const updatePhotos = (req, res) => {
//   let id = req.params.hotelId
//   Model.updatePhotos(id, req.body, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// }

// const deletePhotos = (req, res) => {
//   let id = req.params.hotelId
//   Model.deletePhotos(id, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// }
// const getPhotos = (req, res) => {

//   let id = req.params.roomAlbum[0]._id
//   Model.getPhotos(id, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// };
module.exports = {
  getPhotos
  // addPhotos,
  // updatePhotos,
  // deletePhotos
};
