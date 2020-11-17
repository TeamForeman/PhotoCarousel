import React from 'react';

const PhotoCarousel = (props) => {
  var listings = props.data.data;
  var firstPhoto;
  var firstDesc;

  const assignVars = (listings) => {
    if (listings) {
      firstPhoto = listings[0].photos[0].url;
      firstDesc = listings[0].photos[0].description;
    } else {
      firstPhoto = 'Image loading...';
      firstDesc = '...';
    }
  };

  listings ? assignVars(listings) : assignVars(null);

  return (
    <div>
      <h1>What?</h1>
      <div>
        <img src={firstPhoto}></img>
      </div>
    </div>
  );
};

export default PhotoCarousel;