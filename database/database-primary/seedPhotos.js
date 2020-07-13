const fs = require('fs');
const csvWriter = require('csv-write-stream');
const moment = require('moment');
let writer = csvWriter();
let faker = require('faker');

let albums = ['Room', 'Pool', 'Gym', 'Dining', 'Amenities', 'Bathroom', 'Eventroom', 'Roomview'];
const generatePhotos = () => {
  writer.pipe(fs.createWriteStream('./data/photos.csv'))
  for (let id = 1; id <= 10; id++) {
    let randomAlbum = Math.floor(Math.random() * (albums.length - 0));
    let date = moment(faker.date.past()).format('MMM D');
    writer.write({
      hotel_id: faker.random.number({min: 1, max: 10000000}),
      category: albums[randomAlbum],
      photo_id: id,
      avatar_url: faker.image.imageUrl(),
      caption: faker.lorem.sentence(),
      contributions: faker.random.number({min: 0, max: 100}),
      date_posted: date,
      helpful_votes: faker.random.number({min: 0, max: 30}),
      location: faker.address.city(),
      photo_url: faker.image.imageUrl(),
      user: faker.name.findName()
    })
  }
  writer.end()
};

generatePhotos();