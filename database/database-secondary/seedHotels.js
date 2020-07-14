const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
let faker = require('faker');

const generateHotels = (start, end) => {
  writer.pipe(fs.createWriteStream('./data/hotels.csv'))
  for (let id = start; id <= end; id++) {
    writer.write({
      hotel_id: id,
      name: faker.company.companyName(),
      city: faker.address.city(),
      price: faker.finance.amount(50, 400, 0, '$'),
      reviews: faker.random.number({ min: 0, max: 1000})
    })
    if (id % 100000 === 0) {
      console.log(id)
    }
  }
  writer.end()
  console.log('done')
};

generateHotels(1, 10000000);

