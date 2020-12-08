/* eslint-disable no-loop-func */
const fs = require('fs');
const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const cliProgress = require('cli-progress');

const filePathListing = './database/monsterListing.csv';
const filePathPhotos = './database/monsterPhotos.csv';

const totalRecords = 10000000;

const barOptions = {
  format: 'Seeding Instance | {bar} | {percentage}% | {duration}s',
  stopOnComplete: true,
};
const multiBar = new cliProgress.MultiBar(barOptions);

const headerListing = 'share_id,name,rating,reviews,location\n';
fs.writeFileSync(filePathListing, headerListing);
const writeStreamListing = fs.createWriteStream(filePathListing, { flags: 'a' });
const listingBar = multiBar.create(totalRecords, 0);

// WRITE CSV FOR LISTINGS
const fakeListings = (start) => {
  let count = start;

  while (count <= totalRecords) {
    listingBar.update(count);

    const shareId = count;
    const name = faker.commerce.productName();
    const rating = parseFloat(((Math.random() * 4) + 1).toFixed(2));
    const reviews = Math.floor((Math.random() * 100));
    const location = `${faker.address.city()} ${faker.address.state()} ${faker.address.country().split(',').join(' ')}`;

    const listing = `${shareId}, ${name}, ${rating}, ${reviews}, ${location}\n`;

    if (!writeStreamListing.write(listing)) {
      writeStreamListing.once('drain', () => {
        fakeListings(count += 1);
      });
      return;
    }
    count += 1;
  }
  writeStreamListing.end();
};
fakeListings(1);

// CREATE POOL OF 1000 PHOTOS
const photoList = [];
for (let i = 0; i < 1000; i += 1) {
  photoList.push(`https://loremflickr.com/320/240/${faker.address.country().split(' ')[0]}`);
}

const headerPhotos = 'photo_id, share_id, description, url\n';
fs.writeFileSync(filePathPhotos, headerPhotos);
const writeStreamPhotos = fs.createWriteStream(filePathPhotos, { flags: 'a' });
const photosBar = multiBar.create(totalRecords, 0);

// let tableId = 1;
// WRITE CSV FOR PHOTOS
const fakePhotos = (start) => {
  let count = start;

  while (count <= totalRecords) {
    photosBar.update(count);
    const randomPhotos = Math.floor((Math.random() * 7) + 7);
    const shareId = count;

    for (let j = 0; j < randomPhotos; j += 1) {
      const description = faker.lorem.words();
      const randomIndex = Math.floor((Math.random() * photoList.length - 1) + 1);
      const photoId = uuidv4();

      if (!writeStreamPhotos.write(`${photoId}, ${shareId}, ${description}, ${photoList[randomIndex]}\n`)) {
        writeStreamPhotos.once('drain', () => {
          // tableId += 1;
          fakePhotos(count += 1);
        });
        return;
      }
      // tableId += 1;
    }
    count += 1;
  }
  writeStreamPhotos.end();
};
fakePhotos(1);
