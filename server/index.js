const express = require('express');
const app = express();
const db = require('../database/mongo.js');
const pg = require('../database/postgres.js');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const path = require('path');

// MIDDLEWARE
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// API ENDPOINTS
app.get('/carousel-module/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/carousel-module/photos/:id', (req, res) => {
  var id = req.params.id;
  db.returnListing(id, (x) => {
    var data = x;
    res.send(data);
  });
});

app.put('/api/carousel-module/photos/:id', (req, res) => {
  res.status(204).send();
});

app.post('/api/carousel-module/photos/', (req, res) => {

  res.status(201).send()
});

app.delete('/api/carousel-module/photos/:id', (req, res) => {

  res.status(204).send()
});

module.exports = {
  app
}