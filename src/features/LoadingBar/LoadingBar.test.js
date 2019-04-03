import React from 'react';
import { shallow } from 'enzyme';
import { LoadingBar } from './LoadingBar';

describe('Loading Bar', () => {
  it('return null', () => {
    const comp = shallow(<LoadingBar showIndex={0} />);
    expect(comp.isEmptyRender()).toEqual(true);
  });

  it('should render', () => {
    const comp = shallow(<LoadingBar showIndex={1} />);
    expect(comp.isEmptyRender()).toEqual(false);
  });
});