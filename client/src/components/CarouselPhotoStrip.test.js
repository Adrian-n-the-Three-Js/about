import React from 'react';
import { mount, shallow, render } from 'enzyme';
import CarouselPhotostrip from './CarouselPhotostrip.jsx';

describe ('CarouselPhotostrip', () => {
  it('should render correctly', () => {
    const PhotostripComponent = shallow(<CarouselPhotostrip />);
    expect(PhotostripComponent).toMatchSnapshot();
  });

  it('should trigger onClick prop when clicked', () => {
    const mock = jest.fn();
    const PhotostripComponent = shallow(<CarouselPhotostrip onClick={mock} />);
    PhotostripComponent.find('.photostrip').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
