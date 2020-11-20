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

  const createClass = (x) => {
    var className = 'photo' + x.photoId;
    return className;
  };

  listings ? assignVars(listings) : assignVars(null);

  return (
    <div className={styles.main}>
      <div className={styles.carousel}>
        <div className={styles.container}>
          {
            mainGrid.map(photoObj => {
              var className = createClass(photoObj);
              return (
                <div className={styles[className]} id={photoObj.id} onClick={ (e)=> { props.toggleModal(e, true, photoObj); } }>
                  <img className={styles.img} id={photoObj.id} src={photoObj.url}></img>
                </div>
              );
            })
          }
          <button className={styles.button} onClick={(e)=> { props.toggleModal(e, true, mainGrid[0]); } }>
            <div className={styles.text} >Show all photos</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;