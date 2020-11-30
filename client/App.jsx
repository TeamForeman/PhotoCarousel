import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './App.css';
import Modal from 'react-modal';
import MainGrid from './components/MainGrid.jsx';
import PhotosModal from './components/modal/PhotosModal.jsx';
import Header from './components/Header.jsx';
import MainPhoto from './minComponents/MainPhoto.jsx';
import Description from './minComponents/Description.jsx';
import TopBar from './minComponents/TopBar.jsx';
import SaveFavorite from './components/SaveFavorite.jsx';

Modal.setAppElement(document.getElementById('app'));

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [],
      listing: {},
      modal: false,
      modalPhoto: null,
      windowWidth: window.innerWidth
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.toggleMinGrid = this.toggleMinGrid.bind(this);
  }

  toggleModal (e, state, photo) {
    e.preventDefault();

    this.setState({
      modal: state,
      modalPhoto: photo || null
    });

    if (state) {
      document.getElementsByClassName('overlay')[0].classList.add(styles.hidden);
    } else if (!state) {
      document.getElementsByClassName('overlay')[0].classList.remove(styles.hidden);
    }
  }

  toggleMinGrid (e) {
    console.log('attempting to toggle min grid');
  }

  listenScrollEvent(e) {
    console.log('Scroll event detected!', e);
  }

  handleResize (e) {
    // console.log('handling resize...');
    this.setState({ windowWidth: window.innerWidth });
    // console.log(this.state.windowWidth);
  }

  componentWillUnMount() {
    window.addEventListener('resize', this.handleResize);
    // document.getElementsByClassName('scrollwrapper')[0].removeEventListener('scroll', this.listenScrollEvent);
  }

  componentDidMount() {
    console.log('mounting component');

    window.addEventListener( 'resize', this.handleResize);
    window.addEventListener('scroll', this.listenScrollEvent);

    // console.log(document.getElementsByClassName('scrollwrapper'));


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
    if (this.state.data.length === 0) {
      return (
        <div>Rendering Components....</div>
      );
    } else if (this.state.windowWidth > 743 || this.state.modal === true) {
      return (
        <div className={styles.asmodule}>
          <Header listing={this.state.listing}/>
          <Modal isOpen={this.state.modal} className={styles.asModal}>
            <PhotosModal toggleModal={this.toggleModal} listing={this.state.listing} modalPhoto={this.state.modalPhoto}>
              Modal is open
            </PhotosModal>
          </Modal>
          <MainGrid toggleModal={this.toggleModal} data={this.state.data} modal={this.state.modal}/>
        </div>
      );
    } else if (this.state.windowWidth <= 743 && this.state.modal === false) {
      return (
        <div className={styles.asmodule}>
          <TopBar listing={this.state.listing}/>
          <MainPhoto data={this.state.data} width={this.state.windowWidth} toggleMinGrid={this.toggleMinGrid}/>
          <Description listing={this.state.listing}/>
        </div>
      );
    }
  }
}

export default App;
