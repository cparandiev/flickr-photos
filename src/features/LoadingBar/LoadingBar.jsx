import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pace from 'react-pace-progress';

import { showIndexSelector } from './selectors';
import { mergeSelectors } from '../../utils';
import './loading-bar.css';

export class LoadingBar extends Component {

  render() {
    const { showIndex } = this.props;
    
    return showIndex > 0
      ? <Pace className="pace-loader" color="red" height={2}/>
      : null;
  }
}

const selectors = [showIndexSelector];
const mapStateToProps = mergeSelectors(selectors);

export default connect(mapStateToProps)(LoadingBar);