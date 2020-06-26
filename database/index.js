const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotel', {useNewUrlParser: true, useUnifiedTopology: true});

// test connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DATABASE Connected!');
});

// create schema
// native mongo object id will represent hotel id
const photoSchema = new mongoose.Schema({
  hotelName: String,
  hotelPrice: String,
  roomAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  diningAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  poolAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  gymAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  amenitiesAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  bathroomAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  eventRoomAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  roomViewAlbum: [
    {
      user: String,
      userAvatarURL: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
});

// compile schema into a model
const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  db: db,
  Photo: Photo
};
