import React, { Component } from 'react';
import { connect } from 'react-redux';

import {setPhotoSearchActions, getPhotosActions} from './reduxActions';

class PhotosPage extends Component {
  render() {
    this.props.setPhotosSearch();
    this.props.getPhotos();

    return (
      <div>
        PHOTOS PAGE
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setPhotosSearch: (data) => dispatch(setPhotoSearchActions.DEFAULT(data)),
  getPhotos: (data) => dispatch(getPhotosActions.DEFAULT(data)),
});
    
export default connect(null, mapDispatchToProps)(PhotosPage);