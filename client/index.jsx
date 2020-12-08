/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

if (document.getElementById('service1')) {
  ReactDOM.render(<App />, document.getElementById('service1'));
} else {
  ReactDOM.render(<App />, document.getElementById('app'));
}
