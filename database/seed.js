// write my data creator here
const faker = require('faker');

// random number between two values
var getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

var makeRandomRating = () => {
  var num = getRandomNum(1, 5);
  var dec = getRandomNum(1, 10);

  var rating = Number(num + '.' + dec)
};
// =========== arrays that will hold dummy data to generate random data objects ============

// write an array of listing names
var names = ['Cabin in the woods', 'Grandma\'s cozy cottage', 'Mountain escape', 'Hut on a hill', 'Forest-side cabin', 'Luxurious time away in the woods', 'Crazy mountain container casa', '"The Burrow"', 'Beautiful Home in Scenic Area', 'Lovely Vacation Home in the Great Outdoors', 'Smokey\'s Sleepy Cave', 'The Lodge', 'Glamping is Happiness Home', 'Secluded Private Wilderness Home'];

// write an array of photo urls and descriptions
var photos = [
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/10%2BCozy%2BCalifornia%2BCabins%2Bon%2BAirbnb%2B-%2B3.jpg', description: 'Cozy common space'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/19469.jpg', description: 'Comfortable queen bed with functional heater'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/39501703-airbnb-log.webp', description: 'Entryway to the cabin'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/adirondack-cabin-rental-warners-camp-upstate-getaway-fire-pit-lake-placid-airbnb-rental.jpg', description: 'Backyard seating area for large groups'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/Airbnb-cabins-in-big-bear-lake.jpg', description: 'Outdoor firepit'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-cabins-near-philadelphia-fall.jpg', description: 'Cabin in the fall'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/Airbnb-Gear-Patrol-Lead-Full-2.jpg', description: 'Snowy season jacuzzi'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-in-sedona-windy-rock-lodge.jpg', description: 'Open kitchen and dining space'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-rustic-cabins-2-1d0e7999983a46a29a039ae6b12ffe1a.png', description: 'Double full beds'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/airbnb-rustic-cabins-4-08585fa8091b4aff971ec16125d8d000.png', description: 'Kitchen leading into the back yard'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/Cabins-on-the-square-wimberley-creek-house-loft-bedroom.jpg', description: 'Master bedroom with queen bed' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/couples-retreat-cabin-gatlinburg.jpg', description: 'Upper level deck'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/Cozy-Wood-Cabin-Ireland-Airbnb-off-grid-2-889x667.jpg', description: 'Covered rec area'},
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/Donnas-Premier-Lodging-Cabin-Google.jpg', description: 'Spatious gathering area with fireplace' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/download-1.jpg', description: 'Lakeside relaxation' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/download-2.jpg', description: 'View of the lodge from the lake - boats available' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/download-3.jpg', description: 'Working fireplace in living space' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/download.jpg', description: 'Quaint cabin tucked away in the woods' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/hudson-valley-airbnb-cabin-8.jpg', description: 'Stocked kitchen with gas range' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/images-1.jpg', description: 'Relax on the docks' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/images.jpg', description: 'Lower level and loft' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/luna-cabin-airbnb-.webp', description: 'Spend the day here with the whole family' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/maxresdefault.jpg', description: 'The Cabin' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/original_3-cabin-rentals-airbnb-atlanta_treehouse.webp', description: 'Fun outdoor area' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/StoryBook-Unit-7-2.jpg', description: 'Wrap-around deck' },
  { url: 'https://beartnt-photos.s3-us-west-1.amazonaws.com/Z43EDHGWDFEUXCZAEZQYD4IR5Q.jpg', description: 'Outdoor seating' }
];

// write a function that will pull about 8-15 photos and put them in an array
var randomPhotoGrouper = (x) => {
  // create a result array of photos and descriptions
  var photoGroup = [];
  var i = 0;
  while (i < x) {
    var index = getRandomNum(0, photos.length);
    photoGroup.push(photos[index]);
    i++;
  }
  return photoGroup;
};


// need to write function(s) that will build 100 data objects
var listingMaker = (max) => {
  var data = [];
  var x = 1;

  while (x <= max) {
    // this will push a single data object
    data.push({
      // all of the information matching the schema's framework
      sharedId: x,
      name: names[getRandomNum(0, names.length)],
      rating: 0,
      reviews: getRandomNum(4, 80), // needs a random number
      location: faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.country(),
      photos: randomPhotoGrouper(getRandomNum(7, 14))

    });
    x++;
  }

  // return data with all of the listings
  return data;
};

var listings = listingMaker(100);
//  Listing.insertMany(data) -- will

module.exports = {listings};
