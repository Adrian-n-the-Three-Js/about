import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  it('should display Hello App', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div').text()).toBe('Hello App');
  });
});

