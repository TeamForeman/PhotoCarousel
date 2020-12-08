/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styles from './App.css';
import MainGrid from './components/MainGrid.jsx';
import PhotosModal from './components/modal/PhotosModal.jsx';
import Header from './components/Header.jsx';
import MainPhoto from './minComponents/MainPhoto.jsx';
import Description from './minComponents/Description.jsx';
import TopBar from './minComponents/TopBar.jsx';
// import SaveFavorite from './components/SaveFavorite.jsx';
import MinGrid from './minComponents/MinGrid.jsx';

Modal.setAppElement(document.getElementById('app'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      listing: {},
      modal: false,
      modalPhoto: null,
      windowWidth: window.innerWidth,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.toggleMinGrid = this.toggleMinGrid.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    // const pathArr = window.location.pathname.split('/');
    // const id = pathArr[pathArr.length - 1];

    axios.get('/api/carousel-module/photos/3')
      .then((res) => {
        // console.log('The Data Before: ', res.data[0].rating);
        const { photos } = res.data[0];
        let photoId = 1;
        for (let i = 0; i < photos.length; i += 1) {
          photos[i].photoId = photoId;
          photoId += 1;
        }

        this.setState({
          data: res,
          listing: res.data[0],
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('ERROR: ', err);
      });
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
    const { modal } = this.state;
    if (modal === false && window.innerWidth > 743) {
      document.getElementsByClassName('overlay')[0].classList.remove(styles.hidden);
    } else if (modal === true && window.innerWidth > 743) {
      document.getElementsByClassName('overlay')[0].classList.add(styles.hidden);
    }
  }

  toggleMinGrid(e, state) {
    const { listing } = this.state;
    this.setState({
      modal: state,
      modalPhoto: listing.photos[0],
    });
  }

  toggleModal(e, state, photo) {
    e.preventDefault();

    this.setState({
      modal: state,
      modalPhoto: photo || null,
    });

    // if (state) {
    //   document.getElementsByClassName('overlay')[0].classList.add(styles.hidden);
    // } else if (!state) {
    //   document.getElementsByClassName('overlay')[0].classList.remove(styles.hidden);
    // }
  }

  // eslint-disable-next-line consistent-return
  render() {
    const {
      data, windowWidth, modal, listing, modalPhoto,
    } = this.state;
    if (data.length === 0) {
      return (
        <div />
      );
    } if (windowWidth > 743 || modal) {
      return (
        <div className={styles.asmodule}>
          <Header listing={listing} />
          <Modal isOpen={modal} className={styles.asModal}>
            <PhotosModal toggleModal={this.toggleModal} listing={listing} modalPhoto={modalPhoto}>
              Modal is open
            </PhotosModal>
          </Modal>
          <MainGrid toggleModal={this.toggleModal} data={data} modal={modal} />
        </div>
      );
    } if (windowWidth <= 743 && modal === false) {
      return (
        <div className={styles.asmodule}>
          <TopBar listing={listing} />
          <MainPhoto data={data} width={windowWidth} toggleMinGrid={this.toggleMinGrid} />
          <Description listing={listing} />
        </div>
      );
    } if (windowWidth <= 743 && modal === true) {
      return (
        <MinGrid data={data} toggleMinGrid={this.toggleMinGrid} />
      );
    }
  }
}

export default App;
