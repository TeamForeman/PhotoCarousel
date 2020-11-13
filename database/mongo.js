// to run a mongo file, from the shell execute "mongo < FILENAME.js"
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/photos'; // setting up a photos db?

mongoose.connect(mongoDB, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to the db');


  const listingsSchema = new mongoose.Schema({
    id: Number, //dont need this
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
    saved: Boolean // this is per user not per listing
  });


  // favorites list -- may not need a user schema at all
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


let Listing = mongoose.model('Listing', listingsSchema);
let User = mongoose.model('User', usersSchema);


let saveListing = (listingObj) => {
  const newListing = new Listing ({
    id: 100001,
    sharedId: 1,
    name: 'Test House',
    rating: 4,
    reviews: 1,
    location: 'Santa Monica, California',
    photos: [
      {
        description: 'Nice home',
        url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/10%2BCozy%2BCalifornia%2BCabins%2Bon%2BAirbnb%2B-%2B3.jpg'
      }
    ],
    saved: false
  });
};

let saveUser = (userObj) => {
  const newUser = new User ({
    id: 200001,
    sharedId: 1,
    savedListings: [
      {
        name: 'Jerry',
        listings: [100001]
      }
    ]
  });
};

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
