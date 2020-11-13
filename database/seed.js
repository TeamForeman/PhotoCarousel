// write my data creator here

const faker = require('faker');

// =========== need arrays that will hold all the fake data to generate============


// write an array of listing names
var names = ['Cabin in the woods', 'Grandma\'s cozy cottage', 'Mountain escape', 'Hut on a hill', 'Forest-side cabin', 'Luxurious time away in the woods', 'Crazy mountain container casa', '"The Burrow"', 'Beautiful Home in Scenic Area', 'Lovely Vacation Home in the Great Outdoors', 'Smokey\'s Sleepy Cave', 'The Lodge', 'Glamping is Happiness Home', 'Secluded Private Wilderness Home'];
// write an array of photo urls and descriptions
var photos = [];

// write a function that will pull about 8-15 photos and put them in an array


// need to write function(s) that will build 100 data objects
const listingMaker = (max) => {
  var data = [];
  var x = 1;

  while (x < max) {
    array.push({
      // this will push a single data object
      // all of the information matching the schema's framework
      sharedId: x,
      name: "", // needs a function
      rating: 0, // needs a random number between 0 and 5
      reviews: 0, // needs a random number
      location: "", // needs a random location from faker
      photos: [], // needs a function that will generate a random collection of photos

    });
    x++;
  }

  // invoke Listing.insertMany(data) -- will
};
