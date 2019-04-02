import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { map, join } from 'ramda';
import InfiniteScroll from 'react-infinite-scroller';

import { setPhotoSearchActions, getNextPhotosActions } from './reduxActions';
import { mergeSelectors } from '../../utils';
import { photosSelector, paginationInfoSelector, photoFiltersSelector } from './selectors';
import PhotoCard from './components/PhotoCard';
import Input from '../../components/Input';
import './photos-page.css';

class PhotosPage extends Component {

  handleSearchChange = (e) => {
    const { setPhotosSearch } = this.props;
    const value = e.target.value;
    setPhotosSearch(value);
  }

  render() {
    const { photos, getNextPhotos, paginationInfo, filters } = this.props;

    return (
      <InfiniteScroll
        useWindow={false}
        pageStart={0}
        loadMore={() => getNextPhotos()}
        hasMore={paginationInfo.totalPages > paginationInfo.lastFetchedPage} 
      >
        <Container>
          <Row className="search-photo-input-row">
            <Input type="search" value={join(' ', filters.tags)} onChange={this.handleSearchChange}/>
          </Row>
          <Row>
              {map((photo) => <PhotoCard key={photo.id} {...photo}/>, photos)}
          </Row>
        </Container>
      </InfiniteScroll>
    );
  }
}

const selectors = [photosSelector, paginationInfoSelector, photoFiltersSelector];
const mapStateToProps = mergeSelectors(selectors);

const mapDispatchToProps = dispatch => ({
  setPhotosSearch: (data) => dispatch(setPhotoSearchActions.DEFAULT(data)),
  getNextPhotos: () => dispatch(getNextPhotosActions.DEFAULT()),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);