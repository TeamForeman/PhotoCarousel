console.log('In the server file');

const express = require('express');
const app = express();
const db = require('../database/mongo.js');
const bluebird = require('bluebird');
const path = require('path');

const port = 3003;

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));


app.get('/listing/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/homes/photos/:id', (req, res) => {
  console.log('IN THE GET REQUEST');

  var id = req.params.id;

  db.returnListing(id, (x) => {

    var data = x;
    res.send(data);
  });

});

app.put('/api/homes/photos', (req, res) => {
  console.log('IN THE PUT REQ');
  res.send('Got a PUT request');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
