const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
let faker = require('faker');

const genHotels = () => {
  writer.pipe(fs.createWriteStream('/data/hotel_info'))
  for (let id = 1; id <= 10000000; id++) {
    writer.write({
      hotel_id: id++,
      name: faker.company.companyName(),
      city: faker.address.city(),
      price: faker.finance.amount(50, 400),
      reviews: faker.random.number({ min: 0, max: 1000})
    })
  }
};

let albums = [room, pool, gym, dining, amnenities, bathroom, eventroom, roomview];

const genPhotos = () => {
  writer.pipe(fs.createWriteStream('/data/hotel_info'))
  for (let id = 1; id <= 10000000; id++) {
    writer.write({
      photo_id: id++,
      hotel_id: faker.random.number({min: 1, max: 10000000}),
      category: Math.random(albums.length),
      caption: faker.lorem.sentence(),
      image_url: faker.image.imageUrl(),
      user_id: faker.random.number({min: 1, max: 10000000}),
      date_posted: faker.date.past(),
      helpful_votes: faker.random.number({min: 0, max: 30})
    })
  }
};

const genUsers = () => {
  writer.pipe(fs.createWriteStream('/data/hotel_info'))
  for (let id = 1; id <= 10000000; id++) {
    writer.write({
      user_id: id++,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar_url: faker.image.imageUrl(),
      location: faker.address.city(),
      contribution: faker.random.number({min: 0, max: 100})
    })
  }
};