import React from 'react';


const Modal = (props) => {

  return (
    <div>
      { props.show ? 'Building Modal' : null}
    </div>
  );

};


export default Modal;
