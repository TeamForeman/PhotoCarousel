import React from 'react';

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
            <button>share</button>
            <button>save</button>
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