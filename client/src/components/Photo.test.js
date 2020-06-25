import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Photo from './Photo.jsx';

describe ('Photo', () => {
  xit('should render correctly', () => {
    const Photoomponent = shallow(<Photo />);
    expect(PhotoComponent).toMatchSnapshot();
  });
});
