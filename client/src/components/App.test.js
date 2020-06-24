import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';
import axios from 'axios';

describe('App', () => {
  it('should display Hello App', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div').text()).toBe('Hello App');
  });

  // it('should fetch data from the API', async () => {
  //   mockAxios.get.mockImplementationOnce( () =>
  //     Promise.resolve({
  //       data: {results: []}
  //     })
  //   );

  //   const images = await
  //   await expect()
  // })
});
