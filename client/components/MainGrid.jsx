import React from 'react';
import styles from './css/MainGrid.css';


const MainGrid = (props) => {
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
    var className = 'asphoto' + x.photoId;
    return className;
  };

  listings ? assignVars(listings) : assignVars(null);

  return (
    <div className={styles.asmain}>
      <div className={styles.ascarousel}>
        <div className={styles.ascontainer}>
          {
            mainGrid.map(photoObj => {
              var className = createClass(photoObj);
              return (
                <div className={styles[className]} id={photoObj.id} onClick={ (e)=> { props.toggleModal(e, true, photoObj); } }>
                  <img className={styles.asimg} id={photoObj.id} src={photoObj.url}></img>
                </div>
              );
            })
          }
          <div className={`${styles.asgridOverlay} overlay`} onClick={(e)=> { props.toggleModal(e, true, mainGrid[0]); } }>
            <div className={styles.asbutton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" role="presentation" aria-hidden="true" focusable="false" className={styles.asdotdecor}><circle cx="1.5" cy="1.5" r="1.5"></circle><circle cx="1.5" cy="8.5" r="1.5"></circle><circle cx="8.5" cy="1.5" r="1.5"></circle><circle cx="8.5" cy="8.5" r="1.5"></circle><circle cx="15.5" cy="1.5" r="1.5"></circle><circle cx="15.5" cy="8.5" r="1.5"></circle><circle cx="1.5" cy="15.5" r="1.5"></circle><circle cx="8.5" cy="15.5" r="1.5"></circle><circle cx="15.5" cy="15.5" r="1.5"></circle></svg>
              <text className={styles.astext} >Show all photos</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGrid;