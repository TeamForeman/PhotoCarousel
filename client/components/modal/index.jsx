import React from 'react';
import styles from './Modal.css';

// Goal here: change the photo on click of the button..

class PhotosModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: this.props.listing,
      photo: this.props.modalPhoto,
      id: this.props.modalPhoto.photoId

    };

    this.photos = this.state.listing.photos;
    this.index = this.state.id - 1;
    console.log(this.photos, this.index);
  }

  // write changePhoto function
  changePhoto(button) {
    console.log('clicked' + button);
    var photos = this.photos;
    var current = this.state.photo;
    var currentId = this.state.photo.photoId;
    var newId = currentId + 1;

    if (button === 'left') {
      if (this.state.id === 1) {
        console.log('hide the left button for this photo');
      } else {
        this.setState({
          photo: photos[currentId - 2],
          id: currentId - 1
        });
      }
      return;
    }
    if (button === 'right') {
      if (this.state.id === this.photos.length) {
        console.log('hide the right button for this photo');
      } else {
        this.setState({
          photo: photos[currentId],
          id: newId
        });
      }
      return;
    }
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={ (event) => { this.props.toggleModal(event, false); }}>X Close</button>
          <div>{ (this.state.photo.photoId) + '/' + this.props.listing.photos.length}</div>
          <div>
            <div className={styles.asshare}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={styles.asarrowIcon}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
            </div>
            <div>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={styles.asheartIcon}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
            </div>
          </div>
        </div>
        <div>
          <button onClick={ (e)=>{ this.changePhoto('left'); }}>{'<'}</button>
          <img src={this.state.photo.url}></img>
          <button onClick={ ()=>{ this.changePhoto('right'); }}>{'>'}</button>
        </div>
        <div> {this.state.photo.description} </div>
      </div>
    );
  }

}


export default PhotosModal;