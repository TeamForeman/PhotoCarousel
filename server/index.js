/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
// const db = require('../database/mongo.js');
// const pg = require('../database/postgres.js');
const cs = require('../database/cassandra.js');
// const bluebird = require('bluebird');

const app = express();

// MIDDLEWARE
app.use(compression());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// API ENDPOINTS
app.get('/carousel-module/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/carousel-module/photos/:id', (req, res) => {
  const { id } = req.params;
  cs.getListing(id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  });
});

app.put('/api/carousel-module/photos/:id', (req, res) => {
  const { id } = req.params;
  cs.updateListingName(id, req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send();
    } else {
      res.status(204).send(data);
    }
  });
});

app.post('/api/carousel-module/photos/', (req, res) => {
  cs.addListing(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send();
    } else {
      res.status(201).send(data);
    }
  });
});

app.delete('/api/carousel-module/photos/:id', (req, res) => {
  const { id } = req.params;
  cs.removeListing(id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send();
    } else {
      res.status(204).send(data);
    }
  });
});

module.exports = {
  app,
};
