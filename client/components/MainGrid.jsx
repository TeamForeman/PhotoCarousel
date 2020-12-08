import React from 'react';
import styles from './css/MainGrid.css';

const MainGrid = (props) => {
  const listings = props.data.data;
  const mainGrid = [];

  const assignVars = (listings) => {
    let x = 0;

    if (listings) {
      const listing = listings[0];
      while (x < 5) {
        mainGrid.push(listing.photos[x]);
        x += 1;
      }
    }
  };

  const createClass = (x) => {
    const className = `asphoto${x.photoId}`;
    return className;
  };

  listings ? assignVars(listings) : assignVars(null);

  return (
    <div className={styles.asmain}>
      <div className={styles.ascarousel}>
        <div className={styles.ascontainer}>
          {
            mainGrid.map((photoObj) => {
              const className = createClass(photoObj);
              return (
                <div className={styles[className]}
                id={photoObj.id}
                onClick={(e) => { props.toggleModal(e, true, photoObj); }}>
                  <img className={styles.asimg} id={photoObj.id} src={photoObj.url} />
                </div>
              );
            })
          }
          <div className={`${styles.asgridOverlay} overlay`}
          onClick={(e) => { props.toggleModal(e, true, mainGrid[0]); }}>
            <div className={styles.asbutton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" role="presentation" aria-hidden="true" focusable="false" className={styles.asdotdecor}>
                <circle cx="1.5" cy="1.5" r="1.5" />
                <circle cx="1.5" cy="8.5" r="1.5" />
                <circle cx="8.5" cy="1.5" r="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <circle cx="15.5" cy="1.5" r="1.5" />
                <circle cx="15.5" cy="8.5" r="1.5" />
                <circle cx="1.5" cy="15.5" r="1.5" />
                <circle cx="8.5" cy="15.5" r="1.5" />
                <circle cx="15.5" cy="15.5" r="1.5" />
              </svg>
              <span className={styles.astext}>Show all photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGrid;
