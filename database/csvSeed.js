const fs = require('fs');
const faker = require('faker');
const cliProgress = require('cli-progress');

const filePathListing = './database/monsterListing.csv';
const filePathPhotos = './database/monsterPhotos.csv';

const totalRecords = 10000000;

const barOptions = {
  format: 'Seeding Instance | {bar} | {percentage}% | {duration}s',
  stopOnComplete: true
}
const multiBar = new cliProgress.MultiBar(barOptions);

var headerListing = 'share_id,name,rating,reviews,location\n';
fs.writeFileSync(filePathListing, headerListing);
let writeStreamListing = fs.createWriteStream(filePathListing, { flags: 'a' });
const listingBar = multiBar.create(totalRecords, 0);

// WRITE CSV FOR LISTINGS
const fakeListings = function(start) {
  var count = start;

  while (count <= totalRecords) {
    listingBar.update(count);

    var shareId = count;
    var name = faker.commerce.productName();
    var rating = ((Math.random() * 6) + 1).toFixed(2);
    var reviews = Math.floor((Math.random() * 6) + 1);
    var location = `${faker.address.city()} ${faker.address.state()} ${faker.address.country().split(',').join(' ')}`;

    var listing = `${shareId}, ${name}, ${rating}, ${reviews}, ${location}\n`

    if (!writeStreamListing.write(listing)) {
      writeStreamListing.once('drain', ()=> {
        fakeListings(count += 1);
      });
      return
    }
    count++;
  }
  writeStreamListing.end();

}
fakeListings(1);


// CREATE POOL OF 1000 PHOTOS
var photoList = [];
for (var i = 0; i < 1000; i++) {
  photoList.push(`https://loremflickr.com/320/240/${faker.address.country().split(' ')[0]}`);
}

var headerPhotos = 'id, share_id, url\n';
fs.writeFileSync(filePathPhotos, headerPhotos);
let writeStreamPhotos = fs.createWriteStream(filePathPhotos, { flags: 'a' });
const photosBar = multiBar.create(totalRecords, 0);

let tableId = 1;
// WRITE CSV FOR PHOTOS
const fakePhotos = function(start) {
  var count = start;

  while (count <= totalRecords) {
    photosBar.update(count);
    var randomPhotos = Math.floor((Math.random() * 7) + 7);
    var shareId = count;

    for (var j = 0; j < randomPhotos; j++) {
      var randomIndex = Math.floor((Math.random() * photoList.length - 1) + 1)

      if (!writeStreamPhotos.write(`${tableId}, ${shareId}, ${photoList[randomIndex]}\n`)) {
        writeStreamPhotos.once('drain', ()=> {
          tableId++;
          fakePhotos(count += 1);
        });
        return;
      }
      tableId++;
    }
    count++;
  }
  writeStreamPhotos.end();
}
fakePhotos(1);
