import React from 'react';
import { mount, shallow, render } from 'enzyme';
import CarouselPhotostrip from './CarouselPhotostrip.jsx';

describe ('CarouselPhotostrip', () => {
  xit('should render correctly', () => {
    const CarouselPhotostripComponent = shallow(<CarouselPhotostrip />);
    expect(CarouselPhotostripComponent).toMatchSnapshot();
  });
});
