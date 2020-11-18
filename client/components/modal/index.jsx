import React from 'react';


const Modal = (props) => {

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
      </div>
    );
  } else {
    return (
      <div>{null}</div>
    );
  }

};


export default Modal;
