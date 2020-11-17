import React from 'react';
// import rendered from 'react-test-renderer';
import App from './client/App.jsx';
import axios from 'axios';

test('dummy test is running', () => {
  expect(3).toBe(3);
});

test('Server is pulling 100 listings from the database', () => {
  var data = [];
  axios.get('/api/homes/photos')
    .then(res => {
      data = res.data;
    })
    .catch (err => {
      console.log('ERROR: ', err);
    })
    .then( () => {
      expect(data.length).toBe(100);
    });
});

