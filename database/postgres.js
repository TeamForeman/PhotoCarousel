/* eslint-disable no-console */
require('dotenv').config();
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const sequelize = new Sequelize('sdc_photo_carousel', process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

sequelize.authenticate()
  .then(() => {
    console.log('Yay!');
  })
  .catch((err) => {
    console.error(err);
  });

const Listing = sequelize.define('listing', {
  share_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.FLOAT,
  },
  reviews: {
    type: DataTypes.INTEGER,
  },
  listing: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});

const Photo = sequelize.define('photo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  share_id: {
    type: DataTypes.INTEGER,
  },
  url: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});

Listing.hasMany(Photo, { foreignKey: 'share_id' });
Photo.belongsTo(Listing, { foreignKey: 'share_id' });

sequelize.sync();

module.exports = {
  Listing,
  Photo,
  QueryTypes,
  sequelize,
};
