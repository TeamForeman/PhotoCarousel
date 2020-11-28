import React from 'react';

class MainPhoto extends React.Component {
  constructor(props) {
    super(props);

    var data = this.props.data.data;

    this.state = {
      photos: data ? data[0].photos : null,
      currentPhoto: data ? data[0].photos[0] : null,
      state: 1,
    };

  }

  redo () {
    var count = this.state.state;
    count++;
    if (this.state.photos === null) {
      this.setState({
        state: count
      });
    }
    console.log(this.state.state);
  }


  render () {
    var photoURL = this.state.currentPhoto;

    return (
      console.log('eeelp'),
      <div>
        <div>HIELOOO</div>
        {photoURL ? <img src={photoURL.url}></img> : 'baaaaaaabe i appreciate you! it didn\'t work but it\'s ok <3'}
      </div>
    );
  }

}

export default MainPhoto;



// else {
//   return (
//     console.log('nud', this.props),
//     <div>No data</div>
//   );
// }