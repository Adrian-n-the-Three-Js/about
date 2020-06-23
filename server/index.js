const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('./controller.js');

// test express connection
// app.get('/', (req, res) => res.send('Hello World!'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
console.log('path', path.join(__dirname, '../client/dist'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// GET request
app.get('/api/photos', controller.getPhotos);

app.listen(port, () => console.log(`SERVER ON: listening at http://localhost:${port}`));