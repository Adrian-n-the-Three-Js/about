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
      price: faker.finance.amount(50, 400),
      reviews: faker.random.number({ min: 0, max: 1000})
    })
    if (id % 100000 === 0) {
      console.log(id)
    }
  }
  writer.end()
};


// generateHotels(1, 1000000);
// generateHotels(1000001, 2000000);
// generateHotels(2000001, 3000000);
// generateHotels(3000001, 4000000);
// generateHotels(4000001, 5000000);
// generateHotels(5000001, 6000000);
// generateHotels(6000001, 7000000);
// generateHotels(7000001, 8000000);
// generateHotels(8000001, 9000000);
// generateHotels(9000001, 10000000);
generateHotels(1, 10000000);