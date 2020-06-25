import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Arrow from '../Arrow.jsx';

describe ('Arrow', () => {
  xit('should render correctly', () => {
    const ArrowComponent = shallow(<Arrow />);
    expect(ArrowComponent).toMatchSnapshot();
  });

  xit('should trigger onClick prop when clicked', () => {
    const mock = jest.fn();
    const ArrowComponent = shallow(<Arrow onClick={mock} />);
    ArrowComponent.find('.arrow').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
