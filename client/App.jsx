import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super (props);
    state = {

    };
  }

  componentDidMount() {
    console.log('mounting component');

    axios.get('/api/homes/photos');
  }

  render () {
    return <h1>THIS IS UP ON THE RENDER</h1>;
  }
}