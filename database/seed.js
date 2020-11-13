// write my data creator here

// will need to work on arrays today

const faker = require('faker');

// =========== need arrays that will hold all the fake data to generate============


// write an array of listing names
var names = ['Cabin in the woods', 'Grandma\'s cozy cottage', 'Mountain escape', 'Hut on a hill', 'Forest-side cabin', 'Luxurious time away in the woods', 'Crazy mountain container casa', '"The Burrow"', 'Beautiful Home in Scenic Area', 'Lovely Vacation Home in the Great Outdoors', 'Smokey\'s Sleepy Cave', 'The Lodge', 'Glamping is Happiness Home', 'Secluded Private Wilderness Home'];
// write an array of photo urls and descriptions
var photos = [
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/10%2BCozy%2BCalifornia%2BCabins%2Bon%2BAirbnb%2B-%2B3.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/19469.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/39501703-airbnb-log.webp',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/adirondack-cabin-rental-warners-camp-upstate-getaway-fire-pit-lake-placid-airbnb-rental.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/Airbnb-cabins-in-big-bear-lake.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-cabins-near-philadelphia-fall.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/Airbnb-Gear-Patrol-Lead-Full-2.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-in-sedona-windy-rock-lodge.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-rustic-cabins-2-1d0e7999983a46a29a039ae6b12ffe1a.png',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-rustic-cabins-4-08585fa8091b4aff971ec16125d8d000.png',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/Cabins-on-the-square-wimberley-creek-house-loft-bedroom.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/couples-retreat-cabin-gatlinburg.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/Cozy-Wood-Cabin-Ireland-Airbnb-off-grid-2-889x667.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/Donnas-Premier-Lodging-Cabin-Google.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/download-1.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/download-2.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/download-3.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/download.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/hudson-valley-airbnb-cabin-8.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/images-1.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/images.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/luna-cabin-airbnb-.webp',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/maxresdefault.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/original_3-cabin-rentals-airbnb-atlanta_treehouse.webp',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/StoryBook-Unit-7-2.jpg',
  'https://beartnt-photos.s3-us-west-1.amazonaws.com/Z43EDHGWDFEUXCZAEZQYD4IR5Q.jpg'
  // 'https://beartnt-photos.s3-us-west-1.amazonaws.com/',
];

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
