const fs = require('fs');
const csvWriter = require('csv-write-stream');
const moment = require('moment');
let writer = csvWriter();
let faker = require('faker');

let albums = ['Room & Suite', 'Pool & Beach', 'Gym', 'Dining', 'Amenities', 'Bathroom', 'Business Center & Event Room', 'View from Room'];

const generatePhotos = (start, end, filenumber) => {
  writer.pipe(fs.createWriteStream(`./data/photos${filenumber}.csv`))
  for (let id = start; id <= end; id++) {
    let randomAlbum = Math.floor(Math.random() * (albums.length - 0));
    let date = moment(faker.date.past()).format('MMM D');
    writer.write({
      photo_id: id,
      hotel_id: faker.random.number({min: 1, max: 10000000}),
      category: albums[randomAlbum],
      caption: faker.lorem.sentence(),
      date_posted: date,
      helpful_votes: faker.random.number({min: 0, max: 30}),
      image_url: faker.image.imageUrl(),
      user_id: faker.random.number({min: 1, max: 2000000}),
    })
    if (id % 100000 === 0) {
      console.log(id)
    }
  }
  writer.end()
};
// generatePhotos(1, 10000000, 1)
// generatePhotos(10000001, 20000000, 2);
// generatePhotos(20000001, 30000000, 3);
generatePhotos(30000001, 40000000, 4);
