const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
let faker = require('faker');

let albums = ['Room & Suite', 'Pool & Beach', 'Gym', 'Dining', 'Amenities', 'Bathroom', 'Business Center & Event Room', 'View from Room'];

const generatePhotos = (start, end, filenumber) => {
  writer.pipe(fs.createWriteStream(`./data/photos${filenumber}.csv`))
  for (let id = start; id <= end; id++) {
    let randomAlbum = Math.floor(Math.random() * (albums.length - 0));
    writer.write({
      photo_id: id,
      hotel_id: faker.random.number({min: 1, max: 10000000}),
      category: albums[randomAlbum],
      caption: faker.lorem.sentence(),
      date_posted: faker.date.past(),
      helpful_votes: faker.random.number({min: 0, max: 30})
      image_url: faker.image.imageUrl(),
      user_id: faker.random.number({min: 1, max: 10000000}),
    })
  }
  writer.end()
};
// generatePhotos(1, 5000000, 1);
// generatePhotos(5000001, 10000000, 2);
// generatePhotos(10000001, 15000000, 3);
// generatePhotos(15000001, 20000000, 4);
// generatePhotos(20000001, 25000000, 5);
// generatePhotos(25000001, 30000000, 6);
// generatePhotos(30000001, 35000000, 7);
// generatePhotos(35000001, 40000000, 8);