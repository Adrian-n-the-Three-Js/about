# Hoteloooo

> Project description

## Related Projects

  - https://github.com/Adrian-n-the-Three-Js/reviews
  - https://github.com/Adrian-n-the-Three-Js/about
  - https://github.com/Adrian-n-the-Three-Js/photo-carousel
  - https://github.com/Adrian-n-the-Three-Js/calendar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## REST API

### GET /api/photos/:hotelId
```
app.get('/api/photos/:hotelId', (req, res) => {
  const _id = req.params.hotelId || '1';
  const getPhotos = (id, callback) => {
    db.Photo.find({ hotelId: id }, callback);
  };
  getPhotos(_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
```

### POST /api/photos
```
app.post('/api/photos', (req, res) => {
  const addPhotos = (body, callback) => {
    let photos = new db.Photo(body)
    photos.save(callback);
  }
  addPhotos(req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
```


### PATCH /api/photos/:hotelId
```
app.put('/api/photos/:hotelId', (req, res) => {
  let id = req.params.hotelId
  const updatePhotos = (id, body, callback) => {
    db.Photo.update({ hotelId : id}, body, callback)
  }
  updatePhotos(id, req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});
```

### DELETE /api/photos/:hotelId
```
app.delete('/api/photos/:hotelId', (req, res) => {
  let _id = req.params.hotelId
  const deletePhotos = (id, callback) => {
    db.Photo.deleteOne({ hotelId : id }, callback)
  }
  deletePhotos(_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});
```

