import React from 'react';

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
    <div>
      {
        mainGrid.map(photoObj => {
          return (
            <div id={photoObj.id} onClick={ (e)=> { props.toggleModal(e, true); } }>
              <img src={photoObj.url}></img>
            </div>
          );
        })
      }
    </div>
  );
};

export default PhotoCarousel;