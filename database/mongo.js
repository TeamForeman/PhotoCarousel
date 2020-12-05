// to run a mongo file, from the shell execute "mongo < FILENAME.js"
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/photo-carousel'; // setting up a photo-carousel db



mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

const listingsSchema = new mongoose.Schema({
  sharedId: Number,
  name: String,
  rating: Number,
  reviews: Number,
  location: String,
  photos: [
    {
      description: String,
      url: String,
      photoId: Number
    }
  ]
});

let Listing = mongoose.model('Listing', listingsSchema);

let saveMany = (data) => {
  Listing.remove({}, function(err) {
    console.log('old listing collection removed');
  });

  Listing.insertMany(data)
    .then(()=>{
      console.log('DATA ADDED SUCCESSFULLY');
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    });
};

let returnListing = (id, cb) => {
  Listing.find({sharedId: id})
    .then( data => {
      console.log('THIS IS THE DATA FROM returnListing:', data);
      cb(data);
    })
    .catch( err => {
      console.log('err found:', err);
    });

};

const addItem = (data, cb) => {
  Listing.create({
    // all of the information matching the schema's framework
    sharedId: x,
    name: names[getRandomNum(0, names.length)],
    rating: makeRandomRating(),
    reviews: getRandomNum(4, 80), // needs a random number
    location: faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.country(),
    photos: randomPhotoGrouper(getRandomNum(7, 14))

  })
}

module.exports = {
  saveMany,
  returnListing
}