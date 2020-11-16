// to run a mongo file, from the shell execute "mongo < FILENAME.js"
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/photo-carousel'; // setting up a photo-carousel db



mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

const listingsSchema = new mongoose.Schema({
  // id: Number, //dont need this
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
  ]
});

let Listing = mongoose.model('Listing', listingsSchema);

// write a function that will save data to the mongo database
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

let returnListing = (cb) => {
  Listing.find({})
    .then( data => {
      console.log('THIS IS THE DATA FROM returnListing:', data);
      cb(data);
    })
    .catch( err => {
      console.log('err found:', err);
    });

};

module.exports.saveMany = saveMany;
module.exports.returnListing = returnListing;

// favorites list -- may not need a user schema at all
// const usersSchema = new mongoose.Schema({
//   id: Number,
//   sharedId: Number,
//   savedListings: [
//     {
//       name: String,
//       listings: [ Number ]
//     }
//   ]
// });

// });

// let User = mongoose.model('User', usersSchema);
// this (unfinished) function would write a single object
// let saveListing = (listingObj) => {
//   const newListing = new Listing ({
//     id: 100001,
//     sharedId: 1,
//     name: 'Test House',
//     rating: 4,
//     reviews: 1,
//     location: 'Santa Monica, California',
//     photos: [
//       {
//         description: 'Nice home',
//         url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/10%2BCozy%2BCalifornia%2BCabins%2Bon%2BAirbnb%2B-%2B3.jpg'
//       }
//     ],
//     // saved: false
//   });
// };

// let saveUser = (userObj) => {
//   const newUser = new User ({
//     id: 200001,
//     sharedId: 1,
//     savedListings: [
//       {
//         name: 'Jerry',
//         listings: [100001]
//       }
//     ]
//   });
// };

// let save = (repos, user/* repo TODO */) => { // pass in the data object returned from the request
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB

//   for (var i = 0; i < repos.data.length; i++) {
//     var id = repos.data[i].id;
//     var name = repos.data[i].name;
//     var url = repos.data[i]['html_url'];
//     var forks = repos.data[i].forks;

//     Repo.count({id: id}, function (err, count){ // this id check isn't right
//       if(count>0){
//           console.log('repo already exists')
//       } else {
//         console.log('did not exist')

//         const newRepo = new Repo ({
//           id: id,
//           name: name,
//           url: url,
//           forks: forks,
//         })
//         newRepo.save(function (err, repo) {
//           console.log('saving repo');
//           if (err) {
//             return console.log(err);
//           }
//         })
//       }
//     });
//   }
// }
// module.exports.save = save;
