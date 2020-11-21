import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './App.css';
import PhotoCarousel from './components/PhotoCarousel.jsx';
import PhotosModal from './components/modal/index.jsx';
import Header from './components/Header.jsx';

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

    var pathArr = window.location.pathname.split('/');
    var id = pathArr[pathArr.length - 1];

    axios.get(`/api/carousel-module/photos/${id}`)
      .then(res => {
        console.log(res.data[0]);
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
        console.log(this.state.listing);
      })
      .catch (err => {
        console.log('ERROR');
      });
  }

  render () {
    return (
      <div className={styles.asmodule}>
        <Header listing={this.state.listing}/>
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
