const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
const controller = require('./controller.js');
const db = require('../database/index.js');
const cors = require('cors');

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* HOTEL INFO */

// GET request

app.get('/:hotelId', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
app.get('/api/photos/:hotelId', controller.getPhotos);

// POST request
app.post('/api/photos', controller.addPhotos);

// PATCH request
app.put('/api/photos/:hotelId', controller.updatePhotos);

// DELETE request
app.delete('/api/photos/:hotelId', controller.deletePhotos);

/* PHOTOS INFO */

// // GET request
// app.get('/api/photos/roomAlbum/:albumId', controller.getPhotos)

app.listen(port, () => console.log(`SERVER ON: listening at http://localhost:${port}`));