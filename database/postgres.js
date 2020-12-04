require('dotenv').config();
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const sequelize = new Sequelize('sdc_photo_carousel', process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false
});

sequelize.authenticate()
.then(()=> {
  console.log('Yay!');
})
.catch((err)=> {
  console.error(err);
})

const Listing = sequelize.define('listing', {
  shareId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.FLOAT
  },
  reviews: {
    type: DataTypes.INTEGER
  },
  listing: {
    type: DataTypes.STRING
  }
});

const Photo = sequelize.define('photo', {
  shareId: {
    type: DataTypes.INTEGER
  },
  url: {
    type: DataTypes.STRING
  }
});

Listing.hasMany(Photo, { foreignKey: 'shareId' });
Photo.belongsTo(Listing, { foreignKey: 'shareId' });

sequelize.sync();

module.exports = {
  Listing,
  Photo,
  QueryTypes,
  sequelize
};