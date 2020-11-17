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

    console.log(mainGrid);
  };

  listings ? assignVars(listings) : assignVars(null);

  return (
    <div>
      <h1>Photo Grid</h1>
      <div>
        {
          mainGrid.map(photoObj => {
            return (
              <div id={photoObj.id}>
                <img src={photoObj.url}></img>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default PhotoCarousel;