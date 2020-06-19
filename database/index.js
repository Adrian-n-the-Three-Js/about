const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotel', {useNewUrlParser: true});

// test connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DATABASE Connected!');
});

// create schema
const photoSchema = new mongoose.Schema({
  hotel_id: Number,
  photo_id: Number,
  user: String,
  userAvatarURL: String,
  imageUrl: String,
  caption: String,
  category: String,
  datePosted: String,
  helpfulVotes: Number
});

// compile schema into a model
const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  db: db,
  Photo: Photo
}
