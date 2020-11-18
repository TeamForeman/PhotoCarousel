import React from 'react';


const PhotosModal = (props) => {

  if (props.show) {
    return (
      <div>
        <div>
          <button onClick={ (event) => { props.toggleModal(event, false) }}>X Close</button>
          <div>photo/photos</div>
          <div>
            <button>share</button>
            <button>save</button>
          </div>
        </div>
        <div>Modal Photos</div>
        <div> photo description will go here </div>
      </div>
    );
  } else {
    return (
      <div>{null}</div>
    );
  }

};


export default PhotosModal;
