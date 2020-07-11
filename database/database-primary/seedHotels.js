const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
let faker = require('faker');

const generateHotels = () => {
  writer.pipe(fs.createWriteStream('./data/hotels.csv'))
  for (let id = 1; id <= 10; id++) {
    writer.write({
      hotel_id: id,
      name: faker.company.companyName(),
      city: faker.address.city(),
      price: faker.finance.amount(50, 400),
      reviews: faker.random.number({ min: 0, max: 1000})
    })
  }
  writer.end()
};

generateHotels();