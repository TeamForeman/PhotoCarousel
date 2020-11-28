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
    var photoURL = this.state.currentPhoto;

    return (
      <div>
        <img src={photoURL.url}></img>
      </div>
    );
  }
}

export default MainPhoto;

