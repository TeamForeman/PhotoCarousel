const fs = require('fs');
const pg = require('./postgres.js');


const filePathListing = './database/monsterListing.csv';
const filePathPhotos = './database/monsterPhotos.csv';

// const readStreamListing = fs.createReadStream(filePathListing);

// const readStreamPhotos = fs.createReadStream(filePathPhotos);

// readStreamListing.on('data', ()=> {

// })


COPY listings FROM filePathListing DELIMITER ‘,’ CSV HEADER;