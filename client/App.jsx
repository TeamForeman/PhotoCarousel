import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './App.css';
import PhotoCarousel from './components/PhotoCarousel.jsx';
import PhotosModal from './components/modal/index.jsx';

Modal.setAppElement(document.getElementById('app'));

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [],
      listing: {},
      modal: false,
      modalPhoto: null,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal (e, state, photo) {
    e.preventDefault();
    console.log(e);
    this.setState({
      modal: state,
      modalPhoto: photo || null
    });
  }

  componentDidMount() {
    console.log('mounting component');

    axios.get('/api/homes/photos')
      .then(res => {
        var photos = res.data[0].photos;
        var photoId = 1;
        for (var i = 0; i < photos.length; i ++) {
          photos[i].photoId = photoId;
          photoId++;
        }

        this.setState({
          data: res,
          listing: res.data[0]
        });
      })
      .catch (err => {
        console.log('ERROR');
      });
  }

  render () {
    return (
      <div>
        <h1 className={styles.header} >PHOTO CAROUSEL</h1>
        <Modal isOpen={this.state.modal} >
          <PhotosModal toggleModal={this.toggleModal} listing={this.state.listing} modalPhoto={this.state.modalPhoto} >
            Modal is open
          </PhotosModal>
        </Modal>
        <PhotoCarousel toggleModal={this.toggleModal} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
