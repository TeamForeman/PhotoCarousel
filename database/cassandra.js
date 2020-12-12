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

const getListing = (id, cb) => {
  const listingByIdQ = 'SELECT * FROM listings_by_id WHERE share_id=?';
  const params = [id];

  client.execute(listingByIdQ, params, { prepare: true }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      const { rating } = result.rows[0];
      const data = {
        sharedId: result.rows[0].share_id,
        name: result.rows[0].name || '',
        rating: rating || '',
        reviews: result.rows[0].reviews || '',
        location: result.rows[0].listing || '',
        photos: [],
      };
      result.rows.forEach((item) => {
        const photo = {
          description: item.description,
          photo_id: item.photo_id,
          share_id: item.share_id,
          url: item.url,
        };
        data.photos.push(photo);
      });
      cb(null, [data]);
    }
  });
};

const updateListingName = (id, update, cb) => {
  const updateListingNameQ = 'UPDATE listings_by_id SET name=? WHERE share_id=?';
  const params = [update.name, id];

  client.execute(updateListingNameQ, params, { prepare: true }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const addListing = (post, cb) => {
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

  client.execute(listingQ, params, { prepare: true }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const removeListing = async (id, cb) => {
  const removeListingQ = 'DELETE FROM listings_by_id WHERE share_id=?';
  const params = [id];

  client.execute(removeListingQ, params, { prepare: true }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

module.exports = {
  getListing,
  updateListingName,
  addListing,
  removeListing,
};
