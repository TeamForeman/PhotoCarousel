// import react

console.log('In the server file');

const express = require('express');
const app = express();

const port = 3000; // change the port at some point?

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/homes/photos', (req, res) => {
  console.log('IN THE GET REQ');
  res.send('Got a GET request');
});

app.put('/api/homes/photos', (req, res) => {
  console.log('IN THE PUT REQ');
  res.send('Got a PUT request');
});