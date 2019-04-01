import React, { Component } from 'react';
import { connect } from 'react-redux';

import {setPhotoSearchActions, getNextPhotosActions} from './reduxActions';

class PhotosPage extends Component {

  render() {
    this.props.setPhotosSearch();
    this.props.getNextPhotos();

    return (
      <div>
        PHOTOS PAGE
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setPhotosSearch: (data) => dispatch(setPhotoSearchActions.DEFAULT(data)),
  getNextPhotos: () => dispatch(getNextPhotosActions.DEFAULT()),
});
    
export default connect(null, mapDispatchToProps)(PhotosPage);