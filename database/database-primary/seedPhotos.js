const fs = require('fs');
const csvWriter = require('csv-write-stream');
const moment = require('moment');
let writer = csvWriter();
let faker = require('faker');

let albums = ['Room', 'Pool', 'Gym', 'Dining', 'Amenities', 'Bathroom', 'Eventroom', 'Roomview'];
const generatePhotos = (start, end) => {
  writer.pipe(fs.createWriteStream('./data/photos.csv'))
  for (let id = start ; id <= end; id++) {
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

generatePhotos(1, 1000000);
// generatePhotos(1000001, 2000000);
// generatePhotos(2000001, 3000000);
// generatePhotos(3000001, 4000000);
// generatePhotos(4000001, 5000000);
// generatePhotos(5000001, 6000000);
// generatePhotos(6000001, 7000000);
// generatePhotos(7000001, 8000000);
// generatePhotos(8000001, 9000000);
// generatePhotos(9000001, 10000000);