import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { map } from 'ramda';
import InfiniteScroll from 'react-infinite-scroller';

import { setPhotoSearchActions, getNextPhotosActions } from './reduxActions';
import { mergeSelectors } from '../../utils';
import { photosSelector, paginationInfoSelector } from './selectors';
import PhotoCard from './components/PhotoCard';
import TextInput from '../../components/TextInput';
import './photos-page.css';

class PhotosPage extends Component {

  componentDidMount(){
    const { getNextPhotos } = this.props;
    getNextPhotos();
  }


  render() {
    const { photos, getNextPhotos, paginationInfo } = this.props;
    
    return (
      <InfiniteScroll
        useWindow={false}
        pageStart={0}
        loadMore={getNextPhotos}
        hasMore={paginationInfo.totalPages > paginationInfo.lastFetchedPage} 
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <Container>
          <Row className="search-photo-input-row">
            <TextInput/>
          </Row>
          <Row>
              {map((photo) => <PhotoCard key={photo.id} {...photo}/>, photos)}
          </Row>
        </Container>
      </InfiniteScroll>
    );
  }
}

const selectors = [photosSelector, paginationInfoSelector];
const mapStateToProps = mergeSelectors(selectors);

const mapDispatchToProps = dispatch => ({
  setPhotosSearch: (data) => dispatch(setPhotoSearchActions.DEFAULT(data)),
  getNextPhotos: () => dispatch(getNextPhotosActions.DEFAULT()),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);