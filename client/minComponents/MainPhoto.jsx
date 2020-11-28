import React from 'react';
import styles from './css/MainPhoto.css';

class MainPhoto extends React.Component {
  constructor(props) {
    super(props);

    var data = this.props.data.data;

    this.state = {
      photos: data ? data[0].photos : null,
      currentPhoto: data ? data[0].photos[0] : null,
    };

  }

  render () {
    var photo = this.state.currentPhoto;

    return (
      <div className={styles.ascontainer}>
        <div className={styles.asphoto}>
          <img src={photo.url}></img>
          <div className={styles.asoverlay}>
            <text>{ (photo.photoId) + '/' + this.state.photos.length}</text>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPhoto;

