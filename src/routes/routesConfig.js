import HomePage from '../features/HomePage';
import PhotosPage from '../features/PhotosPage';

export default {
  home: {
    path: '/',
    component: HomePage,
    exact: true
  },
  photos: {
    path: '/photos',
    component: PhotosPage,
    exact: true
  }
};