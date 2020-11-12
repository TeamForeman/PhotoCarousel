// to run a mongo file, from the shell execute "mongo < FILENAME.js"
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/photos'; // setting up a photos db?

mongoose.connect(mongoDB, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to the db');




  const listingsSchema = new mongoose.Schema({
    id: Number,
    sharedId: Number,
    name: String,
    rating: Number,
    reviews: Number,
    location: String,
    photos: [
      {
        description: String,
        url: String
      }
    ],
    saved: Boolean
  });


  // favorites list
  const usersSchema = new mongoose.Schema({
    id: Number,
    sharedId: Number,
    savedListings: [
      {
        name: String,
        listings: [ Number ]
      }
    ]
  });

});
