const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotel', {useNewUrlParser: true, useUnifiedTopology: true});

// test connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DATABASE Connected!');
});

// create schema
// native mongo object id will represent hotel id
const photoSchema = new mongoose.Schema({
  roomAlbum: [
    {
      photo_id: Number,
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number
    }
  ],
  diningAlbum: [
    {
      photo_id: Number,
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number
    }
  ],
  poolAlbum: [
    {
      photo_id: Number,
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number
    }
  ],
  gymAlbum: [
    {
      photo_id: Number,
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number
    }
  ]
});

// compile schema into a model
const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  db: db,
  Photo: Photo
}
