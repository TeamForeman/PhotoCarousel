import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PhotoCarousel from './components/PhotoCarousel.jsx';
import Modal from './components/modal/index.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [],
      modal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal (e) {
    e.preventDefault();
    console.log('Attempting to toggle modal');
    var toggled = !this.state.modal;

    this.setState({
      modal: toggled
    });
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
        <Modal show={this.state.modal}/>
        <PhotoCarousel toggleModal={this.toggleModal} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
