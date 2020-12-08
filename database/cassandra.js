/* eslint-disable no-console */
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const cassandra = require('cassandra-driver');

const authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');
// const contactPoints = ['PublicIp', 'PublicIp', 'PublicIp'];
const client = new cassandra.Client({
  contactPoints: [`${process.env.DB_HOST}:${process.env.DB_PORT}`],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc_photos',
  authProvider,
});

// let timeUUID = new Date();
// // timeUUID = timeUUID.toISOString();
// const testInsert = 'INSERT INTO photos(photo_id) VALUES(now())';

// const test = async () => {
//   const query1 = await client.execute(testInsert);

//   console.log(query1);
// };
// test();

const getListing = async (id, cb) => {
  const listingByIdQ = 'SELECT * FROM listings_by_id WHERE share_id=?';
  const params = [id];

  const listingById = await client.execute(listingByIdQ, params, { prepare: true });

  if (listingById.rows.length) {
    const { rating } = listingById.rows[0];
    const data = {
      sharedId: listingById.rows[0].share_id,
      name: listingById.rows[0].name || '',
      rating: rating || '',
      reviews: listingById.rows[0].reviews || '',
      location: listingById.rows[0].listing || '',
      photos: [],
    };
    listingById.rows.forEach((item) => {
      const photo = {
        description: item.description,
        photo_id: item.photo_id,
        share_id: item.share_id,
        url: item.url,
      };
      data.photos.push(photo);
    });
    cb(null, [data]);
  } else {
    cb('ERROR FETCHING DATA');
  }
};

const updateListingName = async (id, update, cb) => {
  const updateListingNameQ = 'UPDATE listings_by_id SET name=? WHERE share_id=?';
  const params = [update.name, id];

  const updateName = await client.execute(updateListingNameQ, params, { prepare: true })
    .catch((err) => {
      cb(err);
    });
  if (updateName) {
    cb(null, updateName);
  }
};

const addListing = async (post, cb) => {
  const listingQ = 'INSERT INTO listings_by_id(share_id, name, rating, reviews, photo_id, listing, url, description) VALUES(?,?,?,?,?,?,?,?)';
  const shareId = uuidv4();
  const photoId = uuidv4();
  const params = [
    shareId,
    post.name,
    post.rating,
    post.reviews,
    photoId,
    post.listing,
    post.url,
    post.description,
  ];

  const listing = await client.execute(listingQ, params, { prepare: true })
    .catch((err) => {
      cb(err);
    });
  if (listing) {
    cb(null, listing);
  }
};

const removeListing = async (id, cb) => {
  const removeListingQ = 'DELETE FROM listings_by_id WHERE share_id=?';
  const params = [id];

  const remove = await client.execute(removeListingQ, params, { prepare: true })
    .catch((err) => {
      cb(err);
    });
  if (remove) {
    cb(null, remove);
  }
};

module.exports = {
  getListing,
  updateListingName,
  addListing,
  removeListing,
};
