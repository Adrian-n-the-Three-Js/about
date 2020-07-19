const Model = require('./model.js');

const getPhotos = (req, res) => {
  const id = req.params.hotelId || '1';
  Model.getPhotos(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data)
    }
  });
};

const addPhotos = (req, res) => {
  Model.addPhotos(req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

const updatePhotos = (req, res) => {
  let id = req.params.hotelId
  Model.updatePhotos(id, req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

const deletePhotos = (req, res) => {
  let id = req.params.hotelId
  Model.deletePhotos(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

module.exports = {
  getPhotos,
  addPhotos,
  updatePhotos,
  deletePhotos
};
