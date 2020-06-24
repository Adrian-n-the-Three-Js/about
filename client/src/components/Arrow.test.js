import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Arrow from './Arrow.jsx';

describe ('Arrow', () => {
  xit('should render correctly', () => {
    const component = shallow(<Arrow />);

    expect(component).toMatchSnapshot();
  });
});
