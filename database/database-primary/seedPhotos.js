const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
let faker = require('faker');

let albums = ['room', 'pool', 'gym', 'dining', 'amenities', 'bathroom', 'eventroom', 'roomview'];
let albumName = Math.random(albums.length)
const generatePhotos = () => {
  writer.pipe(fs.createWriteStream('./data/photos.csv'))
  for (let id = 1; id <= 10; id++) {
    writer.write({
      photo_id: id,
      hotel_id: faker.random.number({min: 1, max: 10000000}),
      category: albums[albumName],
      caption: faker.lorem.sentence(),
      image_url: faker.image.imageUrl(),
      user_id: faker.random.number({min: 1, max: 10000000}),
      date_posted: faker.date.past(),
      helpful_votes: faker.random.number({min: 0, max: 30})
    })
  }
  writer.end()
};

generatePhotos();