import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PhotoCarousel from './components/PhotoCarousel.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data: []
    };
    this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log('mounting component');

    axios.get('/api/homes/photos')
      .then(res => {
        this.setState({
          data: res
        });
      })
      .catch (err => {
        console.log('ERROR: ', err);
      });
  }

  render () {
    return (
      <div>
        <h1>PHOTO CAROUSEL</h1>
        <PhotoCarousel data={this.state.data}/>
      </div>
    );
  }
}

export default App;
