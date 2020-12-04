const fs = require('fs');
const pg = require('./postgres.js');


const filePathListing = './database/monsterListing.csv';
const filePathPhotos = './database/monsterPhotos.csv';

// const readStreamListing = fs.createReadStream(filePathListing);

// const readStreamPhotos = fs.createReadStream(filePathPhotos);

// readStreamListing.on('data', ()=> {

// })

const seedListings = await pg.sequelize.query(`COPY listings FROM ${filePathListing} DELIMITER ',' CSV HEADER`, { type: pg.QueryTypes })



COPY listings FROM filePathListing DELIMITER ',' CSV HEADER;

COPY photos FROM filePathPhotos DELIMITER ',' CSV HEADER;