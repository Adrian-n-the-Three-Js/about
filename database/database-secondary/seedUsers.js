const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
let faker = require('faker');

const generateUsers = (start, end) => {
  writer.pipe(fs.createWriteStream('./data/users.csv'))
  for (let id = start; id <= end; id++) {
    writer.write({
      user_id: id,
      name: faker.name.findName(),
      avatar_url: faker.image.imageUrl(),
      location: faker.address.city(),
      contributions: faker.random.number({min: 0, max: 100})
    })
  }
  writer.end();
};

generateUsers(1, 2000000);