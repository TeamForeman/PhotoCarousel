import React from 'react';
import styles from './PhotoCarousel.css';

const PhotoCarousel = (props) => {
  var listings = props.data.data;
  var mainGrid = [];

  const assignVars = (listings) => {
    var x = 0;

    if (listings) {
      var listing = listings[0];
      while (x < 5) {
        mainGrid.push(listing.photos[x]);
        x++;
      }
    }
  };

  listings ? assignVars(listings) : assignVars(null);

  return (
    <div className="grid">
      {
        mainGrid.map(photoObj => {
          console.log(photoObj);
          return (
            <div id={photoObj.id} onClick={ (e)=> { props.toggleModal(e, true, photoObj); } }>
              <img className={styles.photo} id={photoObj.id} src={photoObj.url}></img>
            </div>
          );
        })
      }
    </div>
  );
};

export default PhotoCarousel;