import React, { Component } from 'react';
import { connect } from 'react-redux';

import {setPhotoSearchActions} from './reduxActions';

class PhotosPage extends Component {
  render() {
    this.props.setPhotosSearch();

    return (
      <div>
        PHOTOS PAGE
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setPhotosSearch: (data) => dispatch(setPhotoSearchActions.DEFAULT(data)),
});
    
export default connect(null, mapDispatchToProps)(PhotosPage);